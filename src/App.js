import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <section className="app-content">
                <Route path="/profile" render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs store={props.store}/>}/>}/>
            </section>
        </div>
    );
}

export default App;