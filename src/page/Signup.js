import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Label, Row } from "reactstrap";
import Base from "../component/Base";
import { useEffect, useState } from "react";
import { signUp } from "../service/user-service";
import { toast } from "react-toastify";
const Signup = () => {
    const submitForm = (event) => {
        event.preventDefault();
        console.log(data);
        signUp(data).then((response) => {
            console.log(response);
            setData({
                name: '',
        email: '',
        password: '',
        about: ''
            });
        }).catch((error) => console.log(error))
    }
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: ''
    })
    //useEffect(()=>{console.log(data)},[data])
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value })
    }
    return (
        <div ><Base>
            <Row className="mt-5">
                <Col sm={
                    {
                        size: 6,
                        offset: 3
                    }
                }>
                    <Container>
                        <Card color="light">
                            <CardHeader className="text-center">
                                <h3>Signup Here !!</h3>
                            </CardHeader>
                            <CardBody>
                                <Container >

                                    <Form onSubmit={submitForm}>
                                        <FormGroup row>
                                            <Label for="name">
                                                Name
                                            </Label>
                                            <input id="name" type="text" placeholder="enter name" onChange={(e) => handleChange(e, 'name')} value={data.name} />
                                        </FormGroup >
                                        <FormGroup row>
                                            <Label for="email">
                                                Email
                                            </Label>
                                            <input id="email" type="email" placeholder="enter email" onChange={(e) => handleChange(e, 'email')} value={data.email} />
                                        </FormGroup >
                                        <FormGroup row >
                                            <Label for="password">
                                                Password
                                            </Label>
                                            <input id="password" type="password" placeholder="enter password" onChange={(e) => handleChange(e, 'password')} value={data.password} />
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="about">About</Label>
                                            <input id="about" type="text" placeholder="enter about" onChange={(e) => handleChange(e, 'about')} value={data.about} />
                                        </FormGroup>
                                        <Container className="text-center">
                                            <Button type="submit">Signup</Button>
                                            <Button className="ms-2">Reset</Button>
                                        </Container>
                                    </Form>
                                </Container>
                            </CardBody>
                        </Card>
                    </Container>

                </Col>
            </Row>

        </Base>
        </div>
    );
}

export default Signup;