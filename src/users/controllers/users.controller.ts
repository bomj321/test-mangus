import {
  Controller,
  Req,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';

import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { PayloadToken } from 'src/auth/models/token.model';

import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';
import { Public } from '../../auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Roles(Role.ADMIN)
  @Get('clients')
  findAll(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.usersService.findAll(user.sub);
  }

  @Public()
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Roles(Role.ADMIN)
  @Post('client')
  createClient(@Req() req: Request, @Body() payload: CreateUserDto) {
    const user = req.user as PayloadToken;
    return this.usersService.createClient(user.sub, payload);
  }

  @Roles(Role.ADMIN)
  @Put('client/:id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    const user = req.user as PayloadToken;
    return this.usersService.update(user.sub, id, payload);
  }

  @Roles(Role.ADMIN)
  @Delete('client/:id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = req.user as PayloadToken;
    return this.usersService.remove(user.sub, id);
  }
}
