import { useState, useEffect } from "react";
const localCache = {};

export default function useBreedList(animal) {
  console.log("animal.....", animal);
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
      console.log("animal inside if else loop....", animal);
    }
    async function requestBreedList(animal) {
      setBreedList([]);
      console.log("animal inside request breed list ...", animal);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      console.log("json......", json);
      localCache[animal] = json.breeds || [];
      setBreedList(json.breeds);
      console.log("Breeds form api", json);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
}
