// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Separator, ContentWrapper, PaddingWrapper } from './Wrappers';
import { useConnect } from '../../contexts/Connect';
import Identicon from '../../library/Identicon';
import { useModal } from '../../contexts/Modal';

export const Accounts = forwardRef((props: any, ref: any) => {
  const { setSection } = props;

  const {
    getAccount,
    connectToAccount,
    disconnectFromAccount,
    activeAccount,
  }: any = useConnect();
  const { setStatus } = useModal();
  let { accounts } = useConnect();

  const activeAccountMeta = getAccount(activeAccount);

  // remove active account from connect list
  accounts = accounts.filter((item: any) => item.address !== activeAccount);

  return (
    <ContentWrapper>
      <PaddingWrapper ref={ref}>
        <h2>{activeAccount === '' ? 'Select' : 'Switch'} Account</h2>
        <div className="head">
          <button
            type="button"
            onClick={() => {
              setSection(0);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} transform="shrink-5" />
            &nbsp;Back to Wallets
          </button>
        </div>

        {activeAccount !== '' ? (
          <button
            type="button"
            className="item"
            onClick={() => {
              disconnectFromAccount();
            }}
          >
            <div>
              <Identicon value={activeAccountMeta?.address} size={26} />
              <span className="name">&nbsp; {activeAccountMeta?.name}</span>
            </div>
            <div className="danger">Disconnect </div>
          </button>
        ) : (
          <button type="button" className="item" disabled>
            <div>No Account Connected</div>
            <div />
          </button>
        )}
        <Separator />

        {accounts.map((item: any, index: number) => {
          const { address, name } = item;
          return (
            <button
              type="button"
              className="item"
              key={`switch_acnt_${index}`}
              onClick={() => {
                connectToAccount(item);
                setStatus(0);
              }}
            >
              <div>
                <Identicon value={address} size={26} />
                <span className="name">&nbsp; {name}</span>
              </div>
              <div />
            </button>
          );
        })}
      </PaddingWrapper>
    </ContentWrapper>
  );
});

export default Accounts;