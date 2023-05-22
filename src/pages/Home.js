import React from 'react';
import Layout from '../components/layout/Layout';
import PlaceList from '../components/PlaceList';

function Home() {
    return (
        <Layout>
            <div>
                <PlaceList />
            </div>
        </Layout>
    );
}

export default Home;
