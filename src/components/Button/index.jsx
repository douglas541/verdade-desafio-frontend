import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Button(props) {
   return (
      <div id="button-container">
         <Link {...props}>{props.text}</Link>
      </div>
   );
}