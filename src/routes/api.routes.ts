import { Router, Response, Request } from "express"
import { usersService } from "../services"
import { Auth } from "../shared/auth/auth"
import { handleApiResponse } from '../shared/helpers/api.response'
const router = Router()
const auth = new Auth()

router.get("/", (req: Request, res: Response) => {
  res.redirect("/docs")
})

let namespace = '/users'
router.post(`/token`, usersService.token)
router.get(`${namespace}`, auth.handleAuth, usersService.index)
router.get(`${namespace}/:id`, auth.handleAuth, usersService.getById)
router.put(`${namespace}/:id`, auth.handleAuth, usersService.update)
router.delete(`${namespace}/:id`, auth.handleAuth, usersService.remove)
router.post(`${namespace}`, auth.handleAuth, usersService.create)
router.post(`${namespace}/register`, usersService.register)


namespace = '/booking'
/*router.get(`${namespace}`, auth.handleAuth, usersService.index)
router.get(`${namespace}/:id`, auth.handleAuth, usersService.getById)
router.put(`${namespace}/:id`, auth.handleAuth, usersService.update)
router.delete(`${namespace}/:id`, auth.handleAuth, usersService.delete)
router.post(`${namespace}`, auth.handleAuth, usersService.create)
router.post(`${namespace}/register`, usersService.register)
router.post(`${namespace}/token`, usersService.token)
*/

router.use('*',handleApiResponse)


export default router

