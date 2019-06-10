import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../Game/Game';

describe('Game component', () => {
  const game = shallow(<Game />);

  it('The game contains a ToolboxMenu', () => {
    expect(game.find('ToolboxMenu'));
  });

  it('The game contains a WorkingArea', () => {
    expect(game.find('WorkingArea'));
  });

  it('The game contains the Information', () => {
    expect(game.find('Information'));
  });
});
