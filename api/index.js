export default async function handler(req, res) {
  const number = req.query.number || req.query.query;

  if (!number) {
    return res.status(400).json({ error: "Number is required!" });
  }

  try {
    const apiUrl = `https://shadowscriptz.xyz/public_apis/simdetailsapi.php?number=${number}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json({
      success: true,
      number,
      result: data
    });
  } catch (err) {
    res.status(500).json({ error: "API Error", details: err.message });
  }
}
