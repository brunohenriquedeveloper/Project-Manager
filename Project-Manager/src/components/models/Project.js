import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  id: String,
  name: String,
  cost: Number,
  description: String,
});

const ProjectSchema = new mongoose.Schema({
  id: String,
  name: String,
  budget: Number,
  category: {
    id: String,
    name: String,
  },
  cost: Number,
  services: [ServiceSchema],
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
