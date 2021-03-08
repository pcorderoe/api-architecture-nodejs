import { Router } from 'express'
import { pubService } from "../services";

export const router = Router()

router.get('/', pubService.index)


export default router