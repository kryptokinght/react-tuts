//import Head from 'next/head';
//import Navbar from './Navbar';

const Head = require('next/head');
const Navbar = require('./navbar');


const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Sample nextjs App</title>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;