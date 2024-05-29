import { account } from '../../utils/appwrite';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password, name } = req.body;

  try {
    const user = await account.create('unique()', email, password, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
