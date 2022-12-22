import { mount } from '@vue/test-utils';
import { expect } from 'vitest';

import { dti } from '@/__tests__/base/helpers';

import { getUserService } from '@/services/UserService';
import MainHeader from '@/components/MainHeader.vue';

export default function checkAvatar() {
  const userService = getUserService();
  userService.name = 'тест';
  userService.surname = 'Кряк';

  const wrapper = mount(MainHeader);
  const avatar = wrapper.find(dti('avatar'));
  expect(avatar.text()).toBe('ТК');
}
