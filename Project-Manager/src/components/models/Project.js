import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  description: { type: String },
});

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  budget: { type: Number, required: true },
  category: {
    id: { type: String },
    name: { type: String },
  },
  cost: { type: Number, default: 0 },
  services: [ServiceSchema],
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
