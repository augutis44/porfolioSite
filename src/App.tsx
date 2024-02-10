import IconCarousel from "./components/about/IconCarousel";
import Footer from "./components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Menu from "./components/introduction/Menu";
import ScroolToTop from "./components/other/ScroolToTop"
import ToTopButton from "./components/other/ToTopButton";
import Projects from "./components/projects/Projects";
import Technologies from "./components/projects/Technologies";

function App() {

  return (
    <div className="flex flex-col">
      <ScroolToTop />
      <ToTopButton />
      <Introduction />
      <section id='menu'>
        <Menu />
      </section>

        <IconCarousel />
      <Projects />
      <Technologies />
        <Footer />
    </div >
  );
}

export default App;