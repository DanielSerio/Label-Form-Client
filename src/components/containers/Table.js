import React, { useEffect, useState } from 'react';
import request from 'request';
import SwitchButton from '../controls/Switch';

const Table = () => {
  const [state, setState] = useState({
    items: null
  });

  useEffect(() => {
    request('http://127.0.0.1:3001', (error, response, body) => {
      if (error) throw new Error(error);
      console.log(body);
      setState({ items: JSON.parse(body).items });
    })
  }, []);

  const handleClick = async item => {
    const url = `http://127.0.0.1:3001/${item._id}`;

    await request({
      url: url,
      method: 'PUT',
      headers : {
        "content-type": "application/json"
      },
      json: true,
      body: {
        production: !item.production,
        name: item.name
      }
    });

    window.location.reload();
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>LABEL</th>
            <th>CONTROLS</th>
          </tr>
        </thead>
        <tbody>
          {(state.items && state.items.length) &&
            state.items.map(item => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>
                    <SwitchButton onClick={() => handleClick(item)} production={item.production} />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {(state.items && !state.items.length) && <h1 className="subtle">No Items</h1>}
    </div>
  );
}

export default Table;
