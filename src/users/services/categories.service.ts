import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '../entities/category.entity';
import { User } from './../entities/user.entity';

import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';


@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @InjectRepository(User) private userRepo: Repository<User>
  ) { }

  findAll(userId) {
    return this.categoryRepo.find();

    /*
    {
      relations: ['user'],
      where: {
        user: {
          id: userId,
        }
      }
    }

    */
  }

  async findOne(id: number) {
    const user = await this.categoryRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(id: number, data: CreateCategoryDto) {

    if (id) {
      const newCategory = this.categoryRepo.create(data);
      const user = await this.userRepo.findOne(id);
      if (!user) {
        throw new NotFoundException(`User #${id} not found`);
      }
      newCategory.user = user;

      return this.categoryRepo.save(newCategory);
    } else {
      throw new NotFoundException(`User #${id} not found`);
    }

  }

  async update(adminId: number, id: number, changes: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOne({ where: { id: id } });
    this.categoryRepo.merge(category, changes);
    return this.categoryRepo.save(category);
  }

  async remove(adminId: number, id: number) {

    if (adminId) {
      const user = await this.userRepo.findOne(adminId);

      if (!user) {
        throw new NotFoundException(`User #${adminId} not found`);
      }

      return this.categoryRepo.delete(id);
    } else {
      throw new NotFoundException(`User #${id} not found`);
    }
  }

}
