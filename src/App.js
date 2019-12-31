import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meau from './Component/Meau';
import routes from './routes';

    class App extends React.Component {
        render(){
            return(
                <Router>
                    {/* meau */}
                    <Meau />

                    {/* meau route */}
                    <Switch>
                        { this.showContenMeaus(routes) }
                    </Switch>
                </Router>

               
            )
        }

        showContenMeaus = (routes) =>{
            var result = null;
                result = routes.map((route, index) =>{
                    return(
                        <Route
                         key={index}
                         path={route.path} 
                         exact={route.exact}
                         component={route.main} />
                    )
                })
            return result;
        }

    }

export default App;
