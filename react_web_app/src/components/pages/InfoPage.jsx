import { getDataFromAPI } from "../../service/wheatherData";

function InfoPage() {
  const pokemonName = "bulbasaur";
  const link = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  const data = getDataFromAPI(link);
  console.log(data);
  return <div>Data value in consol, to try an easy GET request.</div>;
}

export default InfoPage;
