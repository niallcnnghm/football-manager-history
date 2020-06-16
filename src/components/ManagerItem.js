import React, { useState } from 'react';

const ManagerItem = ({ manager }) => {

  const [toggled, setToggled] = useState(false)

  const careerList = manager.career.map((career) => {
    return <div>{career.team.name} {career.start} - {career.end}</div>
  })

  return (
    <div className="item">
      <div className="content">
        <div onClick={() => setToggled(toggled => !toggled)} className="header" key="manager">
          {manager.firstname} {manager.lastname}
        </div>
        <div className="description">
          {toggled && careerList}
        </div>
      </div>
    </div>
  )
}

export default ManagerItem;