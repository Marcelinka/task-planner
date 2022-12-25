import { describe, it } from 'vitest';

import checkAvatar from './user/checkAvatar';

describe('Пользователь', () => {
  it('В шапке показываются первые буквы имени и фамилии', checkAvatar);
});
