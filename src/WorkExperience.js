import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const WorkExperience = () => {

    return(
        <div className="container align-items-center">
            <div className='mt-3'>
                <div className="border border-dark rounded-lg">
                    <div class="row">
                        <div class="col"><h5 class="mb-3 p-2">Work Experience:</h5></div>
                        <div className="col-1" style={{"float":"right"}}>
                            <Link className="btn btn-outline-info"><AiFillFileAdd/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default WorkExperience;