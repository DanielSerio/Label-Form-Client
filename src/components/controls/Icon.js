import React, { useState } from 'react';

const Icon = props => {
  const [state, setState] = useState({
    hovered: false
  });

  const icon = () => {
    switch (props.name) {
      case 'delete':
        return <path fill={state.hovered ? '#17395F' : '#606c76'} d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />;
      default: return <path fill={state.hovered ? '#17395F' : '#606c76'} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />;
    }
  };

  return (
    <div className="icon" onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="24" 
           height="24" 
           viewBox="0 0 24 24" 
           onMouseEnter={() => setState({hovered: true})} 
           onMouseLeave={() => setState({hovered: false})}>
        {icon()}
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
}

export default Icon;
