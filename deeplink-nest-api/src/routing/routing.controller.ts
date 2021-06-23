import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('routing')
export class RoutingController {
  @Get(':code')
  redirect(@Param('code') code: string, @Res() res): void {
    res.redirect(`${process.env.DEEP_LINK_HOST}/about/${code}`);
  }
}
