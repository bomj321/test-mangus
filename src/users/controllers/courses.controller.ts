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

import { CoursesService } from '../services/courses.service';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { PayloadToken } from 'src/auth/models/token.model';

import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) { }

  @Roles(Role.ADMIN)
  @Get()
  findAll(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.coursesService.findAll(user.sub);
  }

  @Roles(Role.ADMIN)
  @Post()
  create(@Req() req: Request, @Body() payload: CreateCourseDto) {
    const user = req.user as PayloadToken;
    return this.coursesService.create(user.sub, payload);
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseDto,
  ) {
    const user = req.user as PayloadToken;
    return this.coursesService.update(user.sub, id, payload);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = req.user as PayloadToken;
    return this.coursesService.remove(user.sub, id);
  }
}
