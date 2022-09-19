import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product/>', () => {
  test('Render of the Product Component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('Buy button', () => {
    const handleAddTToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddTToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddTToCart).toHaveBeenCalledTimes(1);
  });
});
