import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const App = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <Router>
      <div className="App">
        <div className="side-buttons">
          <Link to="/"><button>Home</button></Link>
          <Link><button>My Profile</button></Link>
        </div>
        <h1>Musician Directory</h1>
        <Switch>
          <Route exact path="/" render={props => <Home {...props}/>}/>
          <Route path="/directory" render={props => <Dashboard {...props}/>}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
