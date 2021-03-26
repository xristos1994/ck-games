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
    description: "Word must starts with syllable",
  },
  tak: {
    id: "tak",
    name: "...Tak",
    description: "Word must ends with syllable",
  },
  tikTak: {
    id: "Tik...Tak",
    name: "Tik...Tak",
    description: "Word must contain syllable",
  },
};
