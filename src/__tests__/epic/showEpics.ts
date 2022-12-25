import { DBService, destroyDBService } from '@/db/DBService';
import type { TEpic } from '@/db/scheme';
import { expect, vi } from 'vitest';
import App from '@/App.vue';
import { flushPromises, mount } from '@vue/test-utils';
import { dti } from '../base/helpers';

const getEpicsMock: () => TEpic[] = () => [
  {
    id: 0,
    title: 'Эпик',
    owner: {
      name: 'Руслан',
      link: 'http://ruslan',
    },
    projects: ['SITE'],
    estimate: 0,
  },
  {
    id: 1,
    title: 'Эпик 2',
    estimate: 20,
  },
];

const dbServiceMock = {
  getEpics: vi.fn(getEpicsMock),
};

export default async function showEpics() {
  DBService.instance = dbServiceMock;

  const wrapper = mount(App);
  await flushPromises();

  const epics = wrapper.findAll(dti('epic'));

  // Должно быть 2 эпика
  expect(epics.length).toBe(2);

  // Проверяем 1-й эпик
  const firstEpic = epics[0];

  expect(firstEpic.find(dti('epic-title')).text()).toBe('Эпик');

  const owner = firstEpic.find(dti('owner'));
  expect(owner.text()).toContain('Руслан');
  expect(owner.find('a').attributes('href')).toBe('http://ruslan');

  expect(firstEpic.find(dti('project')).text()).toBe('SITE');

  expect(firstEpic.find(dti('estimate')).text()).toBe('0h');

  // Проверяем 2-й эпик
  const secondEpic = epics[1];

  expect(secondEpic.find(dti('epic-title')).text()).toBe('Эпик 2');
  expect(secondEpic.find(dti('estimate')).text()).toBe('2d 4h');

  destroyDBService();
}
