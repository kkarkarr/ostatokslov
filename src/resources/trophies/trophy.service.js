import * as trophiesRepo from './trophy.memory.repository.js';
import * as teamsRepo from '../teams/team.memory.repository.js';

const getAllTrophies = () => trophiesRepo.getAllTrophies();
const getTrophyById = (id) => trophiesRepo.getTrophyById(id);
const createTrophy = ({id, name, place, country, winner}) => trophiesRepo.createTrophy({id, name, place, country, winner});
const deleteTrophyById = async (id) => {
    const trophyDeletable = await getTrophyById (id);
    trophiesRepo.deleteTrophyById(id);
    teamsRepo.deleteTrophyById(id);

    return trophyDeletable;
 };

const updateTrophyById = ({id, name, place, country, winner}) => trophiesRepo.updateTrophyById({id, name, place, country, winner});

export default { getAllTrophies, getTrophyById, createTrophy, deleteTrophyById, updateTrophyById};
