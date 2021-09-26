import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _ScoreSetup as ScoreSetup } from './../ScoreSetup';

const Button = (
  { children, onClick, className='' } :
  { children: ReactChild | ReactChild[]; onClick: MouseEventHandler<HTMLButtonElement>; className: string }
) => {
  return (
    <button onClick={onClick} className={className || undefined}>
      {children}
    </button>
  );
};

jest.mock('@components', () => ({
  __esModule: true,
  Button: Button
}));

const availableScoreTargets = [5, 10, 15, 20];
const t = (label: string, param?: string[]) => label + (param ? param[0] : '');
const setScoreTarget = () => void 0;
const scoreSetupSubmit = () => void 0;
const goBack = () => void 0;

describe('page-components/TikTakBoom/ScoreSetup', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <ScoreSetup
        scoreTarget={availableScoreTargets[0]}
        canGoBack={true}
        availableScoreTargets={availableScoreTargets}
        goBack={goBack}
        setScoreTarget={setScoreTarget}
        scoreSetupSubmit={scoreSetupSubmit}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <ScoreSetup
        scoreTarget={availableScoreTargets[1]}
        canGoBack={false}
        availableScoreTargets={availableScoreTargets}
        goBack={goBack}
        setScoreTarget={setScoreTarget}
        scoreSetupSubmit={scoreSetupSubmit}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
