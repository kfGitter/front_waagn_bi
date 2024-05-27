import Home from "./pages/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import AppContext from "./context";
// import Jumbotron from "./components/Jumbotron";


function App() {
  return (
    <AppContext>
    
    <div>
      <Navbar />
      <Home />
    </div>
    </AppContext>

  );
}


export default App;

