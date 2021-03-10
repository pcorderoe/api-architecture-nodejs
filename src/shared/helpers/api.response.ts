import { NextFunction, Request, Response } from 'express'


export const handleApiResponse = (err:Error, req:Request, res:Response, next:NextFunction) => {
  //console.log(err)
  if(err){
    res.status(500).json({error:err.message, data:null})
  }
  
//  console.log('restssss')
 // console.log('err', err)
  //console.log('handler',req)
}
