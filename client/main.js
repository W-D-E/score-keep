import React from 'react'; // done for us behind the scene
import ReactDOM from 'react-dom';
//import of a Meteor module starts with meteor/
import {Meteor} from 'meteor/meteor';
//On importe Tracker pour nous permettre de synchroniser les deux base de données en temps réel
import {Tracker} from 'meteor/tracker';
//On fait appel à la base de donnée sur le client
//On a maintenant une base de donnée coté client ce qui accélère le processus
import {Players, calculatePlayerPositions} from './../imports/api/players';
//On import nos  Component React.
import App from './../imports/ui/App';


//On attend d'abord que le DOM soit chargé avec Meteor.startup
Meteor.startup(() => {
  //Call Tracker.autorun pour synchroniser les 2 db
  Tracker.autorun(() => {
  //    create variable called Players => set equal to to fetch query
  let players = Players.find({}, {
    sort: {
      score: -1
    }
  }).fetch(); //renvoie une array
  let postionedPlayers = calculatePlayerPositions(players);
  let title = 'Score Keep';
  let subTitle = 'Créé par Warren Euriclide';


  //ReactDOM prend 2 args: 1. le JSX qu'on veut afficher, 2. l'élément html où il sera placé
  ReactDOM.render(<App title={title} players={postionedPlayers} subTitle={subTitle}/>, document.getElementById('app'));
  });
});

//JSX = Javascrip XML, an extension of the javascript language
//Grace a JSX on peut utiliser une syntaxe XML et générer du html dans le navigateur

{/* afficher le h1 avec la variable inclue dans le text*/} // ceci est un commentaire

//REFERENCES
//// //un array d'objet qui contiendra les joueurs et leurs attributs
// //ceci sera fait par le bias d'un base de donnée par la suite
// //on affichera ces infos grace à JSX
// const players = [{
//   _id: '1',
//   name: 'Willy',
//   score: 99
// },{
//   _id: '2',
//   name: 'Thomas',
//   score: 18
// }, {
//   _id: '3',
//   name: 'Warren',
//   score: 7
// }];
