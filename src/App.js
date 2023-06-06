import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Player from "./components/Players";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Player />
            <Footer />
        </div>
    );
}
export default App;
