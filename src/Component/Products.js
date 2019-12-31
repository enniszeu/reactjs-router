import React from 'react';

    class Products extends React.Component {
        render(){

        	var {match} = this.props;

        	var sp = match.params.slug

            return(
                <h1>day la chi tiet san pham : {sp}</h1>
            )
        }
    }

export default Products;
