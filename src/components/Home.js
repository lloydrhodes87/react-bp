import React from 'react';
import Applicants from './Applicants';
import MortgageRequirements from './MortgageRequirements';
import { ButtonContent } from 'semantic-ui-react';
import ExistingMortgages from './ExistingMortgages';
import useLocalStorage from 'react-use-localstorage';
import PropertyToBeMortgaged from './PropertyToBeMortgaged';

const Home = () => {
    
    
    return (
        <div>
            <MortgageRequirements />
            <ExistingMortgages />
            <Applicants/>
            <PropertyToBeMortgaged />
        </div>
    );
};

export default Home;

