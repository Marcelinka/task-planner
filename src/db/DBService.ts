import Multitone, {
  destroyFactory,
  getInstanceFactory,
} from '@/services/base/Multitone';

import createConnection from '@/jsstore_con';
import scheme from './scheme';
import type { TEpic } from './scheme';
import type { Connection } from 'jsstore';

type TSelect = {
  from: string;
};

export class DBService extends Multitone {
  waitForInit: Promise<boolean>;

  connection: Connection;

  constructor() {
    super();

    this.connection = createConnection();
    this.waitForInit = this.connection.initDb(scheme);
  }

  async waitSelect<T>(selectQuery: TSelect) {
    await this.waitForInit;
    return this.connection.select<T>(selectQuery);
  }

  getEpics() {
    return this.waitSelect<TEpic>({
      from: 'Epic',
    });
  }

  test() {
    return this.connection.insert({
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

export const destroyDBService = destroyFactory(DBService);
