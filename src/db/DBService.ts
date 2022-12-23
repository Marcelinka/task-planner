import Multitone, { getInstanceFactory } from '@/services/base/Multitone';

import connection from '@/jsstore_con';
import scheme from './scheme';
import type { TEpic } from './scheme';

type TSelect = {
  from: string;
};

export class DBService extends Multitone {
  waitForInit: Promise<boolean>;

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

  test() {
    return connection.insert({
      into: 'Epic',
      values: [
        {
          title: 'Тестовый эпик',
          owner: {
            name: 'Руслан',
            link: 'https://talk.cdek.ru/cdek/messages/@r.bataev',
          },
          projects: ['LKFL', 'SITE'],
          estimate: 37,
        },
      ],
    });
  }
}

export const getDBService = getInstanceFactory<DBService>(DBService);
