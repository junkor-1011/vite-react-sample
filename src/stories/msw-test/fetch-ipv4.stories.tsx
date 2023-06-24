/* eslint-disable @typescript-eslint/return-await */
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { rest } from 'msw';

import { ClientIpv4 } from './fetch-ipv4';

/**
 * by RFC5737
 * {@link https://datatracker.ietf.org/doc/html/rfc5737}
 */
const dummyIp = '234.192.0.2';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'msw-test/axios/fetch-ipv4',
  component: ClientIpv4,
} as ComponentMeta<typeof ClientIpv4>;

export const SuccessBehavier: ComponentStory<typeof ClientIpv4> = (args) => (
  <ClientIpv4 {...args} />
);
SuccessBehavier.parameters = {
  msw: {
    handlers: [
      rest.get('https://checkip.amazonaws.com', async (req, res, ctx) => {
        await new Promise((resolve) => setTimeout(resolve, 300)); // wait 0.3 sec
        return await res(ctx.text(`${dummyIp}\n`));
      }),
    ],
  },
};

export const FailureBehavier: ComponentStory<typeof ClientIpv4> = (args) => (
  <ClientIpv4 {...args} />
);
FailureBehavier.parameters = {
  msw: {
    handlers: [
      rest.get('https://checkip.amazonaws.com', async (req, res, ctx) => {
        await new Promise((resolve) => setTimeout(resolve, 300)); // wait 0.3 sec
        return await res(ctx.status(403));
      }),
    ],
  },
};

export const Loading: ComponentStory<typeof ClientIpv4> = (args) => <ClientIpv4 {...args} />;
Loading.parameters = {
  msw: {
    handlers: [
      rest.get('https://checkip.amazonaws.com', async (req, res, ctx) => {
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 60 * 60 * 1000)); // wait 1 hour
        return await res(ctx.text(`${dummyIp}\n`));
      }),
    ],
  },
};
