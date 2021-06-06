import { mount, shallowMount } from '@vue/test-utils';
import TodoNewItemRow from '@/components/TodoComponents/TodoNewItemRow.vue';

describe('TodoNewItemRow.vue', () => {
    it('Model event', async () => {
      const wrapper = shallowMount(
          TodoNewItemRow,
        );

        wrapper.find('input').setValue('Hello world');
        const select = wrapper.find('button');
        await select.trigger('click');
        const event = wrapper.emitted().submitted;
        expect(event).toBeTruthy();
        expect(event).toHaveLength(1);
        expect(event).toEqual([[{"completed": false, "id": 3, "name": "Hello world", "riskRating": 0}]]);
    });
  });