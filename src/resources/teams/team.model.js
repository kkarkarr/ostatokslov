import { v4 as uuidv4 } from 'uuid';

class Team {
  constructor({ id = uuidv4(), name = 'TEAM', region = 'REGION', country = 'COUNTRY', trophyId = uuidv4(), playerId = uuidv4()} = {}) {
    this.id = id;
    this.name = name;
    this.region = region;
    this.country = country;
    this.trophyId = trophyId;
    this.playerId = playerId;

  }

  static toResponse(team) {
    const { id, name, region, country, trophyId, playerId } = team ;
    return { id, name, region, country, trophyId, playerId };
  }
}

export default Team;
