import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Scheduler from './Home/Scheduler.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <Route exact path="/" component = {Scheduler} />
        </div>
    </Router>
    </div>
  );
}

export default App;
