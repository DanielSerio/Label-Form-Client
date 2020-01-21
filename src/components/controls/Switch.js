import React, { useState, useEffect } from 'react';

const SwitchButton = props => {
  const initial = props.production;

  const [state, setState] = useState({
    production: initial
  });

  const handleClick = async e => {
    try {
      await props.onClick({event: e, ...state});
    } catch(e) {
      console.error(e);
    }
    
  };

  useEffect(() => {
    console.log(props);
    setState({
      production: props.production
    });
  }, [props.production]);

  return (
    <div className={state.production ? 'switch production' : 'switch'} onClick={handleClick}>
      <div className="prod">PROD</div>
      <div className="dev">DEV</div>
    </div>
  );
}

export default SwitchButton;
