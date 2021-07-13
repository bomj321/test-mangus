import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { Category } from './entities/category.entity';


import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';
import { Course } from './entities/course.entity';


import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Category, Course])],
  controllers: [CategoriesController, CoursesController, UsersController],
  providers: [CategoriesService, CoursesService, UsersService],
  exports: [UsersService]
})
export class UsersModule { }
