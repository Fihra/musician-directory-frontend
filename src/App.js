import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import SideButtons from './components/SideButtons';
import EditProfile from './components/EditProfile';
import Home from './components/Home';
import Auth from './components/Auth';
import { MusicianContext } from './components/MusicianContext';
import React, { useEffect, useState, useReducer} from 'react';
import { Actions } from './components/Actions';
import axios from 'axios';

const initialState = {
  allMusicians: "",
  currentMusician: null,
};

const reducer = (state = initialState, action) => {
  
  switch(action.type){
    case Actions.FETCH_MUSICIANS: 
      return {
        ...state,
        allMusicians: action.payload
      }
    case Actions.CURRENT_MUSICIAN:
        return {
          ...state,
          currentMusician: action.payload
        }
    case Actions.LOGOUT:
        return {
          ...state,
          currentMusician: null
        }
    default:
      return state;

  }
}

const App = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [musicianData, dispatch] = useReducer(reducer, initialState);
  // const [ musicianStorage, setMusicianStorage] = useState(null);
  
  // useEffect(() => {
  //   if(localStorage.getItem("musician") !== null){
  //       setMusicianStorage(localStorage.getItem("musician"));
  //   }
  // }, [musicianStorage])

  /*
  TODO: Implement UseReducer to manage LocalStorage
  In order to change the SideButtons to view the right buttons
  When a user is logged in and when there is not user logged in
  */

  useEffect(() => {
    axios.get('http://localhost:3001/musicians')
    .then(response => {
      console.log(response)
      dispatch({type: Actions.FETCH_MUSICIANS, payload: response.data})
    })

    .catch(error => console.log(error)) 
  }, [])


  useEffect(() => {
    if(localStorage.getItem("musician")){
      let musicianSession = localStorage.getItem("musician");
      dispatch({type: Actions.CURRENT_MUSICIAN, payload: musicianSession})
    }
  }, [])

  console.log(initialState)
  return (
    <MusicianContext.Provider value={{musicianData: musicianData, musicianDispatch: dispatch}}>
      <Router>
        <div className="App">
          <SideButtons/>
          <h1>Musician Directory</h1>
          <Switch>
            <Route exact path="/" render={props => {
            if(localStorage.getItem("musician")){
              return <Redirect to={
                {
                  pathname: "/directory",
                  state: {
                    from: props.location
                  }
                }
              }/>
            } else {
              return <Home {...props}/>
            }
            
          
          }}/>
            <Route exact path="/directory" render={props => {
                if(localStorage.getItem("musician") !== null){
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
                  if(localStorage.getItem("musician") !== null){
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
    </MusicianContext.Provider>
  );
}

export default App;
