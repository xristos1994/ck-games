import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import {
  availableTime,
  availableTimes,
  canGoBack
} from '@models/pantomime/props';
import {
  setAvailableTime,
  availableTimeSetupSubmit,
  goBack
} from '@models/pantomime/actions';
import { IState } from '@models/interfaces';

import styles from './styles.module.css';

interface IProps {
  availableTime: number;
  availableTimes: number[];
  canGoBack: boolean;
  goBack: () => void;
  setAvailableTime: (availableTime: number) => void;
  availableTimeSetupSubmit: () => void;
  t: ITranslate;
}

const _AvailableTimeSetup: FC<IProps> = ({
  availableTime,
  availableTimes,
  canGoBack,
  setAvailableTime,
  availableTimeSetupSubmit,
  goBack,
  t
}): ReactElement => {
  const onAvailableTimeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setAvailableTime(Number(e.target.value));
  };

  return (
    <div className={classnames(styles.availableTimeSetupContainer)}>
      <div className={classnames(styles.availableTimeSetupTitle)}>
        {t('Choose Available Time')}
      </div>
      <select
        className={classnames(styles.availableTimeTargetInput)}
        value={availableTime}
        onChange={() => onAvailableTimeChange}
      >
        {availableTimes.map(time => (
          <option key={time} value={time}>
            {`${time} ${t('Seconds')}`}
          </option>
        ))}
      </select>
      <Button
        onClick={() => availableTimeSetupSubmit()}
        className={classnames(styles.availableTimeTargetSetupSubmitButton)}
      >
        {t('CONTINUE')}
      </Button>
      {canGoBack && (
        <Button
          onClick={() => goBack()}
          className={classnames(styles.backButton)}
        >
          {t('BACK')}
        </Button>
      )}
    </div>
  );
};

const AvailableTimeSetup = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        availableTime: IProps['availableTime'];
        availableTimes: IProps['availableTimes'];
        canGoBack: IProps['canGoBack'];
      },
      {
        availableTime: IProps['availableTime'];
        availableTimes: IProps['availableTimes'];
        canGoBack: IProps['canGoBack'];
      }
    >({
      availableTime,
      availableTimes,
      canGoBack
    }),
    { setAvailableTime, availableTimeSetupSubmit, goBack }
  ),
  withTranslation
)(_AvailableTimeSetup);

export { AvailableTimeSetup };
