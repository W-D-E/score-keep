import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';
//creation d'une nouvelle collection avec la fonction constructrice
//La majuscule est un convention de Mongo pour nommer le collection
export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
    let rank = 1;

    return players.map((player, index) => {
      if (index !== 0 && players[index - 1].score > player.score) {
        rank++;
      }

      return {
        ...player,
        rank,
        position: numeral(rank).format('0o')
      };
    });
};
