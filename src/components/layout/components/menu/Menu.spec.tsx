import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _Menu as Menu } from './Menu';

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

const ArrowUpIcon = () => {
  return (
    <div>
      ArrowUpIcon
    </div>
  );
};

const ArrowDownIcon = () => {
  return (
    <div>
      ArrowDownIcon
    </div>
  );
};

jest.mock('@components/icons', () => ({
  __esModule: true,
  ArrowUpIcon: ArrowUpIcon,
  ArrowDownIcon: ArrowDownIcon
}));

const AvailableGames = {
  pantomime: 'pantomime',
  tikTakBoom: 'tik-tak-boom'
};

jest.mock('@models/website/interfaces', () => ({
  __esModule: true,
  AvailableGames: AvailableGames
}));

const t = jest.fn().mockImplementation((label: string, param?: string[]) => label + (param ? param[0] : ''));
const setIsMenuOpen = jest.fn();
const setLang = jest.fn();
const availableLangs = [
  { code: 'EN', label: 'English' },
  { code: 'EL', label: 'Ελληνικά' }
];

// selectedGame: string | null;
// isMenuOpen: boolean;
// setIsMenuOpen: (isMenuOpen: boolean) => void;
// availableLangs: { code: string; label: string }[];
// lang: { code: string; label: string };
// setLang: (lang: IProps['lang']) => void;
// t: ITranslate;

describe('components/Menu', () => {
  it('renders correctly', () => {
    const initialWindow = { ...global.window };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window = undefined;

    let tree = renderer.create(
      <Menu
        selectedGame={AvailableGames.pantomime}
        isMenuOpen={false}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Menu
        selectedGame={AvailableGames.tikTakBoom}
        isMenuOpen={false}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Menu
        selectedGame={null}
        isMenuOpen={false}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: ''
      }
    };

    tree = renderer.create(
      <Menu
        selectedGame={null}
        isMenuOpen={true}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Menu
        selectedGame={AvailableGames.pantomime}
        isMenuOpen={true}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Menu
        selectedGame={AvailableGames.tikTakBoom}
        isMenuOpen={true}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Menu
        selectedGame={AvailableGames.pantomime}
        isMenuOpen={false}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Menu
        selectedGame={AvailableGames.tikTakBoom}
        isMenuOpen={false}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window = { ...initialWindow };
  });

  it('has the right event handlers', () => {
    const initialWindow = { ...global.window };
    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: ''
      }
    };

    const tree = renderer.create(
      <Menu
        selectedGame={AvailableGames.pantomime}
        isMenuOpen={true}
        setIsMenuOpen={setIsMenuOpen}
        availableLangs={availableLangs}
        lang={availableLangs[0]}
        setLang={setLang}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    );

    const buttons = tree.root.findAllByType('button');
    buttons[1].props.onClick();
    expect(setLang).toHaveBeenLastCalledWith(availableLangs[1]);

    buttons[2].props.onClick();
    expect(setIsMenuOpen).toHaveBeenLastCalledWith(false);

    global.window = { ...initialWindow };
  });
});
