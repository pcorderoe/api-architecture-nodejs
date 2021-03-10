import { Request, Response } from 'express'

export const index = (req:Request, res:Response):void => {
    res.status(200).json({message:'users'})
}

export const getById = (req:Request, res:Response): void => {
    res.status(200).json({message:'user:getById'})
}

export const update = (req:Request, res:Response): void => {
    res.status(200).json({message:'user:update'})
}

export const remove = (req:Request, res:Response): void => {
    res.status(200).json({message:'user:remove'})
}

export const create = (req:Request, res:Response): void => {
    res.status(200).json({message:'user:create'})
}

export const register = (req:Request, res:Response): void => {
    res.status(200).json({message:'user:register'})
}

export const token = (req:Request, res:Response): void => {
    res.status(200).json({message:'user:token'})
}
