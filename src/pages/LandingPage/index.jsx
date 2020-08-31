import React from 'react';
import Button from '../../components/Button';

import LandingImg from '../../assets/pics/Landing-img.svg'
import './styles.css';

export default function LandingPage() {
   return (
      <div id="container">
         <div id="content">
            <h1>VERDADE OU DESAFIO</h1>
            <img src={LandingImg} alt="Imagem de fundo"></img>
            <Button
               text="Criar sala"
               to="/pregame"
            />
         </div>
      </div>
   )
}