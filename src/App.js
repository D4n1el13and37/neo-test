import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import data from "../src/constants/data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section title={"Наушники"} data={data.headphones} />
      <Section title={"Беспроводные наушники"} data={data.wirelessHeadphones} />
      <Footer />
    </div>
  );
}

export default App;
