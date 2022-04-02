import React from "react";

import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom"
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import {FeedbackProvider} from "./context/FeedbackContext";

function App(){

    return (
        <FeedbackProvider>
        <Router>
       <Header />
       <div className="container">
            <Routes>
           <Route exact path="/" element={
               <>
            <FeedbackForm />
           <FeedbackStats />
           <FeedbackList  />
               </>
           }>
           
           </Route>
          
           <Route path="/about" element ={<About/>} />
           <Route path="/post/*" element ={<Post/>} />
           </Routes>
           {/* <Card>
               <NavLink to="/" activeClassName = "active">
                   Home
               </NavLink>
               <NavLink to="/about" activeClassName = "active">
                  About
               </NavLink>
           </Card> */}
           <AboutIconLink/>
        </div>

        </Router>
        </FeedbackProvider>
    )
}

export default App;