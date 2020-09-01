import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

export default function Avatar(params) {
   if (params.avatarId < 1 || params.avatarId > 6)
      return (
         <div>error: avatar image not found</div>
      );

   const avatar = require(`../../assets/avatars/Avatar ${params.avatarId}.svg`);

   return (
      <button to="#" onClick={params.onClick}>
         <img src={avatar} alt="Avatar" />
      </button>
   );
}