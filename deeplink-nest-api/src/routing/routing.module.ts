import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutingController } from './routing.controller';
import { RoutingService } from './routing.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RoutingController],
  providers: [RoutingService],
})
export class RoutingModule {}
