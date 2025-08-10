import mongoose from 'mongoose';
import Category from './models/Category.js';
import Project from './models/Project.js';

const uri = 'mongodb+srv://BrunoUser:senha1234@cluster0.fxtnbbg.mongodb.net/projectManager?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});

const categories = [
  { id: "1", name: "Infraestrutura" },
  { id: "2", name: "Desenvolvimento" },
  { id: "3", name: "Design" },
  { id: "4", name: "Planejamento" }
];

const projects = [
  {
    name: "Construção de um Software",
    budget: 1300,
    category: { id: "2", name: "Desenvolvimento" },
    cost: 1220,
    services: [
      {
        name: "Teste",
        cost: 1220,
        description: "Encontrar trabalhadores especializados na construção de software"
      }
    ]
  },
  {
    name: "Construção de um Software",
    budget: 3000,
    category: { id: "2", name: "Desenvolvimento" },
    cost: 0,
    services: []
  },
  {
    name: "Construção de um Software",
    budget: 3000,
    category: { id: "3", name: "Design" },
    cost: 0,
    services: []
  }
];

async function seed() {
  try {
    await mongoose.connect(uri);
    await Category.deleteMany();
    await Category.insertMany(categories);
    await Project.deleteMany();
    await Project.insertMany(projects);
    console.log('Banco populado com sucesso!');
    await mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
}

seed();
