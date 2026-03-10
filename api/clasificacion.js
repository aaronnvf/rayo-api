export default async function handler(req, res) {

const response = await fetch("https://futbol7amistad.com/api/tournaments/191");

const data = await response.json();

const clasificacion = data.classification;

const equipos = data.teams;

res.setHeader("Access-Control-Allow-Origin", "*");

res.status(200).json({
classification: clasificacion,
teams: equipos
});

}
