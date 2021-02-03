import { AppRequestCrud } from './../dto/AppRequestCrud';
import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { AppUser } from '../models/AppUser';
import { AppResponseCrud } from '../dto/AppResponseCrud';

@JsonController()
export class SignUpcontroller {


    @Post('/registerUser')
    registerUse(@Body() appReqCrud: AppRequestCrud<AppUser>) : AppResponseCrud {
        return new AppResponseCrud();
    }



}