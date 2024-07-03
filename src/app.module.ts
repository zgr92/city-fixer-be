import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProblemsModule } from './problems/problems.module';

@Module({
  imports: [
    ProblemsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/city-fixer-db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
