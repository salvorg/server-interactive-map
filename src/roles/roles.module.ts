import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.models";
import {Role} from "./roles.models";
import {UserRoles} from "../user-roles/user-roles.models";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ]
})
export class RolesModule {}
