import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import {
  availableTime,
  availableTimes,
  canGoBack,
} from "@models/pantomime/props";
import {
  setAvailableTime,
  availableTimeSetupSubmit,
  goBack,
} from "@models/pantomime/actions";
import { IState } from "@models/interfaces";

const styles = require("./styles.module.css");

interface IProps {
  availableTime: number;
  availableTimes: number[];
  canGoBack: boolean;
  goBack: () => void;
  setAvailableTime: (availableTime: number) => void;
  availableTimeSetupSubmit: () => void;
}

const _AvailableTimeSetup: FC<IProps> = ({
  availableTime,
  availableTimes,
  canGoBack,
  setAvailableTime,
  availableTimeSetupSubmit,
  goBack,
}): ReactElement => {
  const onAvailableTimeChange = e => {
    setAvailableTime(e.target.value);
  };

  return (
    <div className={classnames(styles.availableTimeSetupContainer)}>
      <div className={classnames(styles.availableTimeSetupTitle)}>
        Επιλέξτε τον διαθέσιμο χρόνο
      </div>
      <select
        className={classnames(styles.availableTimeTargetInput)}
        value={availableTime}
        onChange={onAvailableTimeChange}
      >
        {availableTimes.map(time => (
          <option key={time} value={time}>
            {time} Δευτερόλεπτα
          </option>
        ))}
      </select>
      <Button
        onClick={() => availableTimeSetupSubmit()}
        className={classnames(styles.availableTimeTargetSetupSubmitButton)}
      >
        ΣΥΝΕΧΕΙΑ
      </Button>
      {canGoBack && (
        <Button
          onClick={() => goBack()}
          className={classnames(styles.backButton)}
        >
          ΠΙΣΩ
        </Button>
      )}
    </div>
  );
};

const AvailableTimeSetup = connect(
  createStructuredSelector<
    IState,
    {
      availableTime: IProps["availableTime"];
      availableTimes: IProps["availableTimes"];
      canGoBack: IProps["canGoBack"];
    },
    {
      availableTime: IProps["availableTime"];
      availableTimes: IProps["availableTimes"];
      canGoBack: IProps["canGoBack"];
    }
  >({
    availableTime,
    availableTimes,
    canGoBack,
  }),
  { setAvailableTime, availableTimeSetupSubmit, goBack }
)(_AvailableTimeSetup);

export { AvailableTimeSetup };
