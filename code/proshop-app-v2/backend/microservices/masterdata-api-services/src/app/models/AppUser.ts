import { AppModel } from './AppModel';

export class AppUser extends AppModel {
    firstName!:string;
    lastName!:string;
    email!:string;
    password!:string;
}