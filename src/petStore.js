import petsData from "./petsData";
import { makeAutoObservable } from "mobx";
class PetStore {
  constructor() {
    makeAutoObservable(this);
  }
  pets = petsData;

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
    // petStore.pets = petStore.pets.filter((pet) => pet.id !== petId);
    // console.log("pets" + petStore.pets);
  };
}

const petStore = new PetStore();
export default petStore;
