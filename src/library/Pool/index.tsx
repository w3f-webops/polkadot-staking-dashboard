// Copyright 2024 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faBars, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useMenu } from 'contexts/Menu';
import type { NotificationText } from 'static/NotificationsController/types';
import { useBondedPools } from 'contexts/Pools/BondedPools';
import { useValidators } from 'contexts/Validators/ValidatorEntries';
import { usePoolCommission } from 'hooks/usePoolCommission';
import { FavoritePool } from 'library/ListItem/Labels/FavoritePool';
import { PoolBonded } from 'library/ListItem/Labels/PoolBonded';
import { PoolCommission } from 'library/ListItem/Labels/PoolCommission';
import { PoolIdentity } from 'library/ListItem/Labels/PoolIdentity';
import { Labels, Separator, Wrapper } from 'library/ListItem/Wrappers';
import { usePoolsTabs } from 'pages/Pools/Home/context';
import { useOverlay } from '@polkadot-cloud/react/hooks';
import { useActiveAccounts } from 'contexts/ActiveAccounts';
import { useImportedAccounts } from 'contexts/Connect/ImportedAccounts';
import { JoinPool } from '../ListItem/Labels/JoinPool';
import { Members } from '../ListItem/Labels/Members';
import { PoolId } from '../ListItem/Labels/PoolId';
import type { PoolProps } from './types';
import { Rewards } from './Rewards';
import { NotificationsController } from 'static/NotificationsController';
import type { MenuItem } from 'contexts/Menu/types';
import { useBalances } from 'contexts/Balances';
import { useSyncing } from 'hooks/useSyncing';
import { MenuList } from 'library/Menu/List';

export const Pool = ({ pool }: PoolProps) => {
  const { t } = useTranslation('library');
  const { memberCounter, addresses, id, state } = pool;
  const { openMenu, open } = useMenu();
  const { validators } = useValidators();
  const { setActiveTab } = usePoolsTabs();
  const { openModal } = useOverlay().modal;
  const { getPoolMembership } = useBalances();
  const { poolsNominations } = useBondedPools();
  const { activeAccount } = useActiveAccounts();
  const { syncing } = useSyncing(['active-pools']);
  const { isReadOnlyAccount } = useImportedAccounts();
  const { getCurrentCommission } = usePoolCommission();

  const membership = getPoolMembership(activeAccount);
  const currentCommission = getCurrentCommission(id);

  // get metadata from pools metabatch
  const nominations = poolsNominations[pool.id];

  // get pool targets from nominations metadata
  const targets = nominations?.targets || [];

  // extract validator entries from pool targets
  const targetValidators = validators.filter(({ address }) =>
    targets.includes(address)
  );

  // copy address notification
  const notificationCopyAddress = (
    key: 'stash' | 'reward'
  ): NotificationText | null =>
    addresses[key] == null
      ? null
      : {
          title: t('addressCopiedToClipboard'),
          subtitle: addresses[key],
        };

  // Consruct pool menu items.
  const menuItems: MenuItem[] = [];

  // Add view pool nominations button to menu
  menuItems.push({
    icon: <FontAwesomeIcon icon={faProjectDiagram} transform="shrink-3" />,
    title: `${t('viewPoolNominations')}`,
    cb: () => {
      openModal({
        key: 'PoolNominations',
        options: {
          nominator: addresses.stash,
          targets: targetValidators,
        },
      });
    },
  });

  // add copy pool stash address button to menu
  menuItems.push({
    icon: <FontAwesomeIcon icon={faCopy} transform="shrink-3" />,
    title: t('copyPoolAddress', { type: 'Stash' }),
    cb: () => {
      const notification = notificationCopyAddress('stash');
      if (notification) {
        navigator.clipboard.writeText(addresses.stash);
        NotificationsController.emit(notification);
      }
    },
  });

  // add copy pool reward address button to menu
  menuItems.push({
    icon: <FontAwesomeIcon icon={faCopy} transform="shrink-3" />,
    title: t('copyPoolAddress', { type: 'Reward' }),
    cb: () => {
      const notification = notificationCopyAddress('reward');
      if (notification) {
        navigator.clipboard.writeText(addresses.reward);
        NotificationsController.emit(notification);
      }
    },
  });

  // Handler for opening menu.
  const toggleMenu = (ev: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!open) {
      openMenu(ev, <MenuList items={menuItems} />);
    }
  };

  const displayJoin =
    !syncing &&
    state === 'Open' &&
    !membership &&
    !isReadOnlyAccount(activeAccount) &&
    activeAccount;

  return (
    <Wrapper className={displayJoin ? 'pool-join' : 'pool'}>
      <div className="inner">
        <div className="row top">
          <PoolIdentity pool={pool} />
          <div>
            <Labels>
              <FavoritePool address={addresses.stash} />
              <div className="label">
                <button type="button" onClick={(ev) => toggleMenu(ev)}>
                  <FontAwesomeIcon icon={faBars} transform="shrink-2" />
                </button>
              </div>
            </Labels>
          </div>
        </div>
        <Separator />
        <div className="row bottom lg">
          <div>
            <Rewards address={addresses.stash} displayFor="default" />
          </div>
          <div>
            <Labels style={{ marginBottom: '0.9rem' }}>
              {currentCommission > 0 && (
                <PoolCommission commission={`${currentCommission}%`} />
              )}
              <PoolId id={id} />
              <Members members={memberCounter} />
            </Labels>
            <PoolBonded pool={pool} />
            {displayJoin && (
              <Labels style={{ marginTop: '1rem' }}>
                <JoinPool id={id} setActiveTab={setActiveTab} />
              </Labels>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
