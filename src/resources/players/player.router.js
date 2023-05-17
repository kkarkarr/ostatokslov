import {Router} from 'express';
import Player from './player.model.js';
import * as playersService from './player.service.js';
import catchErrors from '../../common/catchErrors.js';
import { StatusCodes } from "http-status-codes";


const router = Router();

router.route('/').get(
  catchErrors(async (req, res) => {
    const players = await playersService.getAll();

    res.json(players.map(Player.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, name, surname, nickname, teamId, country, references, age } = req.body;

    const player = await playersService.createPlayer({id, name, surname, nickname, teamId, country, references, age });

    if (player) {
      res.status(StatusCodes.CREATED).json(Player.toResponse(Player));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'PLAYER_NOT_CREATE', msg: 'Player not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const player = await playersService.getPlayerById(id);

    if (player) {
      res.json(Player.toResponse(player));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PLAYER_NOT_FOUND', msg: 'Player not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { name, surname, nickname, teamId, country, references, age } = req.body;

    const player = await playersService.updateById({ id, name, surname, nickname, teamId, country, references, age});

    if (player) {
      res.status(StatusCodes.OK).json(Player.toResponse(player));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PLAYER_NOT_FOUND', msg: 'Player not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const player = await playersService.getPlayerById(id)
    if (player === undefined) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PLAYER_NOT_FOUND', msg: 'PLayer not found' });
    }
    await playersService.deleteById(id);
    res
      .status(StatusCodes.OK)
      .json({ code: 'PLAYER_DELETED', msg: 'The player has been deleted' });
  })
);

export default router;