import React, { useRef } from 'react';
import { useState } from 'react';

function PlayerComponent({name,symbol}) {

  const [updatedName, setUpdatedName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(){

    setIsEditing((updatePlayer) => !updatePlayer);

  }

  function hanldeChange(event){
    setUpdatedName(event.target.value);
  }

  let playerName = <span className='player-name'>{updatedName}</span>;
  //let buttonCaption = 'Edit';

  if(isEditing){

    playerName = <input type='text' value={updatedName} onChange={hanldeChange}/>;
        
    //buttonCaption = 'Save';
  }

  return (
     
    <li>
          <span className='player'>
            {playerName}
            <span className='player-symbol'>{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default PlayerComponent;