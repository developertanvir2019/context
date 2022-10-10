import React, { useContext } from 'react';
import { UserContext } from './Layout';

const About = () => {
    const data = useContext(UserContext)
    return (
        <div>
            {
                data.map(dt => <h1> about : {dt.email}</h1>)
            }
        </div>
    );
};

export default About;