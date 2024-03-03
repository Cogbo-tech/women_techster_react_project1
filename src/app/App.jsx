// import logo from './logo.svg';
import '../app/App.css';
import { LandingPageHeader } from '../components/LandingPageHeader';
import { HeroPage } from '../components/HeroPage';
import { ButtonHero } from '../components/ButtonHero';

function App() {
  return (
    <div>
      <LandingPageHeader></LandingPageHeader>
      <HeroPage>
        <ButtonHero></ButtonHero>
      </HeroPage>

    </div>
  );
}


export default App;
