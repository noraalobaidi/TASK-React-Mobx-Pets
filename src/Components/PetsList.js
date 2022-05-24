import React, { useState } from "react";
import PetItem from "./PetItem";
import petStore from "../petStore";
import { observer } from "mobx-react";
import PetCreateModal from "./PetCreateModal";

import { Modal, Button, Form } from "react-bootstrap";

function PetsList({}) {
  // petsData
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  // const [pets, setPets] = useState(petsData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const petList = petStore.pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLowerCase()) &&
        pet.type.includes(type)
    )
    .map((pet) => <PetItem key={pet.id} pet={pet} />);
  return (
    <section id="doctors" class="doctor-section pt-140">
      {/* <PetUpdateModal /> */}
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <br />
              Type:
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
              <Button
                class="btn btn-info"
                style={{
                  marginLeft: "5px",
                  color: "#000",
                  backgroundColor: "#0dcaf0",
                  borderColor: "#0dcaf0",
                }}
                onClick={handleShow}
              >
                Create new pet
              </Button>
              <PetCreateModal show={show} handleClose={handleClose} />
            </div>
          </div>
        </div>

        <div class="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}
export default observer(PetsList);
