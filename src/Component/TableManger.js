import React from 'react';
import '../public/style/home.css';
import firebaseApp from './FirebaseConfig';

    class Home extends React.Component {

    	constructor(props){
    		super(props);
    		this.itemRef = firebaseApp.database();
    		this.state = {
    			lists : []
    		}
    		this.listenForm = this.listenForm.bind(this);
    	}


    	listenForm(itemRef){
    		var lists=[];

    		this.itemRef.ref('books').on('child_added', (snap) =>{
    			lists.push({
    				name:snap.val()
    			});
    			console.log(lists)
    			this.setState({
    				lists:lists
    			})
    		})
    	}


        render(){
        	console.log(this.itemRef.ref)
            return(
        		<div className="container-fluid">
				<div className="conten" id="conten">
					<div className="nav-title">
						<div className="meau-click" id="meau-click">
							<i className="fas fa-bars fa-2x"></i>
						</div>
						<div className="close" id="close">
							<i className="fas fa-times"></i>
						</div>
					
					</div>

					<table className="table table-hover table-dark">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">First</th>
					      <th scope="col">Last</th>
					      <th scope="col">sua</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th scope="row">1</th>
					      <td>Mark</td>
					      <td>Otto</td>
					      <td>
					      	<button type="button" className="btn btn-info">them</button>
					      	<button type="button" className="btn btn-warning">xoa</button>
					      	<button type="button" className="btn btn-success">sua</button>
					      </td>
					    </tr>
					    
					  </tbody>
					</table>
				</div>
        		</div>
            )
        }
    }

export default Home;

