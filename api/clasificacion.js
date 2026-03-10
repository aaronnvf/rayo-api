export default async function handler(req, res) {

try {

const equiposRes = await fetch("https://futbol7amistad.com/api/tournaments/191");
const equiposData = await equiposRes.json();

const partidosRes = await fetch("https://futbol7amistad.com/api/tournaments/191/filterMatchesByDatesRange");
const partidosData = await partidosRes.json();

res.setHeader("Access-Control-Allow-Origin", "*");

res.status(200).json({
teams: equiposData.teams,
matches: partidosData
});

} catch (error) {

res.status(500).json({ error: "Error cargando datos" });

}

}
