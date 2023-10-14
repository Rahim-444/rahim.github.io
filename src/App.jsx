import { Navbar } from "./componenets//Navbar";
import { Hero } from "./componenets/Hero";
import { About } from "./componenets/About";
import { Work } from "./componenets/Work";
import { Contact } from "./componenets/Contact";
import { Copyrights } from "./componenets/Copyrights";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <div className="my-0 mx-auto p-8 max-w-7xl">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="my-0 mx-auto p-8 max-w-7xl">
          <Work />
        </div>
        <Contact />
        <div className="my-0 mx-auto p-8 max-w-7xl">
          <Copyrights />
        </div>
      </HashRouter>
    </>
  );
};

export default App;
