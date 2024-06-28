import {Provider} from "@angular/core";
import {UserService} from "@core/services/user.service";

export const UserProvider: Provider[] = [
  {
    provide: 'IUserRepository',
    useClass: UserService
  },
];
