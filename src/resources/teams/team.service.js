import * as teamsRepo from './team.memory.repository.js';

const getAllTeams = () => teamsRepo.getAllTeams();
const getTeamById = (id) => teamsRepo.getTeamById(id);
const createTeam = ({ id, name, region, country, trophyId, playerId}) => teamsRepo.createTeam({ id, name, region, country, trophyId, playerId});
const deleteTeamById = async (id) => 
{
    const DeletableTeam = await getTeamById (id);
    teamsRepo.deleteTeamById(id);
    return DeletableTeam;
}    
const updateById = ({id, name, region, country, trophyId, playerId}) => teamsRepo.updateById ({id, name, region, country, trophyId, playerId});



export { getAllTeams,
    getTeamById,
    createTeam,
    deleteTeamById,
    updateById, 
 };
