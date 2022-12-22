import Multitone, { getInstanceFactory } from './base/Multitone';
import useServiceFactory from './base/useServiceFactory';

class UserService extends Multitone {
  name = 'Дарина';
  surname = 'Киричкова';

  get avatar() {
    return `${this.name[0]}${this.surname[0]}`.toUpperCase();
  }

  init() {
    // Initialization after calling a hook
  }
}

export const getUserService = getInstanceFactory<UserService>(UserService);

export const useUserService = useServiceFactory(getUserService, UserService);
