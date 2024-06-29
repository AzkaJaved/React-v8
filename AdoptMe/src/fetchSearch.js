const fetchSearch = async ({ queryKey }) => {
  const animal = queryKey[1];
  const location = queryKey[2];
  const breed = queryKey[3];
  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!apiRes) throw new Error(`${animal}-${breed} not found at ${location}`);
  return apiRes.json();
};
export default fetchSearch;
