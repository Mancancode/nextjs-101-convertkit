export default (req, res) => {

   const { email, tags } = req.query;

   if (!email) {
      return res.status(400).json({ error: "Email is required" });
   }

   // Part 2 continue

};