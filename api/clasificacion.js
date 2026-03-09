export default async function handler(req, res) {

  try {

    const response = await fetch(
      "https://futbol7amistad.com/api/tournaments/191?tab=classification&stage=0"
    );

    const data = await response.json();

    const clasificacion = data.stages[0].leagueClassification;

    res.status(200).json({
      teams: data.teams,
      classification: clasificacion
    });

  } catch (error) {

    res.status(500).json({
      error: "Error cargando clasificación",
      detalle: error.toString()
    });

  }

}
