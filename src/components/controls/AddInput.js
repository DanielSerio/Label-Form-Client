import React, { useState } from 'react';
import Icon from './Icon';
import request from 'request';

const AddInput = () => {
  const [state, setState] = useState({
    focused: false,
    value: ''
  });

  const handleClick = async () => {
    await request({
      url: 'http://127.0.0.1:3001',
      method: 'POST',
      headers : {
        "content-type": "application/json",
      },
      body: {
        "name": state.value,
        "production": false
      },
      json: true
    }, (err) => {
      console.log(err);
    });

    window.location.reload();
  };

  const handleChange = e => {
    const value = e.target.value;
    setState({focused: state.focused, value: value});
  };

  return (
    <div className="control">
      <div className={state.focused ? 'add-input focused' : 'add-input'}>
        <input type="text" 
               className="input" 
               onFocus={() => setState({focused: true, ...state})} 
               onBlur={() => setState({focused: false, ...state})}
               onChange={handleChange}/>
        <Icon name="add" onClick={handleClick}/>
      </div>
      <label className="label">Add Label</label>
    </div>
  );
}

export default AddInput;
