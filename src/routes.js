import React from 'react';
import TableManger from './Component/TableManger';
import About from './Component/About';
import Contact from './Component/Contact';
import NotFoud from './Component/NotFoud';
import Product from './Component/Product';

const routes = [
	{
		path:"/",
		exact:true,
		main: () => <TableManger/>
	},
	{
		path:"/about",
		exact:false,
		main: () => <About/>
	},
	{
		path:"/contact",
		exact:false,
		main: () => <Contact/>
	},
	{
		path:"/product",
		exact:false,
		main: (match) => <Product match= {match}/>
	},
	{
		path:"",
		exact:false,
		main: () => <NotFoud/>
	}
]



export default routes;


