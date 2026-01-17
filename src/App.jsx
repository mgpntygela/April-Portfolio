import { BrowserRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  About,
  Hero,
  Experience,
  Nav,
  Projects,
  Skills,
  Contact,
} from "./components";

import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="relative z-0">
        <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Nav />
          <Hero />
        </section>
        <About />
        <Projects />
        <Skills />
        <section>
          <Contact />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
