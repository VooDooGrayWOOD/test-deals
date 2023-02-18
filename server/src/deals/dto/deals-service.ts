import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Deals, DealsDocument } from '../schemas/deals.schema';
import { Model } from 'mongoose';
import { createDealsDto } from './create-deals.dto';

@Injectable()
export class DealsService {
  constructor(
    @InjectModel(Deals.name) private dealsModel: Model<DealsDocument>,
  ) {}

  async getAll(): Promise<Deals[]> {
    return this.dealsModel.find().exec();
  }

  async getById(id: string): Promise<Deals> {
    return this.dealsModel.findById(id);
  }

  async create(dealsDto: createDealsDto): Promise<Deals> {
    const newDeals = new this.dealsModel(dealsDto);
    return newDeals.save();
  }
}
