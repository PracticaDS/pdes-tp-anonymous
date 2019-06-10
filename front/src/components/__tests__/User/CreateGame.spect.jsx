import React from 'react';
import { shallow } from 'enzyme';
import CreateGame from '../../User/CreateGame';

describe('CreateGame component', () => {
  const createGame = shallow(<CreateGame />);
  it('CreateGame contains a title', () => {
    expect(createGame.find('h4').text()).toEqual('Nuevo juego');
  });
  it('CreateGame contains a input', () => {
    expect(createGame.find('input').hasClass('gameName')).toEqual(true);
  });
  it('CreateGame contains a button to enter a new game', () => {
    expect(createGame.find('button').at(0).text()).toEqual('Ingresar');
  });
  it('CreateGame contains a button to cancel operation', () => {
    expect(createGame.find('button').at(1).text()).toEqual('Cancelar');
  });
});
