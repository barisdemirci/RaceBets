import './App.css';
import './styles/baseCompressed.css';
import './styles/styleCompressed.css';
import Header from './components/header';
import Footer from './components/footer';
import Current from './components/current';
import Runners from './components/runners'

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Header />

        <div id="content" ng-controller="NativeLevelAppCtrl as appCtrl" className="ng-scope">
          <Current />

          <main id="content-container" role="main"></main>
          <Runners />

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;