import React from 'react';
import '../App.css';

const ShareIcon = (props) => {
    return(
        <div className="ShareIcon container">
            <div className="row">
                <div className="col"></div>
                <div className="col-1">
                        
                        <svg
                            float="rightalign"
                            width = "50px" 
                            xmlns="http://www.w3.org/2000/svg" 
                            aria-hidden="true" 
                            focusable="false" 
                            role="img" 
                            viewBox="0 0 512 512"
                        > 
                            <path 
                                className="button icon"
                                fill="#075e54" 
                                d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"
                            />
                        </svg>
                    
                   
                </div>
                <div className="col"></div>

            </div>
            
        </div>

       

    );
}
export default ShareIcon;