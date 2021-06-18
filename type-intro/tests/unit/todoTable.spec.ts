import { mount, shallowMount } from '@vue/test-utils';
import TodoTable from '@/components/TodoComponents/TodoTable.vue';

describe('TodoTable.vue', () => {
    it('Header', () => {
        const wrapper = mount(TodoTable);

        const headers = wrapper.findAll('th');

        expect(headers.at(0).element.textContent).toContain('Name');
        expect(headers.at(1).element.textContent).toContain('Risk Rating');
        expect(headers.at(2).element.textContent).toContain('Completed');
    });
    it('Mutliple Items', () => {
      const todoItems = [
        {
            id: 3,
            name: 'Incomplete Item',
            riskRating: 2,
            completed: false,
        },
        {
            id: 4,
            name: 'Completed Item',
            riskRating: 3,
            completed: true,
        },
    ];
    
      const wrapper = mount(
        TodoTable,
          {
              propsData: {
                  todoItems
              }
          }
        );

        const bodyRows = wrapper.find('tbody').findAll('tr');
        expect(bodyRows.at(0).attributes('class')).toBe('');
        expect(bodyRows.at(1).attributes('class')).toBe('table-success');
    });
  });