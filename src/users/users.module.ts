import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.models";
import {Role} from "../roles/roles.models";
import {UserRoles} from "../user-roles/user-roles.models";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles])
  ]
})
export class UsersModule {}
