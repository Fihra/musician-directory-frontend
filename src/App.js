import './App.css';
import { useDropzone } from 'react-dropzone';
import Search from './components/Search';
import Dashboard from './components/Dashboard';

const App = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // const files = acceptedFiles.map(file => {

  // })

  return (
    <div className="App">
      <h1>Musician Directory</h1>
      {/* <form>
        <input type="file" name="file"/>
      </form> */}
      {/* <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()}/>
        <p>Drag 'n drop some files here, or click to select files</p>
      </div>
      </section> */}
      <Search/>
      <Dashboard/>
    </div>
  );
}

export default App;
