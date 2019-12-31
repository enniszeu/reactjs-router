import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import NotFoud from './Component/NotFoud';
import Meau from './Component/Meau';

    class App extends React.Component {
        render(){
            return(
                <Router>
                    {/* meau */}
                    <Meau />

                    {/* meau route */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFoud} />
                    </Switch>
                </Router>

               
            )
        }
    }

export default App;
