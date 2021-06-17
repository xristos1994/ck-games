import React, { FC, ReactElement } from "react";
import { GreekFlagIcon, UkFlagIcon } from "@components/icons";
import { availableLangs } from "./availableLangs";

interface IProps {
  langCode: string;
}
const LangFlagMap: FC<IProps> = ({ langCode }): ReactElement => {
  switch (langCode) {
    case availableLangs.en.code:
      return <UkFlagIcon />;
    case availableLangs.el.code:
      return <GreekFlagIcon />;
    default:
      return <span>langCode</span>;
  }
};

export { LangFlagMap };
