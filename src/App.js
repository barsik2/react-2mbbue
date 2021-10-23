import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <header className="headerblok">Блок Header </header>
      <div className="content">
        <div className="emailForm">
          <input className="EmailFilld" type="text" placeholder="Email" />
        </div>
        <div className="PasswordFill">
          <input
            className="passForm"
            type="password"
            placeholder="Введите пароль"
          />
        </div>
        content
      </div>
    </div>
  );
}
