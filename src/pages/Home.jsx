import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import  {AboutMe} from "../components/AboutMe";
import {Skills} from "../components/Skills";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* theme Toggle */}
        <ThemeToggle />

        {/*background Effect*/}
        <StarBackground/>

        {/*NavBar*/}
        <NavBar/>

        {/*Main Section*/}
        <main>
          <HeroSection/>
          <AboutMe/>
          <Skills/>
        </main>

        {/*About Section*/}

    </div>
  );
}