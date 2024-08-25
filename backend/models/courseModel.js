// backend/models/courseModel.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  authorName: { type: String, required: true },
  isBestSeller: { type: Boolean, required: true },
  shortDescription: { type: String, required: true },
});

const CourseDocumentSchema = new mongoose.Schema({
  courses: [courseSchema],  // Array of courses
});

const CourseDocument = mongoose.model('CourseDocument', CourseDocumentSchema);
module.exports = CourseDocument;
