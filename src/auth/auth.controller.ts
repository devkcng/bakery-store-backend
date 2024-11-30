// import {
//   Controller,
//   Post,
//   Body,
//   Request,
//   UseGuards,
//   HttpException,
//   HttpStatus,
// } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { JwtAuthGuard } from './jwt-auth.guard';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post('login')
//   async login(@Body() req) {
//     const user = await this.authService.validateUser(req.email, req.password);
//     if (!user) {
//       throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
//     }
//     return this.authService.login(user);
//   }

//   @Post('register')
//   async register(@Body() createUserDto: CreateUserDto) {
//     try {
//       return await this.authService.register(createUserDto);
//     } catch (error) {
//       throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
//     }
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post('profile')
//   getProfile(@Request() req) {
//     return req.user;
//   }
// }
