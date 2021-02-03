import { AppModel } from './../models/AppModel';
import { AppRequest } from "./AppRequest";

export class AppRequestCrud<T extends AppModel> extends AppRequest {

    model!: T;
}