require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const pesan = require("./pesan.json");
const openai = new OpenAIApi(configuration);

const createChatCompletion = async (prompt) => {
  pesan.push({ role: "user", content: prompt });

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: pesan,
    max_tokens: 100,
    temperature: 1,
    top_p: 0.9,
  });

  console.log(
    `Pesan : ${prompt}\nJawab : ${completion.data.choices[0].message.content}\n`
  );
};

setTimeout(() => {
  createChatCompletion("pablo berkata nyayi dong buat alice");
}, 1000 * 1);

setTimeout(() => {
  createChatCompletion("jukut berkata bahasa sundanya aku sayang kamu");
}, 1000 * 21);

setTimeout(() => {
  createChatCompletion("jukut berkata aku juga sayang kamu hideko");
}, 1000 * 43);

setTimeout(() => {
  createChatCompletion("alice berkaya buah buah apa yang bikin pusing");
}, 1000 * 65);

setTimeout(() => {
  createChatCompletion("alice berkaya apel, pusing kan");
}, 1000 * 87);
