import { Router } from 'express';
import Trophy from './trophy.model.js';
import * as trophiesService from './trophy.service.js';
import catchErrors from '../../common/catchErrors.js';
import { StatusCodes } from "http-status-codes"

const router = Router();

router.route('/').get(async (req, res) => {
  const trophies = await trophiesService.getAllTrophies();
  res.json(trophies.map(Trophy.toResponse));
});

router.route('/').post(
  catchErrors(async (req, res) => {
    const { name, place, country, winner } = req.body;

    const trophy = await trophiesService.createTrophy({name, place, country, winner });

    if (trophy) {
      res.status(StatusCodes.CREATED).json(Trophy.toResponse(Trophy));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'TROPHY_NOT_CREATE', msg: 'Trophy not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const trophy = await playersService.getTrophyById(id);

    if (trophy) {
      res.json(Trophy.toResponse(trophy));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TROPHY_NOT_FOUND', msg: 'Trophy not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { name, place, country, winner } = req.body;

    const trophy = await trophiesService.updateTrophyById({ id, name, place, country, winner});

    if (trophy) {
      res.status(StatusCodes.OK).json(Trophy.toResponse(trophy));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TROPHY_NOT_FOUND', msg: 'Trophy not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const trophy = await trophiesService.deleteTrophyById(id);

    if (!trophy) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TROPHY_NOT_FOUND', msg: 'Trophy not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'TROPHIES_DELETED', msg: 'The Trophy has been deleted' });
  })
);

export default router;
