import React, { useState } from "react";
import axios from "axios";

const Users = ({ onDataFetch }) => {
  const [sirName, setSirName] = useState("");
  const [courseData, setCourseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/Data.json"); // Adjust the path to your JSON file
      const matchingCourses = response.data.filter(
        (course) => course.sir === sirName
      );

      if (matchingCourses.length > 0) {
        setCourseData(matchingCourses);
        onDataFetch(matchingCourses); // Call the onDataFetch prop with the matching data
      } else {
        setCourseData(null);
        console.error(`No courses found for Sir ${sirName}.`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      // Check if the error has a response property
      if (error.response) {
        // Log the entire error object for more details
        console.error(
          "Axios error details:",
          error.response.status,
          error.response.statusText,
          error.response.data
        );
      } else {
        console.error("Axios error details:", error.message);
      }
    }
  };

  return (
    <div>
      <label>
        Sir Name:
        <input
          type="text"
          value={sirName}
          onChange={(e) => setSirName(e.target.value)}
        />
      </label>
      <button onClick={fetchData}>Fetch Data</button>

      {courseData && (
        <div>
          <h2>Matching Courses</h2>
          {courseData.map((course) => (
            <div key={course.id}>
              <p>Name: {course.name}</p>
              <p>Level: {course.level}</p>
              <p>Description: {course.description}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
