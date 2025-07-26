import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import TextForm from './components/TextForm.js';
import NavBarforText from './components/NavBarforText.js';

function App() {
  return (
    <>
   <NavBarforText heading="Word Wizard"></NavBarforText>
   <div className="container my-3">
    <TextForm heading="Enter your Text"/>
    </div>
    </>
  );
}

export default App;
