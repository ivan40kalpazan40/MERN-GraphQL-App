const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  description: { type: String },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
