import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import SideButtons from './components/SideButtons';
import EditProfile from './components/EditProfile';
import Home from './components/Home';
import Auth from './components/Auth';

const App = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  console.log(Auth.isAuthenticated())

  return (
    <Router>
      <div className="App">
        <SideButtons/>
        <h1>Musician Directory</h1>
        <Switch>
          <Route exact path="/" render={props => <Home {...props}/>}/>
          <Route exact path="/directory" render={props => {
              if(Auth.isAuthenticated() && localStorage.getItem("musician") !== null){
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
          <Route exact path="/edit-profile" render={props => {
                if(Auth.isAuthenticated() && localStorage.getItem("musician" !== null)){
                  return <EditProfile {...props}/>
                } else {
                  return <Redirect to={
                      {pathname: "/",
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
