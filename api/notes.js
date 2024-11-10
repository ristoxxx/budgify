let notes = []; // In-memory notes storage. Replace with a database for production.

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ notes });
  } else if (req.method === 'POST') {
    const { note, height, color } = req.body;
    notes.push({ note, height, color });
    return res.status(201).json({ success: true, notes });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}