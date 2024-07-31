import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
      {/* <Lottery n={5} winningSum={20} /> */}
      {/* <Lottery n={7} winningSum={25} /> */}
    </>
  );
}

export default App;
