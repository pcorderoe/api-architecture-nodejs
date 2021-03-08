import { Router, Response, Request } from 'express'
import { Auth } from '../shared/auth/auth'
import { usersService } from "../services";

const router = Router()
const auth = new Auth()

router.get('/', (req:Request, res:Response) => { res.redirect('/docs') })
router.get('/users', auth.handleAuth.bind(this, 'private'), usersService.index)


export default router