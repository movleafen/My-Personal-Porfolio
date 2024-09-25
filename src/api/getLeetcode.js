export default async function GetLeetCode(req, res) {
    try {
      const result = await fetch('https://leetcodeapi-v1.vercel.app/movleafen111');
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }