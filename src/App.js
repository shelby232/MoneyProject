import Hero from "./Components/Hero";
import Info from "./Components/Info";
import NavbarFirst from "./Components/NavbarFirst";
import NavbarSecond from "./Components/NavbarSecond";
import NavbarThird from "./Components/NavbarThird";
import News from "./Components/News";
import Spezilation from "./Components/Spezilation";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import '@fortawesome/fontawesome-free/css/all.css';
import NavbarSecret from "./Components/NavbarSecret";

function App() {
  return (
    <div>
      <NavbarFirst />
      <NavbarSecond />
      <NavbarThird />
      <NavbarSecret />
      <Hero />
      <News />
      <Info />
      <Spezilation />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
