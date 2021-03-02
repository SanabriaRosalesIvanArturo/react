import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <GoogleMap />
      <Helmet>
      <script defer data-key="b541b3a9-85f0-459b-b007-57ae8cd85cb0" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
  );
}

export default App;
