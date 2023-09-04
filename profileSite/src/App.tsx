import IconCarousel from "./components/about/IconCarousel";
// import LikeACat from "./components/cat/likeACat";
import Footer from "./components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Menu from "./components/introduction/Menu";
import ScroolToTop from "./components/other/ScroolToTop"
import Projects from "./components/projects/projects";
import Technologies from "./components/projects/technologies";

function App() {

  return (
    <div className="flex flex-col">
      <ScroolToTop />
      <Introduction />
      <Menu />
      <section id='about'>
        <IconCarousel />
      </section>
      <section id='work'>
        <Projects />
      </section>
      <section id='technologies'>
        <Technologies />
      </section>
      {/* <section id='cat'>
        <LikeACat />
      </section> */}
      <section id='contacts'>
        <Footer />
      </section>
    </div >
  );
}

export default App;