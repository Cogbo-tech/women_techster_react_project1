// import logo from './logo.svg';
import '../app/App.css';
import { LandingPageHeader } from '../components/LandingPageHeader';
import { HeroPage } from '../components/HeroPage';
import { ButtonHero } from '../components/ButtonHero';
import { Logo } from '../components/Logo';


function App() {
  return (
    <>
      <LandingPageHeader>
        <Logo />
      </LandingPageHeader>
      <HeroPage>
        <ButtonHero />
      </HeroPage>

    </>
  );
}


export default App;
