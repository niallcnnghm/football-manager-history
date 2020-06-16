import React from 'react';
import ManagerItem from './ManagerItem';

const ManagerList = ({ managers }) => {

  const renderedList = managers.map((manager) => {
    return <ManagerItem key={manager.id} manager={manager}/>;
  })

  return (
    <div>
     There are {managers.length} managers with that name.
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    </div> 
  )
};


export default ManagerList;