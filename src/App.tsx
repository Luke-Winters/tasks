import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import mountains from "./assets/images/mountains.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>This is a webpage</p>
            <p>Luke Winters</p>
            <img src={mountains} alt="A picture of mountains" />
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
            <p>Hello World</p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            className="Box"
                            style={{
                                backgroundColor: "rgb(255,0,0)",
                                width: "90%",
                                height: "10vh",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div className="Box"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
