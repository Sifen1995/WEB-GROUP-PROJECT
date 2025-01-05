import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';


@Controller()
export class EvmController {
  @Get()
  serveHomePage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', '..','..','frontend', 'index.html')); // Path to index.html
  }
}
