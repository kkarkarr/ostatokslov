import * as playersRepo from './player.memory.repository.js';
import * as teamsRepo from '../teams/team.memory.repository.js'

const getAll = () => playersRepo.getAll();
const getPlayerById = (id) => playersRepo.getById(id);
const createPlayer = ({id, name, surname, nickname, teamId, country, references, age})  =>
   playersRepo.createPlayer({id, name, surname, nickname, teamId, country, references, age});
const deleteById = async (id) => 
{
    const playerDeletable = await getById(id);
    playersRepo.deleteById(id);
    teamsRepo.removePlayerById(id);

    return playerDeletable;
};

const updateById = ({id, name, surname, nickname, teamId, country, references, age}) => playersRepo.updateById({id, name, surname, nickname, teamId, country, references, age});


export default { getAll, getPlayerById,
    createPlayer,
    deleteById,
    updateById,};
