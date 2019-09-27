import React from 'react';
import ChildTwo from './ChildTwo';

const Child = (props) => {
   const { alert } = props; 
    return (
        <div>
           <ChildTwo alert={alert}/> 
        </div>
    );
};

export default Child;