import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List/List';
import DetailPage from '../DetailPage/DetailPage';
import { getCharacters } from '../services/avatartApi';

export default function App() {
  const [characters, SetCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then((characters) => SetCharacters(characters));
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <List characters={characters} />}
          />
          <Route
            path="/detail/:id"
            component={() => <DetailPage characters={characters} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
