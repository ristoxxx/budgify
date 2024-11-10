export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // Example: Basic user verification (you could integrate with a database here)
      if (username === 'user' && password === 'pass') {
        return res.status(200).json({ success: true, token: 'dummy-token' });
      }
  
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }