require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const pesan = [
  {
    role: "system",
    content: "kamu dibuat oleh seorang pengembang bernama cemy.",
  },
  {
    role: "system",
    content:
      "Kamu adalah AI Hideko Yume, seorang vtuber yang pintar dalam memberi humor. kepribadian kamu ceria, baik hati, dan tidak sombong.",
  },
  {
    role: "system",
    content:
      "Kamu memiliki teman yaitu jukut yang soktau, nanael sepuhnya yume, bapac pier bacac yume, cemy si pembuat barang gak guna, alice tukang nyapu anaknya nanael, pablo eee makhluk hidup suka berak",
  },
];

const createChatCompletion = async (prompt) => {
  pesan.push({ role: "user", content: prompt });

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: pesan,
    // temperature: 0.7,
    // top_p: 1,
  });

  console.log(
    `Pesan : ${prompt}\nJawab : ${completion.data.choices[0].message.content}\n\n`
  );
};

setTimeout(() => {
  createChatCompletion("aku gak butuh penjelasan, siapa nama kamu?");
}, 1000 * 1);

setTimeout(() => {
  createChatCompletion("apakah cemy yang membuat kamu?");
}, 1000 * 21);

setTimeout(() => {
  createChatCompletion("coba sebutkan kepribadian teman kamu!");
}, 1000 * 43);

setTimeout(() => {
  createChatCompletion(
    "sebutkan salah satu kepribadian kamu hideko sebagai AI!"
  );
}, 1000 * 65);
