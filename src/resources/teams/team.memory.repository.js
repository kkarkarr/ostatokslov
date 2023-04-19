import  Team  from './team.model.js';

const Teams = [
  new Team ({ id: 1 ,name: 'Cloud9', region: 'SNG', country: 'Russia', trophyId: 1, playerId: 1 }),
];

const getAllTeams = async () => Teams;

const getTeamById = async (id) => Teams.find((team) => team.id === id);

const createTeam = async ({ id, name, region, country, trophyId, playerId }) => {
  const team = new Team({ id, name, region, country, trophyId, playerId});
  Teams.push(team);
  return team;
};

const deleteTeamById = async (id) => {
  const teamPosition = Teams.findIndex((team) => team.id === id);

  if (teamPosition === -1) return null;

  const teamDeletable = Teams[teamPosition];

  Teams.splice(teamPosition, 1);
  return teamDeletable;
};

const updateTeamById = async ({ id, name, region, country, trophyId, playerId }) => {
  const teamPosition = Teams.findIndex((team) => team.id === id);

  if (teamPosition === -1) return null;

  const oldTeam = Teams[teamPosition];
  const newTeam = { ...oldTeam, name, region, country, trophyId, playerId};

  Teams.splice(teamPosition, 1, newTeam);
  return newTeam;
};

export default {
  Teams,
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
};

