/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react';
import {
  // ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import Clock from '.';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'components/atoms/clock',
  component: Clock,
} as ComponentMeta<typeof Clock>;

// const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Locale = () => <Clock />;

export const ISOFormatUTC = () => <Clock useLocale={false} />;

export const WithStyle = () => <Clock useLocale style={{ color: 'green', fontWeight: 'bold' }} />;
