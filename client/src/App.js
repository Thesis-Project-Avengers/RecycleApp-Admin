import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  //! here add your routes  i have wrapped all the app with a Brwoser Routes in the index.js Folder Go Check It 
  return (
    <div className="App">

      <Routes>
        <Route path='/' Component={HomeScreen} />
        {/* //? Here like the Above example  */}

      </Routes>






    </div>
  );
}

export default App;