import Multitone, { getInstanceFactory } from '@/services/base/Multitone';

import connection from '@/jsstore_con';
import scheme from './scheme';
import type { TEpic } from './scheme';

type TSelect = {
  from: string;
};

class DBService extends Multitone {
  waitForInit: Promise<boolean> = Promise.reject();

  constructor() {
    super();

    this.waitForInit = connection.initDb(scheme);
  }

  async waitSelect<T>(selectQuery: TSelect) {
    await this.waitForInit;
    return connection.select<T>(selectQuery);
  }

  getEpics() {
    return this.waitSelect<TEpic>({
      from: 'Epic',
    });
  }
}

export const getDBService = getInstanceFactory<DBService>(DBService);
