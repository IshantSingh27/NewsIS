// import React, { Component } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import News from './components/News';
// import LoadingBar from "react-top-loading-bar";
// import { Routes, Route } from 'react-router-dom';

// export default class App extends Component {
//   state = {
//     progress: 0
//   };

//   setProgress = (progress) => {
//     this.setState({ progress });
//   };

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <LoadingBar height={2} color="#f11946" progress={this.state.progress} />
//         <Routes>
//           <Route path="/" element={
//             <News setProgress={this.setProgress} key="general" pageSize={10} country="us" category="general" />
//           } />
//           <Route path="/business" element={
//             <News setProgress={this.setProgress} key="business" pageSize={10} country="us" category="business" />
//           } />
//           <Route path="/entertainment" element={
//             <News setProgress={this.setProgress} key="entertainment" pageSize={10} country="us" category="entertainment" />
//           } />
//           <Route path="/health" element={
//             <News setProgress={this.setProgress} key="health" pageSize={10} country="us" category="health" />
//           } />
//           <Route path="/science" element={
//             <News setProgress={this.setProgress} key="science" pageSize={10} country="us" category="science" />
//           } />
//           <Route path="/sports" element={
//             <News setProgress={this.setProgress} key="sports" pageSize={10} country="us" category="sports" />
//           } />
//           <Route path="/technology" element={
//             <News setProgress={this.setProgress} key="technology" pageSize={10} country="us" category="technology" />
//           } />
//         </Routes>
//       </div>
//     );
//   }
// }


//Ishant change
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <LoadingBar height={2} color="#f11946" progress={progress} />
      <Routes>
        <Route
          path="/"
          element={
            <News setProgress={setProgress} key="general" pageSize={10} country="us" category="general" />
          }
        />
        <Route
          path="/business"
          element={
            <News setProgress={setProgress} key="business" pageSize={10} country="us" category="business" />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News setProgress={setProgress} key="entertainment" pageSize={10} country="us" category="entertainment" />
          }
        />
        <Route
          path="/health"
          element={
            <News setProgress={setProgress} key="health" pageSize={10} country="us" category="health" />
          }
        />
        <Route
          path="/science"
          element={
            <News setProgress={setProgress} key="science" pageSize={10} country="us" category="science" />
          }
        />
        <Route
          path="/sports"
          element={
            <News setProgress={setProgress} key="sports" pageSize={10} country="us" category="sports" />
          }
        />
        <Route
          path="/technology"
          element={
            <News setProgress={setProgress} key="technology" pageSize={10} country="us" category="technology" />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
