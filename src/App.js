import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Glance from './pages/Glance';
import SinglePost from './pages/SinglePost';
import Strategy from './pages/Strategy';
import Library from './pages/Library';



function App() {

  return (
    
    <div>
      
      <Routes>
      <Route path='/' Component={Home } />
      <Route path='/glance' Component={Glance } />
      <Route path='/strategy' Component={Strategy } />
      <Route path='/gallery' Component={Library } />
      <Route path='/blog' Component={Blog } />
      <Route path='/blog/:id' Component={SinglePost } />
      {/* <Route path='/donate' Component={Donate } /> */}
      </Routes>

      
      
  
    </div>
  );
}


// class App extends React.Component{
//   componentDidMount(){
//     const apiurl = 'http://127.0.0.1:8000/api/articles/';
//     fetch(apiurl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
      
      
//   }

//   render() {
//     return (<div>
//       Hraay
//     </div>);
//   }
// }
export default App;
