import React , { useState } from 'react'
import Navbar from "./componants/Navbar";
import News from "./componants/News";
import LoadingBar from "react-top-loading-bar"
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)

      return (
        <div>
          <BrowserRouter>
          
          <Navbar/> 
          <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} 
        />
         <Routes>
            <Route exact path="/"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="general" pageSize={pageSize} country="in" category="general"/>}/> 
            <Route exact path="/business"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="business" pageSize={pageSize} country="in" category="business"/>} /> 
            <Route exact path="/entertainment"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} /> 
            <Route exact path="/general"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="general" pageSize={pageSize} country="in" category="general"/>} /> 
            <Route exact path="/health"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="health" pageSize={pageSize} country="in" category="health"/>} /> 
            <Route exact path="/science"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="science" pageSize={pageSize} country="in" category="science"/>} /> 
            <Route exact path="/sports"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="sports" pageSize={pageSize} country="in" category="sports"/>} /> 
            <Route exact path="/technology"  element={<News setProgress={setProgress} apiKey="3073ba38fd224c87baa5a828e12acb08" key="technology" pageSize={pageSize} country="in" category="technology"/>} /> 
          </Routes>
          </BrowserRouter>
        </div>
      )
}

export default App;
