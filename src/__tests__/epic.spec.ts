import { describe, test } from 'vitest';
import showEpics from './epic/showEpics';

describe('Эпик', () => {
  test('Должен показывать созданные ранее эпики', showEpics);
});
