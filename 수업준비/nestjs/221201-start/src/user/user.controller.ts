import { Controller, Get, Post, Body, Req, Render } from '@nestjs/common';
import { Request } from 'express';
import { createUserDTO } from 'src/dto/createUserDTO';
import { User } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){};

    @Get()
    @Render('form.ejs')
    viewForm(){
        return [];
    }
	@Get("profile/:id")
	getProfile(@Req() req: Request ): string {
        console.log( "req.query : ", req.query );
        console.log( "req.params : ", req.params );
		return "User Profile FindAll";
	}
    @Post()
    create(@Body() userDTO: createUserDTO) {
        this.userService.create(userDTO);
        return "Create Success";
    }
    @Get('list')
    findAll(): User[] {
        return this.userService.findAll();
    }

}
