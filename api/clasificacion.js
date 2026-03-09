export default async function handler(req, res) {

  const response = await fetch(
    "https://futbol7amistad.com/api/tournaments/191/stages/268/classification"
  );

  const data = await response.json();

  res.status(200).json(data);

}
