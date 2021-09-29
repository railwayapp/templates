import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.post("/webhook", async (req, res) => {
  /*
    SLACK_WEBHOOK_URL is an environment variable
    that should be configured on Railway
  */
  if (!process.env.SLACK_WEBHOOK_URL) {
    res.status(500).json("Please add a Slack webhook URL");
    return;
  }

  const body = JSON.stringify({ text: "Hello from the webhook! :rocket:" });

  try {
    const response = await axios.post(process.env.SLACK_WEBHOOK_URL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.sendStatus(response.status);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
