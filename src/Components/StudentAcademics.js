
import "./Academics.css"
import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import StyledButton from "../public/Button";
import { Card, Col, Container, Row } from "react-bootstrap";
import { totalAttandence } from "../services/StudentServices";
function StudentAcademics(props) {
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [attendance, setAttendance] = useState(0);
    const enroll = localStorage.getItem('enrollment');

     async function getTotalAttendance() {
        const attendancess = await totalAttandence(enroll);
        console.log(attendancess.data.attendance);
        setAttendance(attendancess.data.attendance);
    }
    useEffect(() => {
        getTotalAttendance();
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }

    }, [])

    return (
        <div class className="flex">
            {
                <>

                    <Container className="text-center">
                        <Row>
                            <Col lg={6}>
                                <Link to="/student/academics/attendance/" className="decoration">
                                    <Card>
                                        <h4>Attandence</h4>
                                        <h6><p>{`${attendance}%`}</p></h6>
                                    </Card>
                                </Link>
                            </Col>
                            <Col lg={6}>
                                <Link to="#" className="decoration">
                                    <Card>
                                        <h4>Assignments</h4>
                                        <h6><p>No work due</p></h6>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Container>

                </>
            }
        </div>
    )
}
export default StudentAcademics;