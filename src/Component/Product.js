import React from 'react';
import Products from './Products';
import { NavLink, Route } from "react-router-dom";

    class Product extends React.Component {
        render(){

        	const products = [
        		{
        			id:1,
        			slug:"iphone",
        			name : "inphone x",
        			price : 350000
        		},
        		{
        			id:2,
        			slug:"samsung",
        			name : "sam sung",
        			price : 56660
        		},
        		{
        			id:3,
        			slug:"oppo",
        			name : "oppo x",
        			price : 350000
        		},
        	]

        	var {match} = this.props

        	var url = match.match.url;
        	

        	var result = products.map((product, index) =>{
        		return(
        			<NavLink to={`${url}/${product.slug}`} key={index} >
	        			<li 
		        			className="list-group-item">
		        			{product.id} - {product.name} - {product.price}
	        			</li>
	        		</NavLink>
        		);
        	});

            return(
                <div className="container-fluid">
                    <div className="conten" id="conten">
                    	<h1>danh sach san pham</h1>
    	                <div className="row">
    	                	<ul className="list-group">
    	                		{result}
    	                	</ul>
    	                </div>

    	                <div className="row">
    	                	<Route path="/product/:slug" component={Products} />
    	                </div>
                    </div>
                </div>
            );
        }
    }

export default Product;

