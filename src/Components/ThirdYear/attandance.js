import { Alert, Button, Card, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import "../Academics.css"
import { useEffect, useState } from "react";
import { fetchStudentSubjectwise, markAbsentSubjectwise, updateAttandanceSubjectwise } from "../../services/StudentServices";
import profileIcon from "../../public/profileIcon.png";

export function FacultysideAttandance() {
    const [students, setStudents] = useState([]);
    const [index, setIndex] = useState(0);
    const [isFetched, setIsFetched] = useState(0);
    const navigate = useNavigate();

    const url = window.location.href;
    const subname = url.split("subjects/")[1];


    async function updateAttandance() {
        const updated = await updateAttandanceSubjectwise(subname, students[index].enrollment);
        
        // console.log(updated.data[subname]);
    }
    async function markAsAbsent() {
        const updated = await markAbsentSubjectwise(subname, students[index].enrollment);
        
        // console.log(updated.data[subname]);
    }
    function indexchanging() {

        if (index > students.length) {
            <Container style={{ padding: "15rem", textAlign: "center" }}>
                <h1>Attandance completed</h1>
                
                <Button onClick={() => { navigate("/3rdyear/csit-2/subjects") }}>OK</Button>
            </Container>
        }
        else {
            setIndex((index + 1));
        }
    }


    async function fetchStudents() {
        const fetchedStudents = await fetchStudentSubjectwise(subname);
        setStudents(fetchedStudents.data);
        setIsFetched(1);
        // console.log(fetchedStudents.data);
        // console.log(students);
    }

    useEffect(() => {
        fetchStudents();
    }, [])
    

    return (
        <>
            {(index < students.length) ?
                <Container>
                    {
                        students.length > 0 && <Container className="flex desc">
                            <Card className="flex desc" style={{ width: "25rem", height: "30rem", padding: "1rem" }} >
                                <p><Image src={profileIcon} style={{ width: "11rem" }}></Image></p>
                                <h4><p>{students[index].name}</p></h4>
                                <h5><p> Enrollment: <strong>{students[index].enrollment}</strong></p></h5>
                                <Container>
                                    <Row>
                                        <Col lg={6}>
                                            <Button variant="warning" size="lg" onClick={() => { indexchanging(); markAsAbsent(); }}>Absent</Button>
                                        </Col>
                                        <Col lg={6}>
                                            <Button size="lg" variant="success" onClick={() => { indexchanging(); updateAttandance(); }}>Present</Button>
                                        </Col>
                                    </Row>
                                </Container>
                                <br /><br />

                                <Container>
                                    <Button onClick={() => { setIndex(Math.abs(index - 1) % students.length) }}>Prev</Button>
                                    <Button onClick={() => {
                                        setIndex((index + 1))

                                    }}>Next</Button>
                                </Container>
                            </Card>
                        </Container>
                    }

                </Container> : isFetched ===1 ? <Container style={{ padding: "15rem", textAlign: "center" }}>
                    <h1>Attandance completed</h1>
                    <Button onClick={() => { navigate("/3rdyear/csit-2/subjects") }}>OK</Button>
                </Container>: <Container style={{ padding: "15rem", textAlign: "center" }}>
                    <h1>Loading...</h1>
                </Container>


            }






        </>
    )
}


