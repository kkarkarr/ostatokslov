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
    const { name, surname, nickname, teamId } = req.body;

    const player = await playersService.createPlayer({name, surname, nickname, teamId });

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

    const player = await playersService.getById(id);

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
    const { name, surname, nickname, teamId } = req.body;

    const user = await playersService.updateById({ id, name, surname, nickname, teamId});

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

    const player = await playersService.deleteById(id);

    if (!player) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'PLAYER_NOT_FOUND', msg: 'Player not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'PLAYERS_DELETED', msg: 'The Player has been deleted' });
  })
);

export default router;