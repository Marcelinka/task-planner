import { getDBService } from '@/db/DBService';
import type { DBService } from '@/db/DBService';
import type { TEpic } from '@/db/scheme';
import Multitone, { getInstanceFactory } from './base/Multitone';
import useServiceFactory from './base/useServiceFactory';

class EpicService extends Multitone {
  _dbService: DBService;

  epics: TEpic[] = [];

  constructor() {
    super();
    this._dbService = getDBService();
  }

  init() {
    this.updateEpics();
  }

  async updateEpics() {
    this.epics = await this._dbService.getEpics();
  }
}

export const getEpicService = getInstanceFactory<EpicService>(EpicService);

export const useEpicService = useServiceFactory(getEpicService, EpicService);
