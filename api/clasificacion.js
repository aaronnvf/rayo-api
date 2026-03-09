export default async function handler(req, res) {
  try {

    const response = await fetch(
      "https://futbol7amistad.com/api/tournaments/191?tab=classification&stage=0"
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      error: "Error al obtener datos",
      detalle: error.toString()
    });

  }
}
