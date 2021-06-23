import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutingController } from './routing.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RoutingController],
})
export class RoutingModule {}
