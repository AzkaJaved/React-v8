const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} not found`);
  }
  //   console.log(apiRes.json());
  return apiRes.json();
};
export default fetchBreedList;
