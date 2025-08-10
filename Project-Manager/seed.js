import mongoose from 'mongoose';

const uri = 'mongodb+srv://BrunoUser:senha1234@cluster0.fxtnbbg.mongodb.net/projectManager?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB Atlas!');
  seedCategories();
})
.catch(err => console.error('Erro na conexão:', err));

const CategorySchema = new mongoose.Schema({
  id: String,
  name: String
});

const Category = mongoose.model('Category', CategorySchema);

const categories = [
  { id: "1", name: "Infraestrutura" },
  { id: "2", name: "Desenvolvimento" },
  { id: "3", name: "Design" },
  { id: "4", name: "Planejamento" }
];

async function seedCategories() {
  try {
    await Category.deleteMany();
    await Category.insertMany(categories);
    console.log('Categorias inseridas com sucesso!');
    mongoose.disconnect();
  } catch (err) {
    console.error('Erro ao inserir categorias:', err);
  }
}
