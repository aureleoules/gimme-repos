import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Repository from './components/Repository';

function App(props) {

	const [repos, setRepos] = useState([]);

	useEffect(() => {
		axios.get('/unknown').then(response => {
			setRepos(response.data.items);
			console.log(response.data);
		}).catch(err => {
			if(err) throw err;
		});
	}, []);

    return (
		<div className="repositories">
			<div className="container">
				{repos.map(r => {
					return <Repository {...r}/>
				})}
			</div>
		</div>
	)
}

export default App;