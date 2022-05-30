// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { HeadingWrapper } from '../Wrappers';
import { Wrapper, FixedContentWrapper, SectionsWrapper } from './Wrappers';
import { useBalances } from '../../contexts/Balances';
import { useConnect } from '../../contexts/Connect';
import { Overview } from './Overview';
import { Forms } from './Forms';
import { useModal } from '../../contexts/Modal';

export const UnlockChunks = () => {
  const { activeAccount } = useConnect();
  const modal = useModal();
  const { getAccountLedger }: any = useBalances();
  const ledger = getAccountLedger(activeAccount);
  const { unlocking } = ledger;

  // active modal section
  const [section, setSection] = useState(0);

  // modal task
  const [task, setTask]: any = useState(null);

  // unlock value of interest
  const [unlock, setUnlock] = useState(null);

  // refs for wrappers
  const headerRef: any = useRef(null);
  const overviewRef: any = useRef(null);
  const formsRef: any = useRef(null);

  // resize modal on state change
  useEffect(() => {
    let _height = headerRef.current?.clientHeight ?? 0;

    if (section === 0) {
      _height += overviewRef.current?.clientHeight ?? 0;
    } else {
      _height += formsRef.current?.clientHeight ?? 0;
    }
    modal.setModalHeight(_height);
  }, [task, section]);

  return (
    <Wrapper>
      <FixedContentWrapper ref={headerRef}>
        <HeadingWrapper>
          <FontAwesomeIcon transform="grow-2" icon={faLockOpen} />
          {unlocking.length > 0 && `${unlocking.length} `}Unlock
          {unlocking.length === 1 ? '' : 's'}
        </HeadingWrapper>
      </FixedContentWrapper>
      <SectionsWrapper
        animate={section === 0 ? 'home' : 'next'}
        transition={{
          duration: 0.5,
          type: 'spring',
          bounce: 0.1,
        }}
        variants={{
          home: {
            left: 0,
          },
          next: {
            left: '-100%',
          },
        }}
      >
        <Overview
          setSection={setSection}
          setUnlock={setUnlock}
          setTask={setTask}
          ref={overviewRef}
        />
        <Forms
          setSection={setSection}
          unlock={unlock}
          task={task}
          ref={formsRef}
        />
      </SectionsWrapper>
    </Wrapper>
  );
};