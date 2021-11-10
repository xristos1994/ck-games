import React from 'react';
import renderer from 'react-test-renderer';
import { _Pantomime as Pantomime } from './Pantomime';
import { GameStates } from '@models/pantomime/config';

const initializeGame = () => void 0;

const SEO = () => {
  return (
    <div>
      SEO
    </div>
  );
};

const TeamsSetup = () => {
  return (
    <div>
      TeamsSetup
    </div>
  );
};

const ScoreSetup = () => {
  return (
    <div>
      ScoreSetup
    </div>
  );
};

const AvailableTimeSetup = () => {
  return (
    <div>
      AvailableTimeSetup
    </div>
  );
};

const StartRound = () => {
  return (
    <div>
      StartRound
    </div>
  );
};

const RoundInProgress = () => {
  return (
    <div>
      RoundInProgress
    </div>
  );
};

const EndRound = () => {
  return (
    <div>
      EndRound
    </div>
  );
};

const EndGame = () => {
  return (
    <div>
      ScoreSetup
    </div>
  );
};

jest.mock('./components/', () => ({
  __esModule: true,
  SEO: SEO,
  TeamsSetup: TeamsSetup,
  ScoreSetup: ScoreSetup,
  AvailableTimeSetup: AvailableTimeSetup,
  StartRound: StartRound,
  RoundInProgress: RoundInProgress,
  EndRound: EndRound,
  EndGame: EndGame
}));

describe('page-components/Pantomime', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <Pantomime
        initializeGame={initializeGame}
        gameState={GameStates.setTeams}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Pantomime
        initializeGame={initializeGame}
        gameState={GameStates.setScoreTarget}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Pantomime
        initializeGame={initializeGame}
        gameState={GameStates.setAvailableTime}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Pantomime
        initializeGame={initializeGame}
        gameState={GameStates.waitForRoundStart}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Pantomime
        initializeGame={initializeGame}
        gameState={GameStates.roundInProgress}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Pantomime
        initializeGame={initializeGame}
        gameState={GameStates.roundEnded}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Pantomime
        initializeGame={initializeGame}
        gameState={GameStates.gameEnded}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
