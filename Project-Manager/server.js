import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Project from './src/components/models/Project.js';
import Category from './src/components/models/Category.js';

const app = express();
app.use(cors());
app.use(express.json());

console.log('Deploy versão X rodando!');

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://BrunoUser:senha1234@cluster0.fxtnbbg.mongodb.net/projectManager?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB Atlas!'))
  .catch(err => console.error('Erro ao conectar:', err));

// Rota para listar todas as categorias
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para listar todos os projetos
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para pegar um projeto pelo id
app.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar projeto pelo _id (troca findOneAndUpdate por findByIdAndUpdate)
app.patch('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar projeto pelo _id (troca findOneAndDelete por findByIdAndDelete)
app.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projeto não encontrado' });
    res.json({ message: 'Projeto removido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
