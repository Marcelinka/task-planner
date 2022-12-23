import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import OwnerLink from './OwnerLink.vue';

function createOwnerLink(link = '') {
  return mount(OwnerLink, {
    props: {
      link,
    },
  });
}

describe.concurrent('Unit: OwnerLink', () => {
  test('Если передан link, должен отрендерить ссылку', () => {
    const wrapper = createOwnerLink('http://');
    const link = wrapper.find('a');
    expect(link.exists()).toBeTruthy();
    expect(link.attributes('href')).toBe('http://');
  });
  test('Если не передан link, ссылки не должно быть', () => {
    const wrapper = createOwnerLink();
    expect(wrapper.find('a').exists()).toBeFalsy();
  });
});
