import { DATA_TYPE } from 'jsstore';

const dbName = 'task_planner';

export type TEpic = {
  id: number;
  title: string;
  owner?: {
    name: string;
    link?: string;
  };
  projects?: string[];
  estimate: number;
  panels?: number[];
};

const tblEpics = {
  name: 'Epic',
  columns: {
    id: { primaryKey: true, autoIncrement: true },
    title: { notNull: true, dataType: DATA_TYPE.String },
    owner: { dataType: DATA_TYPE.Object },
    projects: { dataType: DATA_TYPE.Array },
    estimate: { dataType: DATA_TYPE.Number, default: 0 },
    panels: { dataType: DATA_TYPE.Array },
  },
};

export default {
  name: dbName,
  tables: [tblEpics],
};
