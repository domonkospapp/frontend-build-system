import { h } from 'preact';
import { Link } from 'preact-router';

const Menu = () => (
	<header>
		<h1>Preact App</h1>
		<nav>
			<Link href="/">Home </Link>
			<Link href="/registration">Registration </Link>
		</nav>
	</header>
);

export default Menu;
