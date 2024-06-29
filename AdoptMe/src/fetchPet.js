const fetchPet = async ({ queryKey }) => {
  console.log("query key...", queryKey);
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiRes.status) {
    throw new Error(`details/${id} fetch not OK`);
  }
  return apiRes.json();
};
export default fetchPet;
