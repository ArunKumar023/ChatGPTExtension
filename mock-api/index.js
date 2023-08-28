const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3000;

app.use(cors()); // Use the cors middleware

app.use(express.json());

app.post("/mock-api", (req, res) => {
  const question = req.body.question;
  const response = "Hello from GenAI!";
  res.json({ response });
});

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}`);
});
