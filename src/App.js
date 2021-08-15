import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <section className="app-content">
                <Route path="/profile" render={() => <Profile
                />}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>}/>
            </section>
        </div>
    );
}

export default App;