import "./App.css";
// import PetModal from "./Components/PetCreateModal";
import PetsList from "./Components/PetsList";
import petsData from "./petsData";
// import NameForm from "./NameForm";

function App() {
  return (
    <div className="App">
      <PetsList petsData={petsData} />
      {/* <PetModal /> */}
      {/* <NameForm /> */}
    </div>
  );
}

export default App;
