import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutingModule } from './routing/routing.module';

@Module({
  imports: [ConfigModule.forRoot(), RoutingModule],
})
export class AppModule {}
