import React from 'react';

import {Players} from './../api/players';






export default class AddPlayer extends React.Component {

  //une fonction pour prévenir le rafraichissement auto de la page et
  //
  handleSubmit(event) {

    let playerName = event.target.playerName.value;
    event.preventDefault();

    if (playerName) {//les strings vides ne passeront pas le test
      event.target.playerName.value = '';
      //insertion d'un nouveau document joueurs
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render () {
    //if you want to call component/props inside of a callback you need to bind the this keyword
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Nom du joueur"/>
          <button className="button">Ajouter un joueur</button>
        </form>
      </div>
    );
  }
}
