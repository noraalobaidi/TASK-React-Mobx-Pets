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
  addPet = (pet) => {
    pet.id = this.pets[this.pets.length - 1].id + 1;
    this.pets.push(pet);
  };
  updatePet = (updatedPet) => {
    this.pets = this.pets.map((pet) =>
      pet.id === updatedPet.id ? updatedPet : pet
    );
  };
}

const petStore = new PetStore();
export default petStore;
