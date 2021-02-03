import { AppModel } from "../models/AppModel";

export class AppResponseCrud {

    result:string = 'SUCCESS';
    response:Record<string,any> = {};
    pk!:number;
    model!:AppModel;
    models!:AppModel[];

}