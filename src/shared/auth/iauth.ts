import { Request, Response, NextFunction } from "express";
export interface iAuth {
    handleAuth(level:string, req:Request, res:Response, next:NextFunction):Promise<void>
}