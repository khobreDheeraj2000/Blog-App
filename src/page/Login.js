import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../component/Base";

const Login = () => {
    return (
        <div><Base>
            <Container >
                <Row className="mt-5">
                    <Col sm={
                        {
                            size:6,
                            offset:3
                        }
                    }>
                        <Card color="light">
                            <CardHeader className="text-center"><h3>Login Here !!</h3></CardHeader>
                            <CardBody>
                                <Container>
                                    <Form>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input id="email" type="email" placeholder="enter email" />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input id="password" type="password" placeholder="enter password" />
                                        </FormGroup>
                                        
                                        <Container className="text-center" >
                                            <Button >Signin</Button>
                                            <Button className="ms-2">Reset</Button></Container>
                                    </Form>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </Base>
        </div>
    );
}

export default Login;