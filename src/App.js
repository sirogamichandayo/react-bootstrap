import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import "./App.css";

const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(true);
    return (
        <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
            <Toast.Header>
                <string className="mr-auto">React-Bootstrap</string>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
        </>
    );
};

const App = () => (
    <Container className="p-3">
        <Jumbotron>
            <h1 className="header">Welcome To React-Bootstrap</h1>
            <ExampleToast>
                We now have Toasts
                <span role="img" aria-label="toda">
                    🎉
                </span>
            </ExampleToast>
        </Jumbotron>
    </Container>
);

export default App;