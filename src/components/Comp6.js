

import React, { useState } from 'react';

const FacultyModule = () => {
  const [faculty, setFaculty] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      personnelNum: '123456',
      courses: ['Math', 'Physics'],
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      personnelNum: '654321',
      courses: ['Computer Science', 'English'],
    },
  ]);

  const [newFaculty, setNewFaculty] = useState({
    firstName: '',
    lastName: '',
    personnelNum: '',
    courses: '',
  });

  const handleInputChange = (e) => {
    setNewFaculty({ ...newFaculty, [e.target.name]: e.target.value });
  };

  const addFaculty = () => {
    const id = faculty.length + 1;
    const courses = newFaculty.courses.split(',').map((course) => course.trim());
    setFaculty([...faculty, { id, ...newFaculty, courses }]);
    setNewFaculty({ firstName: '', lastName: '', personnelNum: '', courses: '' });
  };

  const deleteFaculty = (id) => {
    setFaculty(faculty.filter((member) => member.id !== id));
  };

  return (
    <div>
      <h1>Faculty Module</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Personnel Number</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.personnelNum}</td>
              <td>{member.courses.join(', ')}</td>
              <td>
                <button onClick={() => deleteFaculty(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Faculty</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={newFaculty.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={newFaculty.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Personnel Number:
          <input type="text" name="personnelNum" value={newFaculty.personnelNum} onChange={handleInputChange} />
        </label>
        <label>
          Courses (comma-separated):
          <input type="text" name="courses" value={newFaculty.courses} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={addFaculty}>
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default FacultyModule;