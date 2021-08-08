import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <section className="app-content">
                <Route path="/profile" render={() => <Profile
                    store={props.store}/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer store={props.store}/>}/>}/>
            </section>
        </div>
    );
}

export default App;