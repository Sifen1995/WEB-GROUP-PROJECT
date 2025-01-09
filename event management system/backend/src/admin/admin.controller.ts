// src/admin/admin.controller.ts
import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from '../evm/auth/auth.service';
import { AdminService } from '../admin/admin.service';
import { RolesGuard } from '../evm/auth/roles.guard';
import { SetMetadata } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly authService: AuthService,
    private readonly adminService: AdminService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const admin = await this.adminService.findAdminByEmail(loginDto.email);
    if (!admin || !(await this.authService.validateAdmin(admin, loginDto.password))) {
      return { message: 'Invalid credentials' };
    }
    const token = await this.authService.generateToken(admin);
    return { token };
  }

  @UseGuards(RolesGuard)
  @SetMetadata('role', 'admin')
  @Get('dashboard')
  getAdminDashboard(@Req() req) {
    return { message: `Welcome ${req.user.email}` };
  }
}
