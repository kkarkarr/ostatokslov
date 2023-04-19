import * as teamsRepo from './team.memory.repository.js';

const getAllTeams = () => teamsRepo.getAllTeams();
const getTeamById = (id) => teamsRepo.getTeamById(id);
const createTeam = ({ id, name, region, country, trophyId, playerId}) => teamsRepo.createTeam({ id, name, region, country, trophyId, playerId});
const deleteTeamById = (id) => teamsRepo.deleteTeamById(id);
const updateById = ({id, name, region, country, trophyId, playerId}) => teamsRepo.updateById ({id, name, region, country, trophyId, playerId});



export { getAllTeams,
    getTeamById,
    createTeam,
    deleteTeamById,
    updateById, 
 };
