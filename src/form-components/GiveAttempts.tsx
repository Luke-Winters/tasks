import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        setAttemptsRequested(event.target.value);
    }

    return (
        <div>
            <div>
                <Button
                    disabled={attemptsLeft === 0}
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                    }}
                >
                    use
                </Button>
                {attemptsLeft}
            </div>
            <div>
                <Button
                    onClick={() => {
                        const num = parseInt(attemptsRequested);
                        if (!isNaN(num)) {
                            setAttemptsLeft(num + attemptsLeft);
                        }
                    }}
                >
                    gain
                </Button>
                <Form.Group controlId="requestedAttempts">
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={updateRequestedAttempts}
                    />
                </Form.Group>
            </div>
        </div>
    );
}

// You will need a state to represent the number of attempts the user has left, and another state to represent the number of attempts they are requesting.
// The initial number of attempts left should be 3.
// The number of attempts left should be visible.
// There should be a numeric input box where the user can specify their requested number of attempts.
// There should be two buttons, one labeled use that decreases the attempts by one and one labeled gain that increases the attempts by the amount in the input box.
// If the user attempts to request an invalid amount (e.g., the empty string "") that cannot be parsed as an integer, then do not change their number of attempts.
// When the user is out of attempts, the use button should be disabled
