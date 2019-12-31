import React from 'react';
import { Route, Link } from "react-router-dom";

const meaus = [
	{
		name:<i className="far fa-calendar-alt fa-lt"></i>,
		to:"/",
		exact:true
	},
	{
		name:<i className="far fa-play-circle fa-lt"></i>,
		to:"/about",
		exact:false
	},
	{
		name:<i className="far fa-calendar-alt fa-lt"></i>,
		to:"/contact",
		exact:false
	},
	{
		name:<i className="far fa-calendar-alt fa-lt"></i>,
		to:"/product",
		exact:false
	}
]


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
                


                <div className="side-nav" id="side-nav">
                    <div className="logo">
                        <a>
                            <i className="fab fa-airbnb fa-2x"></i>
                        </a>
                    </div>
                    <ul>
                        { this.showMeau(meaus) }
                    </ul>
                </div>
            )
        }

        showMeau = (meaus) =>{
        	var resule = null;
        		resule = meaus.map((meau, index) =>{
        			return (
        				<MeauLink 
        				key={index} 
        				lable={meau.name} 
        				to={meau.to} 
        				activeOnlyWhenExact={meau.exact} />
        			)
        		});
        	return resule;
        }
    }

export default Meau;

