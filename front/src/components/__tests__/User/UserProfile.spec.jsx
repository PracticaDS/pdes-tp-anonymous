import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../../User/UserProfile';

describe('UserProfile component', () => {
  const match = { params: { user: 'pepe' } };
  const userProfile = shallow(<UserProfile match={match} />);
  it('UserProfile contains a title', () => {
    expect(userProfile.find('h4').text()).toEqual(`Hola ${match.params.user} estas son tus fabricas`);
  });
  it('UserProfile contains the game table', () => {
    expect(userProfile.find('table').hasClass('users')).toEqual(true);
  });
  it('The game table contains all the columns with the game information', () => {
    expect(userProfile.find('td').at(0).text()).toEqual('Nombre');
    expect(userProfile.find('td').at(1).text()).toEqual('Fecha de guardado');
    expect(userProfile.find('td').at(2).text()).toEqual('Cantidad de maquinas');
    expect(userProfile.find('td').at(3).text()).toEqual('Opciones');
  });
  it('UserProfile contains a button to create another game', () => {
    expect(userProfile.find('button').at(0).hasClass('createButton')).toEqual(true);
  });
});
