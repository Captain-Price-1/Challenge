import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import LightBox from "./ModalBox";

function Blogs() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [post, setPost] = useState(1);
  const [modalInfo, setModalInfo] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setInfo(data.slice(0, 10));

    setLoading(false);
  };

  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post}`
    );
    const data = await response.json();
    setModalInfo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchPost(post);
  }, [post]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <LightBox
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalInfo={modalInfo}
      />

      {info.map((item) => {
        const { userId, id, title, body } = item;

        return (
          <Card className="box" key={id}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{body}</Card.Text>
              <Card.Link
                onClick={() => {
                  setModalShow(true);
                  setPost(id);
                }}
              >
                Card Link
              </Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Blogs;
