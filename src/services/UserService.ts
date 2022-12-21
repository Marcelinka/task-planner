import Multitone, { getInstanceFactory } from './base/Multitone';
import useServiceFactory from './base/useServiceFactory';

class UserService extends Multitone {
  name = 'Дарина';
  surname = 'Киричкова';

  get avatar() {
    return `${this.name[0]}${this.surname[0]}`.toUpperCase();
  }
}

export const getUserService = getInstanceFactory<UserService>(UserService);

export default useServiceFactory(getUserService);
