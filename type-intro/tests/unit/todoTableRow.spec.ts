import { mount, shallowMount } from '@vue/test-utils';
import TodoTableRow from '@/components/TodoComponents/TodoTableRow.vue';

describe('TodoTableRow.vue', () => {
    it('Default Row', () => {
      const todoItem = {
            id: 3,
            name: 'Hello world',
            riskRating: 2,
            completed: false,
      };
    
      const wrapper = mount(
          TodoTableRow,
          {
              propsData: {
                  todoItem
              }
          }
        );

        expect(wrapper.find('tr').attributes().class).toBe('');

        const rows = wrapper.findAll('td');
        expect(rows.at(0).element.textContent).toContain('Hello world');
        expect(rows.at(1).element.textContent).toContain('Medium');
    });
    it('Completed Row', () => {
        const todoItem = {
            id: 3,
            name: 'Completed Row',
            riskRating: 1,
            completed: true,
        };
    
      const wrapper = mount(
          TodoTableRow,
          {
              propsData: {
                  todoItem
              }
          }
        );

        expect(wrapper.find('tr').attributes().class).toBe('table-success');

        const rows = wrapper.findAll('td');
        expect(rows.at(0).element.textContent).toContain('Completed Row');
        expect(rows.at(1).element.textContent).toContain('Low');
    });
    it('Can Complete', async () => {
        const todoItem = {
            id: 3,
            name: 'Inprogress Row',
            riskRating: 3,
            completed: false,
        };
        const wrapper = mount(
            TodoTableRow,
            {
                propsData: {
                    todoItem
                }
            }
        );

        await wrapper.find('input').trigger('click');
        expect(wrapper.find('tr').attributes().class).toBe('table-success');
    });
  });