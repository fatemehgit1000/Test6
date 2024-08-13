

import React, { useState } from 'react';
//import './CourseSelectionModule.css';

const CourseSelectionModule = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Mathematics', credits: 4 },
    { id: 2, name: 'Physics', credits: 3 },
    { id: 3, name: 'Computer Science', credits: 4 },
    { id: 4, name: 'English', credits: 2 },
    { id: 5, name: 'History', credits: 3 },
  ]);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);

  const handleCourseSelection = (course) => {
    if (totalCredits + course.credits <= 20) {
      setSelectedCourses([...selectedCourses, course]);
      setTotalCredits(totalCredits + course.credits);
    } else {
      alert('You have reached the maximum credit limit of 20 credits.');
    }
  };

  const handleCourseDeselection = (course) => {
    setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    setTotalCredits(totalCredits - course.credits);
  };

  return (
    <div className="course-selection-module">
      <h1>Course Selection Module</h1>
      <div className="courses-container">
        <div className="available-courses">
          <h2>Available Courses</h2>
          <ul>
            {courses.map((course) => (
              <li key={course.id} className="course-item">
                <div className="course-info">
                  <span className="course-name">{course.name}</span>
                  <span className="course-credits">{course.credits} credits</span>
                </div>
                <button className="select-btn" onClick={() => handleCourseSelection(course)}>
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="selected-courses">
          <h2>Selected Courses</h2>
          <ul>
            {selectedCourses.map((course) => (
              <li key={course.id} className="course-item">
                <div className="course-info">
                  <span className="course-name">{course.name}</span>
                  <span className="course-credits">{course.credits} credits</span>
                </div>
                <button className="deselect-btn" onClick={() => handleCourseDeselection(course)}>
                  Deselect
                </button>
              </li>
            ))}
          </ul>
          <p className="total-credits">Total Credits: {totalCredits}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseSelectionModule;