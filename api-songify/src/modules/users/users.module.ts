import { UsersRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

export class UsersModule {
  imports: [UsersService, UsersRepository];
  controllers: [UsersController];
  providers: [UsersService, UsersRepository];
  exports: [UsersService];
}
