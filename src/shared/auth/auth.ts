import { iAuth } from './iauth'
import { Request, Response, NextFunction } from "express";

export class Auth implements iAuth {
    async handleAuth(level: string, req: Request, res: Response, next: NextFunction): Promise<void> {
        const { authorization } = req.headers
        const auth = true
        console.log(authorization)
        if (level == 'private' && auth) next()
        else if (level == 'public') next()
        else res.status(401).json({ message: 'Unauthorized access' })
    }
}