import { describe, it } from 'vitest';

import checkAvatar from './user/checkAvatar';

describe.concurrent('Пользователь:', () => {
  it('В шапке показываются первые буквы имени и фамилии', checkAvatar);
});
