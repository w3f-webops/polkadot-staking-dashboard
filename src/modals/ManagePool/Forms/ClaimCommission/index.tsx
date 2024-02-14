// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
  ActionItem,
  ButtonSubmitInvert,
  ModalNotes,
  ModalPadding,
  ModalWarnings,
} from '@polkadot-cloud/react';
import { greaterThanZero, planckToUnit, rmCommas } from '@polkadot-cloud/utils';
import BigNumber from 'bignumber.js';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useApi } from 'contexts/Api';
import { useActivePool } from 'contexts/Pools/ActivePool';
import { Warning } from 'library/Form/Warning';
import { useSignerWarnings } from 'hooks/useSignerWarnings';
import { useSubmitExtrinsic } from 'hooks/useSubmitExtrinsic';
import { SubmitTx } from 'library/SubmitTx';
import { useOverlay } from '@polkadot-cloud/react/hooks';
import { useNetwork } from 'contexts/Network';
import { useActiveAccounts } from 'contexts/ActiveAccounts';

export const ClaimCommission = ({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<number>>;
}) => {
  const { t } = useTranslation('modals');
  const { api } = useApi();
  const {
    networkData: { units, unit },
  } = useNetwork();
  const { setModalStatus } = useOverlay().modal;
  const { activeAccount } = useActiveAccounts();
  const { isOwner, activePool } = useActivePool();
  const { getSignerWarnings } = useSignerWarnings();

  const poolId = activePool?.id;
  const pendingCommission = new BigNumber(
    rmCommas(activePool?.rewardPool?.totalCommissionPending || '0')
  );

  // valid to submit transaction
  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    setValid(isOwner() && greaterThanZero(pendingCommission));
  }, [activePool, pendingCommission]);

  // tx to submit
  const getTx = () => {
    if (!valid || !api) {
      return null;
    }
    return api.tx.nominationPools.claimCommission(poolId);
  };

  const submitExtrinsic = useSubmitExtrinsic({
    tx: getTx(),
    from: activeAccount,
    shouldSubmit: true,
    callbackSubmit: () => {
      setModalStatus('closing');
    },
  });

  const warnings = getSignerWarnings(
    activeAccount,
    false,
    submitExtrinsic.proxySupported
  );

  return (
    <>
      <ModalPadding horizontalOnly>
        {warnings.length > 0 ? (
          <ModalWarnings withMargin>
            {warnings.map((text, i) => (
              <Warning key={`warning${i}`} text={text} />
            ))}
          </ModalWarnings>
        ) : null}
        <ActionItem
          text={`${t('claim')} ${planckToUnit(
            pendingCommission,
            units
          )} ${unit} `}
        />
        <ModalNotes>
          <p>{t('sentToCommissionPayee')}</p>
        </ModalNotes>
      </ModalPadding>
      <SubmitTx
        valid={valid}
        buttons={[
          <ButtonSubmitInvert
            key="button_back"
            text={t('back')}
            iconLeft={faChevronLeft}
            iconTransform="shrink-1"
            onClick={() => setSection(0)}
          />,
        ]}
        {...submitExtrinsic}
      />
    </>
  );
};
