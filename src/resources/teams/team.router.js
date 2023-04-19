import { Router } from 'express';
import Team  from './team.model.js';
import * as teamsService from './team.service.js';
import catchErrors from '../../common/catchErrors.js';
import { StatusCodes } from "http-status-codes"

const router = Router();

router.route('/').get(async (req, res) => {
  const teams = await teamsService.getAllTeams();
  res.json(teams.map(Team.toResponse));
});

router.route('/').post(
  catchErrors(async (req, res) => {
    const {name, region, country, trophyId, playerId} = req.body;

    const team = await teamsService.createTeam({name, region, country, trophyId, playerId});

    if (team) {
      res.status(StatusCodes.CREATED).json(Team.toResponse(Team));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'TEAM_NOT_CREATE', msg: 'TEAM not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const team = await teamsService.getTeamById(id);

    if (team) {
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
    const { name, region, country, trophyId, playerId } = req.body;

    const team = await teamsService.updateTeamById({ id, name, region, country, trophyId, playerId });

    if (team) {
      res.status(StatusCodes.OK).json(Team.toResponse(team));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TEAM_NOT_FOUND', msg: 'Team not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const team = await teamsService.deleteTeamById(id);

    if (!team) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TEAM_NOT_FOUND', msg: 'Team not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'TEAMS_DELETED', msg: 'The Team has been deleted' });
  })
);

export default router;
