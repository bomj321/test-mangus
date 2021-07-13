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

import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { PayloadToken } from 'src/auth/models/token.model';

import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) { }

  @Roles(Role.ADMIN)
  @Get()
  findAll(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.categoriesService.findAll(user.sub);
  }

  @Roles(Role.ADMIN)
  @Post()
  create(@Req() req: Request, @Body() payload: CreateCategoryDto) {
    const user = req.user as PayloadToken;
    return this.categoriesService.create(user.sub, payload);
  }

  @Roles(Role.ADMIN)
  @Put(':id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    const user = req.user as PayloadToken;
    return this.categoriesService.update(user.sub, id, payload);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = req.user as PayloadToken;
    return this.categoriesService.remove(user.sub, id);
  }
}
