import { getSession } from 'next-auth/client';

export default handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: 'Unauthenticated user' });
  } else {
    res.status(200).json({ message: 'Success', session });
  }
};
