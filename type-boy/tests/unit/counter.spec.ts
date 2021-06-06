import { mount, shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
  it('default state', () => {
    const wrapper = shallowMount(Counter);
    const increment = wrapper.find('#increment');
    const decrement = wrapper.find('#decrement');
    const counter = wrapper.find('p');

    expect(increment.text()).toContain('Increment');
    expect(decrement.text()).toContain('Decrement');
    expect(counter.text()).toContain('0');
  });

  it('increment', async () => {
    const wrapper = mount(Counter);
    const increment = wrapper.find('#increment');
    const text = wrapper.find('p');

    expect(text.text()).toContain('0');

    await increment.trigger('click');

    expect(text.text()).toContain('1');
  });

  it('decrement', async () => {
    const wrapper = mount(Counter);
    const increment = wrapper.find('#decrement');
    const text = wrapper.find('p');

    expect(text.text()).toContain('0');

    await increment.trigger('click');

    expect(text.text()).toContain('-1');
  });
});