// eslint-disable-next-line prettier/prettier
import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { RoutingService } from './routing.service';

@Controller()
export class RoutingController {
  constructor(private routingService: RoutingService) {}

  @Get('urls/:shortCode')
  redirect(@Param('shortCode') shortCode: string, @Res() res): void {
    this.routingService.redirect(shortCode, res);
  }

  @Post('shortener')
  shortener(@Body() { code }: Record<any, string>): void {
    this.routingService.shortener({ code });
  }
}
