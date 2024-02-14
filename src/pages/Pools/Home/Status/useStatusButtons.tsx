// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { registerSaEvent } from 'Utils';
import { useTranslation } from 'react-i18next';
import { useApi } from 'contexts/Api';
import { useActivePool } from 'contexts/Pools/ActivePool';
import { useBondedPools } from 'contexts/Pools/BondedPools';
import { useSetup } from 'contexts/Setup';
import { useTransferOptions } from 'contexts/TransferOptions';
import { useActiveAccounts } from 'contexts/ActiveAccounts';
import { useImportedAccounts } from 'contexts/Connect/ImportedAccounts';
import { useNetwork } from 'contexts/Network';
import { usePoolsTabs } from '../context';
import { useBalances } from 'contexts/Balances';

export const useStatusButtons = () => {
  const { t } = useTranslation('pages');
  const { network } = useNetwork();
  const {
    isReady,
    poolsConfig: { maxPools },
  } = useApi();
  const { isOwner } = useActivePool();
  const { setActiveTab } = usePoolsTabs();
  const { bondedPools } = useBondedPools();
  const { getPoolMembership } = useBalances();
  const { activeAccount } = useActiveAccounts();
  const { getTransferOptions } = useTransferOptions();
  const { isReadOnlyAccount } = useImportedAccounts();
  const { setOnPoolSetup, getPoolSetupPercent } = useSetup();

  const membership = getPoolMembership(activeAccount);
  const { active } = getTransferOptions(activeAccount).pool;
  const poolSetupPercent = getPoolSetupPercent(activeAccount);

  const disableCreate = () => {
    if (!isReady || isReadOnlyAccount(activeAccount) || !activeAccount) {
      return true;
    }
    if (
      maxPools &&
      (maxPools.isZero() || bondedPools.length === maxPools?.toNumber())
    ) {
      return true;
    }
    return false;
  };

  let label;
  let buttons;
  const createBtn = {
    title: `${t('pools.create')}${
      poolSetupPercent > 0 ? `: ${poolSetupPercent}%` : ``
    }`,
    icon: faPlusCircle,
    large: false,
    transform: 'grow-1',
    disabled: disableCreate(),
    onClick: () => {
      registerSaEvent(`${network.toLowerCase()}_pool_create_button_pressed`);
      setOnPoolSetup(true);
    },
  };

  const joinPoolBtn = {
    title: `${t('pools.join')}`,
    icon: faUserPlus,
    large: false,
    transform: 'grow-1',
    disabled:
      !isReady ||
      isReadOnlyAccount(activeAccount) ||
      !activeAccount ||
      !bondedPools.length,
    onClick: () => {
      registerSaEvent(`${network.toLowerCase()}_pool_join_button_pressed`);
      setActiveTab(1);
    },
  };

  if (!membership) {
    label = t('pools.poolMembership');
    buttons = [createBtn, joinPoolBtn];
  } else if (isOwner()) {
    label = `${t('pools.ownerOfPool')} ${membership.poolId}`;
  } else if (active?.isGreaterThan(0)) {
    label = `${t('pools.memberOfPool')} ${membership.poolId}`;
  } else {
    label = `${t('pools.leavingPool')} ${membership.poolId}`;
  }
  return { label, buttons };
};
