// Stateless Funtion Component defined as arrow function with destructuring arguments

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="javscript(0)">
					Navbar{" "}
					<span className="badge rounded-pill bg-secondary">
						{totalCounters}
					</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
