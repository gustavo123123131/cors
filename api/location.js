export default async function handler(req, res) {
  try {
    // Chama a API antiga
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    // Libera CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar localização." });
  }
}
