import React from 'react';

const Todo = ({todo}) => {
   const  {id,title,completed} = todo;
    return (
        <div>
           <h3> {id} - {title}</h3>
        </div>
    );
};

export {Todo};