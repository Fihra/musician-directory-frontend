import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Auth from './components/Auth';

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
          <Route exact path="/directory" render={props => {
            if(Auth.isAuthenticated()){
              return <Dashboard {...props}/>
            } else {
              return <Redirect to={
                {
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }
              }/>
            }
            }
          }/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
