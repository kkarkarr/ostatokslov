import { v4 as uuidv4 } from 'uuid';

class User {
  constructor({ id = uuidv4(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

class Player {
  constructor({ id = uuidv4(), name = 'USER', surname = 'SURNAME', nickname = 'NICKNAME', teamId = uuidv4(), country = 'COUNTRY', references = 'REFERENCES' , age = 'AGE'    } = {}) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.nickname = nickname;
    this.teamId = teamId;
    this.country = country;
    this.references = references;
    this.age = age;
  }

  static toResponse(player) {
    const { id, name, surname, nickname, teamId } = player;
    return { id, name, surname, nickname, teamId };
  }
}

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

class Trophy {
  constructor({ id = uuidv4(), name = 'TROPHY', place = 'PLACE', country = 'COUNTRY', winner = 'WINNER', reward = 'REWARD'} = {}) {
    this.id = id;
    this.name = name;
    this.place = place;
    this.country = country;
    this.winner = winner;

  }

  static toResponse(trophy) {
    const { id, name, place, country, winner } = trophy ;
    return { id, name, place, country, winner };
  }
}

export default User;
