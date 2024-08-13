

import React, { useState } from 'react';

const CourseModule = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Math', code: 'MATH101', credits: 3, instructor: 'Dr. Smith' },
    { id: 2, name: 'Physics', code: 'PHYS201', credits: 4, instructor: 'Dr. Johnson' },
    { id: 3, name: 'Computer Science', code: 'CS300', credits: 3, instructor: 'Dr. Lee' },
  ]);

  const [newCourse, setNewCourse] = useState({
    name: '',
    code: '',
    credits: '',
    instructor: '',
  });

  const handleInputChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const addCourse = () => {
    const id = courses.length + 1;
    setCourses([...courses, { id, ...newCourse }]);
    setNewCourse({ name: '', code: '', credits: '', instructor: '' });
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h1>Course Module</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Credits</th>
            <th>Instructor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.credits}</td>
              <td>{course.instructor}</td>
              <td>
                <button onClick={() => deleteCourse(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Course</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={newCourse.name} onChange={handleInputChange} />
        </label>
        <label>
          Code:
          <input type="text" name="code" value={newCourse.code} onChange={handleInputChange} />
        </label>
        <label>
          Credits:
          <input type="number" name="credits" value={newCourse.credits} onChange={handleInputChange} />
        </label>
        <label>
          Instructor:
          <input type="text" name="instructor" value={newCourse.instructor} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={addCourse}>
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseModule;