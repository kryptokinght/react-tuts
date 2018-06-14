import Link from 'next/link';

const Index = () => {
	return (
		<div>
			<ul>
				<li><Link href="/"><a>Home</a></Link></li>
				<li><Link href="/about"><a>About</a></Link></li>
			</ul>
			<h1>Home Page</h1>
		</div>
	);
}

export default Index;
