import About from "./components/about/About";
import TryingIconCarousel from "./components/about/TryingIconCarousel";
import LikeACat from "./components/cat/likeACat";
import Introduction from "./components/introduction/Introduction";
import Menu from "./components/introduction/Menu";
import { ScrollToTop } from "./components/other/ScroolToTop";
import Projects from "./components/projects/projects";
import Technologies from "./components/projects/technologies";

function App() {

  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Introduction />
      <Menu />
      <About />
      <Projects />
      <Technologies />
      <LikeACat />
      <TryingIconCarousel />
    </div>
  );
}

export default App;