const express = require('express');
const router = express.Router();
const database = require('../simple-database/database');

router.get('/', (request, response) => {
    response.json({
        desc: 'Implement a documentation to the existing endpoints using Swagger-JSdoc, and Swagger-UI',
    });
});

router.post('/', (request, response) => {
    response.json(request.body);
});


// const studentData = {
//     index: 'UniversityStudentID',
//     name: 'Name',
//     surname: 'Surname',
//     email: 'email@email.com',
//     pesel: 'PESEL',
//     dateOfBirth: '01-01-2001',
//     address: {
//         street: 'Street',
//         number: 'NumberOfHouse/NumberOfApartment',
//         postalCode: 'PostalCode',
//         country: 'Country'
//     },
//     faculties: ['ListOfFaculties'],
//     programmes: ['ListOfProgrammesOnFaculties']
// }

// const facultyData = {
//     name: 'NameOfFaculties',
//     employees: ['listOfEmployees'],
//     students: ['listOfStudents'],
//     rooms: ['listOfRooms'],
//     address: {
//         street: 'Street',
//         number: 'NumberOfHouse/NumberOfApartment',
//         postalCode: 'PostalCode',
//         country: 'Country'
//     },
//     availableProgrammes: ['ListOfAvailableProgrammes']
// }

// const studentData = {
//     name: 'Name',
//     surname: 'Surname',
//     email: 'email@email.com',
//     pesel: 'PESEL',
//     dateOfBirth: '01-01-2001',
//     address: {
//         street: 'Street',
//         number: 'NumberOfHouse/NumberOfApartment',
//         postalCode: 'PostalCode',
//         country: 'Country'
//     },
//     position: 'Position'
// }

router.get('/students', (request, response) => {
    response.json({
        desc: 'Students data - array',
    });
});

router.get('/students/:studentID', (request, response) => {
    response.json({
        desc: 'Student data',
    });
});

router.post('/students', (request, response) => {
    response.json({
        desc: 'IDofStudent (or link to the resource) + studentData',
    });
});

router.put('/students/:studentID', (request, response) => {
    response.json({
        desc: 'Updated student data',
    });
});

router.patch('/students/:studentID', (request, response) => {
    response.json({
        desc: 'Updated student data',
    });
});

router.delete('/students/:studentID', (request, response) => {
    response.json({
        desc: 'Only statuses',
    });
});

router.get('/faculties', (request, response) => {
    response.json({
        desc: 'Facylties data - array',
    });
});

router.get('/faculties/:facultyID', (request, response) => {
    response.json({
        desc: 'Faculty data',
    });
});

router.get('/faculties/:facultyID/students', (request, response) => {
    response.json({
        desc: 'List of students on the faculty',
    });
});

router.get('/faculties/:facultyID/students/:studentID', (request, response) => {
    response.json({
        desc: 'Student data',
    });
});

router.get('/faculties/:facultyID/employees', (request, response) => {
    response.json({
        desc: 'List of employees on the faculty',
    });
});

router.get('/faculties/:facultyID/employees/:employeeID', (request, response) => {
    response.json({
        desc: 'Employee data',
    });
});

router.get('/faculties/:facultyID/programmes', (request, response) => {
    response.json({
        desc: 'List of programmes on the faculty',
    });
});

router.post('/faculties', (request, response) => {
    response.json({
        desc: 'IDofFaculty (or link to the resource) + facultyData',
    });
});

router.post('/faculties/:facultyID/students', (request, response) => {
    response.json({
        desc: 'statusCode (add new student to faculty with program)',
    });
});

router.post('/faculties/:facultyID/programmes', (request, response) => {
    response.json({
        desc: 'statusCode (add new program to faculty)',
    });
});

router.patch('/faculties/:facultyID', (request, response) => {
    response.json({
        desc: 'Updated faculty data',
    });
});

router.put('/faculties/:facultyID/employees/:employeeID', (request, response) => {
    response.json({
        desc: 'Updated employee data',
    });
});

router.delete('/faculties/:facultyID', (request, response) => {
    response.json({
        desc: 'Only statuses',
    });
});

router.delete('/faculties/:facultyID/employees/:employeeID', (request, response) => {
    response.json({
        desc: 'Only statuses',
    });
});


module.exports = router;
