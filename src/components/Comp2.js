// StudentManagement.js


import React, { useState } from 'react';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    lastName: '',
    studentNumber: '',
    major: '',
  });

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    if (
      newStudent.name.trim() !== '' &&
      newStudent.lastName.trim() !== '' &&
      newStudent.studentNumber.trim() !== '' &&
      newStudent.major.trim() !== ''
    ) {
      setStudents([...students, newStudent]);
      setNewStudent({
        name: '',
        lastName: '',
        studentNumber: '',
        major: '',
      });
    }
  };

  const removeStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div className="student-management">
      <h1>Student Management</h1>
      <div className="student-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newStudent.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="studentNumber"
          placeholder="Student Number"
          value={newStudent.studentNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={newStudent.major}
          onChange={handleInputChange}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="student-list">
        <h2>Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <span>Name: {student.name} {student.lastName}</span>
              <span>Student Number: {student.studentNumber}</span>
              <span>Major: {student.major}</span>
              <button onClick={() => removeStudent(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentManagement;