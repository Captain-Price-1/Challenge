import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample(props) {
  const { id, name, img, category, url, info } = props.item;
  return (
    <Card style={{ width: "18rem" }} className="box">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">
          <a style={{ color: "white", style: "none" }} href={url}>
            Code
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
