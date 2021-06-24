import { IMode } from './interfaces';

interface IModes {
  tik: IMode;
  tak: IMode;
  tikTak: IMode;
}

export const Modes: IModes = {
  tik: {
    id: 'tik',
    name: 'Tik...',
    description: 'Tik Mode Description'
  },
  tak: {
    id: 'tak',
    name: '...Tak',
    description: 'Tak Mode Description'
  },
  tikTak: {
    id: 'Tik...Tak',
    name: 'Tik...Tak',
    description: 'Tik...Tak Mode Description'
  }
};
