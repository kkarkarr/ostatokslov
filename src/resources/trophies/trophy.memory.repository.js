import { Trophy } from './trophy.model';

const Trophies = [
  new Trophy ({ id: 1 ,name: 'EPL S17', place: 'Malta Arena', country: 'Malta', winner: 'FaZe' }),
];

const getAllTrophies = async () => Trophies;

const getTrophyById = async (id) => Trophies.find((team) => trophy.id === id);

const createTrophy = async ({ id, name, place, country, winner }) => {
  const trophy = new Trophy({ id, name, place, country, winner});
  Trophies.push(trophy);
  return trophy;
};

const deleteTrophyById = async (id) => {
  const trophyPosition = Trophies.findIndex((trophy) => trophy.id === id);

  if (trophyPosition === -1) return null;

  const trophyDeletable = Trophies[trophyPosition];

  Trophies.splice(trophyPosition, 1);
  return trophyDeletable;
};

const updateTrophyById = async ({ id, name, place, country, winner }) => {
  const trophyPosition = Trophies.findIndex((trophy) => trophy.id === id);

  if (trophyPosition === -1) return null;

  const oldTrophy = Trophies[trophyPosition];
  const newTrophy = { ...oldTrophy, id, name, place, country, winner};

  Trophies.splice(trophyPosition, 1, newTrophy);
  return newTrophy;
};

export default {
  Trophies,
  getAllTrophies,
  getTeamById,
  createTrophy,
  deleteTrophyById,
  updateTrophyById
};

