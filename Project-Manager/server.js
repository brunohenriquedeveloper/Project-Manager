const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://BrunoUser:senha1234@cluster0.fxtnbbg.mongodb.net/projectManager?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB Atlas!');
}).catch((err) => {
  console.error('Erro na conexão com MongoDB Atlas:', err);
});

const CategorySchema = new mongoose.Schema({
  id: String,
  name: String
});

const Category = mongoose.model('Category', CategorySchema);

app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Backend rodando na porta 5000'));