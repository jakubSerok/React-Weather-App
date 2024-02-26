export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7ca90ad742msh4214312c4b93608p1f7439jsne8d484cb999b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "2e7d5d32e2d0aeb0a9669ed29ec4397a";

try {
  const response = await fetch(GEO_API_URL, geoApiOptions);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
