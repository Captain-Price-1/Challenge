import Form from "react-bootstrap/Form";
import { useState } from "react";
function FeedbackForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [feedback, setFeedback] = useState("");
  const [messageText, setmessageText] = useState("");
  const [gender, setGender] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("date", date);
    console.log("category", category);
    console.log("title", title);
    console.log("messagetext", messageText);
    console.log("Gender", gender);
  };

  return (
    <>
      <h1>Feedback Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="name@example.com"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Feedback Title "
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Feedback  "
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>MessageBox</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type your message  "
            onChange={(e) => setmessageText(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>category -</Form.Label>
          <Form.Check
            inline
            label="1"
            name="group1"
            type="checkbox"
            onChange={(e) => e.target.value}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Gender -</Form.Label>
          <Form.Check
            inline
            label="Male"
            name="Male"
            type="checkbox"
            onChange={(e) => setGender(e.target.name)}
          />
          <Form.Check
            inline
            label="Female"
            name="Female"
            type="checkbox"
            onChange={(e) => setGender(e.target.name)}
          />
        </Form.Group>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </Form>
    </>
  );
}

export default FeedbackForm;
