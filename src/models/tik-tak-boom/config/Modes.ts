import { IMode } from "./interfaces";

interface IModes {
  tik: IMode;
  tak: IMode;
  tikTak: IMode;
}

export const Modes: IModes = {
  tik: {
    id: "tik",
    name: "Tik...",
    description: "Η λέξη πρέπει να ξεκινά με την επιλεγμένη συλλαβή",
  },
  tak: {
    id: "tak",
    name: "...Tak",
    description: "Η λέξη πρέπει να τελειώνει με την επιλεγμένη συλλαβή",
  },
  tikTak: {
    id: "Tik...Tak",
    name: "Tik...Tak",
    description: "Η λέξη πρέπει απλά να περιέχει την επιλεγμένη συλλαβή",
  },
};
