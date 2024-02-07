// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let courses = [
  {
    id: "1",
    name: "java",
    level: "Easy",
    description: "Fullstack java",
    batches: [
      {
        date: "2024-02-08",
        time: "18:39",
        batchname: "Batch 1",
        sirname: "Sushmit",
      },
      {
        date: "2024-02-09",
        time: "19:00",
        batchname: "Batch 2",
        sirname: "John Doe",
      },
    ],
  },
  // Other course objects...
];

// Endpoint to add a batch to a specific course
app.post('/course/:courseId/addbatch', (req, res) => {
  const courseId = req.params.courseId;
  const batchData = req.body;

  // Find the course with the given courseId
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  // Add the batchData to the batches array of the course
  course.batches.push(batchData);

  res.json({ message: 'Batch added successfully' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
