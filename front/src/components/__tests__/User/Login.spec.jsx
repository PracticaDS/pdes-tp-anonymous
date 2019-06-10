import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../User/Login';

describe('Login component', () => {
  const login = shallow(<Login />);

  it('Login contains a title', () => {
    expect(login.find('h4').text()).toEqual('Ingreso al juego');
  });
  it('Login contains a input', () => {
    expect(login.find('input'));
  });
  it('Login contains a button', () => {
    expect(login.find('button'));
  });
});
