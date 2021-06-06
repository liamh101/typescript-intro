import { mount, shallowMount } from '@vue/test-utils';
import RiskRatingBadge from '@/components/RiskRatingBadge.vue';

describe('RiskRatingBadge.vue', () => {
  it.each([
      [0, 'Info', 'bg-info'],
      [1, 'Low', 'bg-primary'],
      [2, 'Medium', 'bg-warning'],
      [3, 'High', 'bg-danger'],
      [4, 'Unknown', '']
  ])('Badge state', (state, expectedText, expectedClass) => {
    const wrapper = shallowMount(
        RiskRatingBadge,
        {
            propsData: {
                rating: state,
            }
        }
        );
    const badge = wrapper.find('span');

    expect(badge.text()).toContain(expectedText);
    expect(badge.attributes('class')).toContain(expectedClass)
  });
});