export const fetchSkins = async () => {


  const response = await fetch('/src/skins.json');
  const data = await response.json();
  return data;

};
