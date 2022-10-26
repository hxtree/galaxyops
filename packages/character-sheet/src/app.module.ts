import {AppController} from './app.controller';
import {ArchetypeService} from './archetype.service';
import {Module} from '@nestjs/common';

@Module({
  controllers: [AppController],
  providers: [ArchetypeService],
})
export class AppModule {}
