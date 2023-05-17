import  Player  from './player.model.js';

const Players = [
  new Player({ id: '1', name: 'Sergey', surname: 'Rykhtorov', nickname: 'Ax1le', teamId: "2", country: 'Russia', references: ['MVP EPL S13', 'TOP-4 2022'], age: 20 }),
  new Player({  id: '2', name: 'Daniil', surname: 'Pavlovski', nickname: 'Ev1lgen1us', teamId: "2", country: 'Belarus', references:'netu', age: 17})
];

const getAll = async () => Players;

const getPlayerById = async (id) => Players.find((player) => player.id === id);

const createPlayer = async ({ id, name, surname, nickname, teamId, country, references, age }) => {
  const player = new Player({ id, name, surname, nickname, teamId, country, references, age });
  Players.push(player);
  return player;
};

const deleteById = async (id) => {
  const playerPosition = Players.findIndex((player) => player.id === id);

  if (playerPosition === -1) return null;

  const playerDeletable = Players[playerPosition];

  Players.splice(playerPosition, 1);
  return playerDeletable;
};

const updateById = async ({ id, name, surname, nickname, teamId, country, references, age }) => {
  const playerPosition = Players.findIndex((player) => player.id === id);

  if (playerPosition === -1) return null;

  const oldPlayer = Players[playerPosition];
  const newPlayer = { ...oldPlayer, id, name, surname, nickname, teamId, country, references, age };

  Players.splice(playerPosition, 1, newPlayer);
  return newPlayer;
};



export{
  Players,
  getAll,
  getPlayerById,
  createPlayer,
  deleteById,
  updateById,
};

