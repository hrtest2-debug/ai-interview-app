export default async function handler(req, res) {

const { answer } = req.body;

const response = await fetch("https://api.anthropic.com/v1/messages", {
method: "POST",
headers: {
"Content-Type": "application/json",
"x-api-key": process.env.CLAUDE_API_KEY,
"anthropic-version": "2023-06-01"
},
body: JSON.stringify({
model: "claude-3-haiku-20240307",
max_tokens: 200,
messages: [
{
role: "user",
content: `You are a professional interview coach.

Score this answer from 1 to 10.

Give short feedback.

Answer: ${answer}`
}
]
})
});

const data = await response.json();

res.status(200).json({ result: data.content[0].text });

}
