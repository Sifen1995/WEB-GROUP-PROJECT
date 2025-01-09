// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schemas/admin.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async findAdminByEmail(email: string): Promise<Admin> {
    return this.adminModel.findOne({ email });
  }

  async createAdmin(data: { email: string; password: string }): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newAdmin = new this.adminModel({ ...data, password: hashedPassword, role: 'admin' });
    return newAdmin.save();
  }
}
