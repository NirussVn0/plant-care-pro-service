import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private plantsRepository: Repository<Plant>,
  ) {}

  create(createPlantDto: CreatePlantDto) {
    const plant = this.plantsRepository.create(createPlantDto);
    return this.plantsRepository.save(plant);
  }

  findAll() {
    return this.plantsRepository.find();
  }

  async findOne(id: string) {
    const plant = await this.plantsRepository.findOne({ where: { id } });
    if (!plant) {
      throw new NotFoundException(`Plant with ID ${id} not found`);
    }
    return plant;
  }

  async update(id: string, updatePlantDto: UpdatePlantDto) {
    const plant = await this.findOne(id);
    this.plantsRepository.merge(plant, updatePlantDto);
    return this.plantsRepository.save(plant);
  }

  async remove(id: string) {
    const plant = await this.findOne(id);
    return this.plantsRepository.remove(plant);
  }
}
