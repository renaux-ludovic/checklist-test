import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/checklist-test/list-1">Checklist 1</Link>
        </li>
        <li>
          <Link to="/checklist-test/list-2">Checklist 2</Link>
        </li>
        <li>
          <Link to="/checklist-test/list-3">Checklist 3</Link>
        </li>
        <li>
          <Link to="/checklist-test/list-4">Checklist 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
