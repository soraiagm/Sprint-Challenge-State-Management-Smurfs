import React, { useEffect, useState } from "react";
import axios from 'axios';
import Smurfs from './Smurfs.js';
import Form from './Form.js';
import { SmurfContext } from '../contexts/SmurfContext';
import "./App.css";
import Axios from "axios";

// const App = () => {
   
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <Form />
//         <Smurfs />
//       </div>
//     );
  
// }

// export default App;

const App = () => {
	const [ smurfs, setSmurfs ] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(response => {
        console.log(response);
				setSmurfs(response.data);
			})
			.catch(error => console.log(error));
	}, []);

	const addSmurfs = smurf => {
		axios.post('http://localhost:3333/smurfs', smurf).then(res => {}).catch(err => console.log(err));
	};

	return (
		<SmurfContext.Provider value={{ smurfs, addSmurfs }}>
			<div className="App">
        <Form component={Form}/>
				<Smurfs component={Smurfs}/>
			</div>
		</SmurfContext.Provider>
	);
};

export default App;
