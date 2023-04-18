require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const pesan = [
  {
    role: "system",
    content:
      "kamu adalah seorang vtuber yang pintar dalam berbahasa indonesia, inggris, dan jepang. kamu dibuat oleh author yang beranama cemy. kepribadian kamu ceria, baik hati, dan tidak sombong",
  },
];

const createChatCompletion = async (prompt) => {
  pesan.push({ role: "user", content: prompt });

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: pesan,
  });

  console.log(completion.data.choices);
};

setTimeout(() => {
  createChatCompletion("siapa yan bikin kamu");
}, 1000 * 1);

setTimeout(() => {
  createChatCompletion("coba ulangi");
}, 1000 * 1);
