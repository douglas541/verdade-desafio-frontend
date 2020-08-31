import React, { useState } from 'react';
import Avatar from '../../components/Avatar';

import Button from '../../components/Button';

import './styles.css';

export default function PreGamePage() {
   const [avatarId, setAvatarId] = useState(0);
   const [nickname, setNickname] = useState('');
   const userSettings = {
      avatarId,
      nickname
   };

   return (
      <div className="main container">
         <div className="wrapper">
            <div className="avatar menu">
               <span>Escolha seu avatar</span>
               <div className="avatar container">
                  <Avatar
                     className="avatar element"
                     avatarId={1}
                     onClick={() => setAvatarId(1)}
                  />
                  <Avatar
                     className="avatar element"
                     avatarId={2}
                     onClick={() => setAvatarId(2)}
                  />
                  <Avatar
                     className="avatar element"
                     avatarId={3}
                     onClick={() => setAvatarId(3)}
                  />
                  <Avatar
                     className="avatar element"
                     avatarId={4}
                     onClick={() => setAvatarId(4)}
                  />
                  <Avatar
                     className="avatar element"
                     avatarId={5}
                     onClick={() => setAvatarId(5)}
                  />
                  <Avatar
                     className="avatar element"
                     avatarId={6}
                     onClick={() => setAvatarId(6)}
                  />
               </div>
            </div>
            <div className="nickname container">
               <span>Nickname</span>
               <input type="text" id="nickname-input" onChange={(e) => {
                  setNickname(e.currentTarget.value);
               }} />
            </div>

            <Button text="Entrar" to="#" onClick={() => {
               console.log(userSettings);
            }} />
         </div>
      </div>
   )
}