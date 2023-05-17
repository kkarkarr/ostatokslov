import { v4 as uuidv4 } from 'uuid';

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
    const { id, name, surname, nickname, teamId, country, references, age } = player;
    return { id, name, surname, nickname, teamId, country, references, age };
  }
}

export default Player;




