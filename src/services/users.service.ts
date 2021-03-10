import { NextFunction, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { toJsonArr } from '../shared/helpers/util'
const prisma = new PrismaClient()



export const index = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try{
        const users = await prisma.user.findMany({take:50})
        res.status(200).json({error:null, data:toJsonArr(users)})
    }catch(error){
        next(error)
    }
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
