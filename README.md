# [ChatGPT](https://platform.openai.com/)

Ini merupakan repo yang saya buat dari keingin tahu saya tentang teknologi terbaru yaitu chatgpt, hanya projek sedrhana.

## Installation

Gunakan package manager [npm](https://nodejs.org/en) untuk menginstal semua packagenya.

```bash
npm install
```

### Usage

Disini saya mengunakan `index.js` sebagai main script nya,
cara menjalankan nya dengan `node index.js` atau `npm start`

### Env

```bash
cp .example.env .env
```

```env
OPENAI_API_KEY={Your OpenAI Key}
```

### Package

```json
"dependencies": {
  "dotenv": "^16.0.3",
  "openai": "^3.2.1"
}
```

### Scripts

```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```
