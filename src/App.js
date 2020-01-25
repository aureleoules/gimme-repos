import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Repository from './components/Repository';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


function App(props) {

	const defaultRoute = "unknown";
	const [repos, setRepos] = useState([]);
	const [activeRoute, setActiveRoute] = useState(localStorage.getItem("route") || "unknown");

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch();
	}, []);
	
	function fetch() {
		setLoading(true);
		axios.get('/' + activeRoute).then(response => {
			setLoading(false);
			const items = response.data.items;
			if(!items) return;
			if(items.length < 1) return;
			setRepos(response.data.items || []);
		}).catch(err => {
			if(err) {
				setLoading(false);
				throw err
			};
		});
	}

	function setPreference(route) {
		setActiveRoute(route);
		localStorage.setItem("route", route);
		fetch();
	}

    return (
		<div className="repositories">
			<h1>Discover GitHub repositories</h1>
			<div className="selector">
				<button 
					className={activeRoute === "reallyunknown" ? "active": ""}
					onClick={() => setPreference("reallyunknown")}>
					Really unknown
					</button>
				<button 
					className={activeRoute === "unknown" ? "active" : ""}
					onClick={() => setPreference("unknown")}>
						Unknown
					</button>
				<button 
					className={activeRoute === "maybeknown" ? "active": ""}
					onClick={() => setPreference("maybeknown")}>
					Maybe unkown
				</button>
			</div>
			<div className="container">
				<Loader
					className={["loader", loading ? "" : "hide"].join(" ")}
					type="Triangle"
					color="#66fcf1"
					height={300}
					width={300}
				/>
				{repos.map(r => {
					return (
						<Repository key={r.name} {...r}/>
					)
				})}
			</div>
		</div>
	)
}

export default App;