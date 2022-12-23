import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import EpicDescription from './EpicDescription.vue';
import { dti } from '@/__tests__/base/helpers';

function createEpicDescription(
  owner?: { name: string; link?: string },
  projects?: string[]
) {
  return mount(EpicDescription, {
    props: {
      owner,
      projects,
      estimate: '0h',
    },
  });
}

describe.concurrent('Unit: EpicDescription', () => {
  describe('owner', () => {
    test('Не должен показывать owner, если не передан', () => {
      const wrapper = createEpicDescription();
      expect(wrapper.find(dti('owner')).exists()).toBeFalsy();
    });
    test('Должен показывать owner, если он передан', () => {
      const wrapper = createEpicDescription({ name: 'Father' });
      const owner = wrapper.find(dti('owner'));
      expect(owner.exists()).toBeTruthy();
      expect(owner.text()).toContain('Father');
    });
  });

  describe('projects', () => {
    test('Не должен показывать projects, если они не переданы', () => {
      const wrapper = createEpicDescription();
      expect(wrapper.find(dti('project')).exists()).toBeFalsy();
    });
    test('Должен показать 1 project, если передан массив из 1 элемента', () => {
      const wrapper = createEpicDescription(undefined, ['test']);
      const projects = wrapper.findAll(dti('project'));
      expect(projects.length).toBe(1);
      expect(projects[0].text()).toBe('test');
    });
    test('Должен показать 2 projects, если передан массив из 2 элементов', () => {
      const wrapper = createEpicDescription(undefined, ['test1', 'test2']);
      const projects = wrapper.findAll(dti('project'));
      expect(projects.length).toBe(2);
      expect(projects[0].text()).toBe('test1');
      expect(projects[1].text()).toBe('test2');
    });
  });
});
