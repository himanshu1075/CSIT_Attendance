import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AttandenceSubjectWise } from '../../services/StudentServices';
import { Container, Table } from 'react-bootstrap';


function AttendanceTable() {
    const [attendanceData, setAttendanceData] = useState({});

    const enroll = localStorage.getItem('enrollment');
    async function fetchAttendance() {
        const response = await AttandenceSubjectWise(enroll);
        setAttendanceData(response.data);
    }

    useEffect(() => {
        fetchAttendance();
    }, []);
    const subject = ["ML",
        "CGMM",
        "SEA",
        "CNS",
        "ML Lab",
        "SEA Lab",
        "Minor Project",
        "Python Lab",
        "Android Lab"];
    const subjects = ["ML",
        "CGMM",
        "SEA",
        "CNS",
        "MLLab",
        "SEALab",
        "MinorProject",
        "PythonLab",
        "AndroidLab"];
    const dates = [...new Set(Object.values(attendanceData).flatMap(Object.keys))];
    return (
        <Container>
        <Table bordered>
            <thead>
                <tr>
                    <th>Date</th>
                    {subject.map((sub) => (
                        <th key={sub}>{sub}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dates.map((date) => (
                    <tr key={date}>
                        <td>{date}</td>
                        {subjects.map((subject) => (
                            <td key={`${date}-${subject}`}>
                                {attendanceData[subject]?.[date] !== -1
                                    ? attendanceData[subject]?.[date] === 1
                                        ? <p style={{color:'navy'}}>P</p>
                                        : attendanceData[subject]?.[date] === 0 ? <p style={{color:'red'}}>A</p>:"-"
                                    : '-'}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
        </Container>
    );
}

export default AttendanceTable;
