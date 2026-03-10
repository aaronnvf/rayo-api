export default async function handler(req, res) {

  try {

    const equiposRes = await fetch(
      "https://futbol7amistad.com/api/tournaments/191"
    );
    const equiposData = await equiposRes.json();

    const partidosRes = await fetch(
      "https://futbol7amistad.com/api/matches/filterMatchesByDatesRange",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          startTime: "2024-01-01T00:00:00.000Z",
          endTime: "2030-01-01T00:00:00.000Z",
          idTournament: 191
        })
      }
    );

    const partidosData = await partidosRes.json();

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).json({
      teams: equiposData.teams,
      matches: partidosData
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Error cargando datos",
      detalle: error.message
    });

  }

}
