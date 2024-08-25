// insertDummyData.js

const mongoose = require('mongoose');
require('dotenv').config(); // To use environment variables

// Define the course schema
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  authorName: { type: String, required: true },
  isBestSeller: { type: Boolean, required: true },
  shortDescription: { type: String, required: true },
});

// Define the main schema to match your MongoDB structure
const mainSchema = new mongoose.Schema({
  courses: [courseSchema],  // Array of courses
});

const CourseDocument = mongoose.model('CourseDocument', mainSchema);

// Connect to the database and insert data
async function insertData() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'arin', // Specify your database name
    });
    console.log('Connected to MongoDB');
    
    // Dummy data
    const courseData = [
      {
        name: "Introduction to Machine Learning",
        price: 49.99,
        rating: 4.8,
        authorName: "Jane Doe",
        isBestSeller: true,
        shortDescription: "Learn the fundamentals of machine learning and build your first model.",
      },
      {
        name: "Advanced React with TypeScript",
        price: 79.99,
        rating: 4.6,
        authorName: "John Smith",
        isBestSeller: false,
        shortDescription: "Master React and TypeScript to build scalable and maintainable applications.",
      },
      // Add more courses as needed
    ];

    // Create a new document in the courses collection
    const courseDocument = new CourseDocument({ courses: courseData });

    // Insert the document into the collection
    await courseDocument.save();
    console.log('Dummy data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    mongoose.connection.close(); // Close the connection after insertion or on error
  }
}

// Run the insert function
insertData();
