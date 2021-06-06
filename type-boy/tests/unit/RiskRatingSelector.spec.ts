import { mount } from '@vue/test-utils';
import RiskRatingSelector from '@/components/RiskRatingSelector.vue';

describe('RiskRatingSelector.vue', () => {
  it.each([
      [0, 'Info'],
      [1, 'Low'],
      [2, 'Medium'],
      [3, 'High'],
  ])('Select change', async (state, text) => {
    const wrapper = mount(RiskRatingSelector);
    const options = wrapper.findAll('option');

    await options.at(state).setSelected();
    

    expect(wrapper.find('option:checked').element.textContent).toBe(text);
  });
  it.each([
    [0],
    [1],
    [2],
    [3],
  ])('Event fired', async (state) => {
    const wrapper = mount(
        RiskRatingSelector,
        {
            data() {
                return {
                    currentRating: state,
                }
            }
        }
        );
    const select = wrapper.find('select');
    await select.trigger('change')
    const event = wrapper.emitted().ratingChange;
    expect(event).toBeTruthy()
    expect(event).toEqual([[state]])
  });
  it('Override selector', async () => {
      let overrideRating = 1;
      const wrapper = mount(RiskRatingSelector);
      expect(wrapper.find('option:checked').element.textContent).toBe('Info');
      overrideRating = 1;
      await wrapper.setProps({overrideRating});
      expect(wrapper.find('option:checked').element.textContent).toBe('Low');
  })
});