import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Lyrics from './components/Lyrics';
const App = () => {
    return(
    <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/lyrics/track/:id' component={Lyrics} />
            <Route component={Error} />
        </Switch>
    </>
    )
}
export default App