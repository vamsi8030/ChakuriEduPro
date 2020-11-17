import React from 'react';
import FirstCard from './Upload_Resume';
import SecondCard from './PersonalDetails';
import ThirdCard from './WorkExperience';
import FourthCard from './Education';
import FifthCard from './Project';
import SixthCard from './LanguagesKnown';

const Welcome = () => {

    return(
        <div>
            <hr className =" border-dark-100 mx-auto " />
            <FirstCard/>
            <hr className ="border-dark-100 mx-auto" />
            <SecondCard/>
            <hr className ="border-dark-100 mx-auto" />
            <ThirdCard/>
            <hr className ="border-dark-100 mx-auto" />
            <FourthCard/>
            <hr className ="border-dark-100 mx-auto" />
            <FifthCard/>
            <hr className ="border-dark-100 mx-auto" />
            <SixthCard/>
        </div>
    );

};

export default Welcome;