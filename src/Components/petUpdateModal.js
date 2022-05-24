import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import petStore from "../petStore";

// function PetModal() {
const PetUpdateModal = (props) => {
  const [pet, setPet] = useState({
    id: props.pet.id,
    name: props.pet.name,
    type: props.pet.type,
    image: props.pet.image,
  });
  const handleChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.updatePet(pet);
    props.handleClose();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Pet name"
                name="name"
                value={pet.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Type</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Pet type"
                name="type"
                value={pet.type}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>image</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Image URL"
                name="image"
                value={pet.image}
              />
            </Form.Group>

            <Button
              style={{
                marginLeft: "5px",
                color: "#000",
                backgroundColor: "#0dcaf0",
                borderColor: "#0dcaf0",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
//
// render(<PetModal />);

export default PetUpdateModal;
