import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/skills";
import Projects from "./my-projects/Projects";
import {DistanceWork} from "./distancWork/DistancWork";
import {Contacts} from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistanceWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
