// Copyright 2024 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { TimeLeftFormatted } from 'hooks/useTimeLeft/types';

export interface CountdownProps {
  timeleft: TimeLeftFormatted;
  markup?: boolean;
}
