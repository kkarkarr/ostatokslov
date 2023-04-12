import { v4 as uuidv4 } from 'uuid';

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

export default Trophy;
