import React from 'react';
import Document from './Document';
import PrintSmarter from './PrintSmarter';
import Feature from './Feature';
import PrintingTools from './PrintingTools';
import HomeButton from './HomeButton';
const Home = () => {
    return (
        <div>
            <PrintSmarter/>
            <Feature />
            <Document/>
            <PrintingTools/>
            <HomeButton/>
        </div>
    );
}

export default Home;
