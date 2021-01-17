import './App.css';
import './styles/baseCompressed.css';
import './styles/styleCompressed.css';
import Header from './components/header';
import Footer from './components/footer';
import RaceType from './components/raceTypes';
import RaceBox from './components/raceBox'

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Header />

        <div id="content" ng-controller="NativeLevelAppCtrl as appCtrl" className="ng-scope">
          <RaceType />

          <main id="content-container" role="main"></main>
          <RaceBox />

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;