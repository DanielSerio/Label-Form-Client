import React from 'react';
import { Switch, Route } from "react-router-dom";
import List from '../pages/List';
import Edit from '../pages/Edit';

const Main = () => {
  return (
    <main className="content">
      <div className="container">
        <Switch>
          <Route path="/edit"><Edit /></Route>
          <Route path="/"><List /></Route>
        </Switch>
      </div>
    </main>
  );
}

export default Main;
