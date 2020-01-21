import React, { useEffect, useState } from 'react';
import request from 'request';
import Icon from '../controls/Icon';

const DeleteList = () => {
  const [state, setState] = useState({
    items: null
  });

  useEffect(() => {
    request('http://127.0.0.1:3001', (error, response, body) => {
      if (error) throw new Error(error);
      setState({ items: JSON.parse(body).items });
    });
  }, []);

  const handleClick = async item => {
    await request({
      url: `http://127.0.0.1:3001/${item._id}`,
      method: 'DELETE',
      headers : {
        "content-type": "application/json",
      },
      json: true
    }, (err) => {
      console.log(err);
    });

    window.location.reload();
  };

  return (
    <ul className="delete-list">
      {(state.items && state.items.length) &&
        state.items.map(item => {
          return (
            <li>
              <span>{item.name}</span>
              <span><Icon name="delete" onClick={() => handleClick(item)}/></span>
            </li>
          );
        })
      }
    </ul>
  );
}

export default DeleteList;
