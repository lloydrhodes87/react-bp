import React from 'react';

const ChildTwo = (props) => {
   const { alert } = props; 
    return (
        <div>
            <p>This is a child component</p>
            <button onClick={() => alert()}>Click for alert</button>
        </div>
    );
};

export default ChildTwo;
