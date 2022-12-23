import { getDBService } from '@/db/DBService';
import type { DBService } from '@/db/DBService';
import type { TEpicClient } from './adapters/epicAdapter';
import Multitone, { getInstanceFactory } from './base/Multitone';
import useServiceFactory from './base/useServiceFactory';
import epicAdapter from './adapters/epicAdapter';

class EpicService extends Multitone {
  _dbService: DBService;

  epics: TEpicClient[] = [];

  constructor() {
    super();
    this._dbService = getDBService();
  }

  init() {
    this.updateEpics();
    // this._dbService.test();
  }

  async updateEpics() {
    this.epics = (await this._dbService.getEpics()).map(epicAdapter);
  }
}

export const getEpicService = getInstanceFactory<EpicService>(EpicService);

export const useEpicService = useServiceFactory(getEpicService, EpicService);
