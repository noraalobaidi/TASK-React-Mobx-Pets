import petStore from "../petStore";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import PetUpdateModal from "./petUpdateModal";

export default function PetItem({ pet }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => petStore.handleAdopt(pet.id)}
          >
            Adopt
          </button>
          <Button
            style={{
              marginLeft: "5px",
              color: "#000",
              backgroundColor: "#0dcaf0",
              borderColor: "#0dcaf0",
            }}
            class="btn btn-info"
            variant="primary"
            onClick={handleShow}
          >
            Update
          </Button>
          <PetUpdateModal show={show} handleClose={handleClose} pet={pet} />
        </div>
      </div>
    </div>
  );
}
