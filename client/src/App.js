import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StartPage from './Components/Pages/StartPage'
// import myApi from './api/Api';
// import { useEffect, useState } from "react";


function App() {

  
  return (
    <BrowserRouter >
      <div>
          <Route path="/" exact component={StartPage}/>
          {/* <Route path="/topic1" component={TestComponent}/>
          <Route path="/hystory" component={Hystory} />
          <Route path="/result" component={ResultComponent} />
          <Route path="/users-questions" component={AddQuestionPage} /> */}
          {/* <Route path="/test-start" component={StartTestPage} /> */}
      </div>
  </BrowserRouter>
  )
}
export default App;