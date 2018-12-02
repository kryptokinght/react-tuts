import Layout from '../components/Layout';
import Names from '../components/Names';

const Index = (props) => {
	return (
		<Layout>
			<div>
				<h1>Home Page</h1>
				<Names names={props.names}/>
			</div>
		</Layout>
	);
}

Index.getInitialProps = function() {
	return {
		names: ["Minanshu Singh", "Himanshu Singh", "Chitnashu Singh"]
	};
}

export default Index;
