import {Request, Response} from 'express';
import  { ImageDetails } from '../model/imageDetails';

const imageDet = (req:Request, res:Response, next:Function)=>{
    const params: ImageDetails = req.body;
    if(!params.fileName){
        return res.status(400).send('filename is required');
    } else if (!params.resizeHeight && params.resizeHeight <=0 && !params.resizeWidth && params.resizeWidth <=0){
        return res.status(400).send('It is required to include the size you want the image to resize to');
    }
    next();
}

export default imageDet;
