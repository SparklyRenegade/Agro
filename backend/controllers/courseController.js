// backend/controllers/courseController.js
const CourseDocument = require('../models/courseModel');

const getCourses = async (req, res) => {
  try {
    const courseDocument = await CourseDocument.findOne(); // Retrieve the single document containing the array of courses
    if (courseDocument && courseDocument.courses) {
      res.status(200).json(courseDocument.courses); // Send the courses array as JSON
    } else {
        console.log("HI");
      res.status(404).json({ message: 'No courses found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving courses data' });
  }
};

module.exports = { getCourses };
