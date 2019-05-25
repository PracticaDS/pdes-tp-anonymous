import { Router } from "express";
import User from '../models/user';
const router = Router();

router.route('/users')
  .get(userController.list);

router.route('/:username')
  .post(userController.create)
  .get(userController.getUser);

router.route('/:username/fabricas')
  .get(userController.getFactories);

module.exports = router;
