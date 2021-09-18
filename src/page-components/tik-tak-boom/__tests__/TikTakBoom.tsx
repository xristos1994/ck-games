import React from 'react';
import renderer from 'react-test-renderer';
import { _TikTakBoom as TikTakBoom } from './../TikTakBoom';
import { GameStates } from '@models/tik-tak-boom/config';

const initializeGame = () => void 0;

const SEO = () => {
  return (
    <div>
      SEO
    </div>
  );
};

const PlayersSetup = () => {
  return (
    <div>
      PlayersSetup
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

jest.mock('./../components/', () => ({
  __esModule: true,
  SEO: SEO,
  PlayersSetup: PlayersSetup,
  ScoreSetup: ScoreSetup,
  StartRound: StartRound,
  RoundInProgress: RoundInProgress,
  EndRound: EndRound,
  EndGame: EndGame
}));

describe('page-components/TikTakBoom', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <TikTakBoom
        initializeGame={initializeGame}
        gameState={GameStates.setPlayers}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <TikTakBoom
        initializeGame={initializeGame}
        gameState={GameStates.setScoreTarget}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <TikTakBoom
        initializeGame={initializeGame}
        gameState={GameStates.waitForRoundStart}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <TikTakBoom
        initializeGame={initializeGame}
        gameState={GameStates.roundInProgress}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <TikTakBoom
        initializeGame={initializeGame}
        gameState={GameStates.roundEnded}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <TikTakBoom
        initializeGame={initializeGame}
        gameState={GameStates.gameEnded}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
