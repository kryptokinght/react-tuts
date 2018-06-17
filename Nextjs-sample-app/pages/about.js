import Link from 'next/link';

const About = () => {
	return (
		<div>
			<ul>
				<li><Link href="/"><a>Home</a></Link></li>
				<li><Link href="/about"><a>About</a></Link></li>
			</ul>
			<h1>Welcome to About Page</h1>
			<p>This is a sample Nextjs application!</p>
		</div>
	);
}

export default About;
