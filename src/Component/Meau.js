import React from 'react';
import { Route, Link } from "react-router-dom";


const MeauLink = ({lable, to, activeOnlyWhenExact}) =>{
	return(
		<Route path={to} exact={activeOnlyWhenExact} children={({ match}) =>{
			var active = match ? 'active' : '';
			return (
				<li className={active}>
                    <Link to={to}>
                    	{lable}
                    </Link>
                </li>
			)
		}}/>
	)
}

    class Meau extends React.Component {
        render(){
            return(
                 <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <MeauLink lable="trang chu" to="/" activeOnlyWhenExact={true} />
                                <MeauLink lable="About" to="/about" activeOnlyWhenExact={false} />
                                <MeauLink lable="Contact" to="/contact" activeOnlyWhenExact={false} />
                            </ul>
                        </div>
                    </nav>
            )
        }
    }

export default Meau;

