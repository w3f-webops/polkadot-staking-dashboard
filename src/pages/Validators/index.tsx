// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { PageProps } from '../types';
import { StatBoxList } from '../../library/StatBoxList';
import { useApi } from '../../contexts/Api';
import { useValidators } from '../../contexts/Validators';
import { SectionWrapper } from '../../library/Graphs/Wrappers';
import { ValidatorList } from '../../library/ValidatorList';
import { PageTitle } from '../../library/PageTitle';
import { PageRowWrapper } from '../../Wrappers';
import ActiveEraStatBox from '../Stake/Active/Stats/ActiveEra';
import TotalValidatorsStatBox from './Stats/TotalValidators';
import ActiveValidatorsStatBox from './Stats/ActiveValidators';
import { APIContextInterface } from '../../types/api';

export const Validators = (props: PageProps) => {
  const { page } = props;
  const { title } = page;

  const { isReady } = useApi() as APIContextInterface;
  const { validators } = useValidators();

  return (
    <>
      <PageTitle title={title} />
      <StatBoxList>
        <TotalValidatorsStatBox />
        <ActiveValidatorsStatBox />
        <ActiveEraStatBox />
      </StatBoxList>
      <PageRowWrapper className="page-padding" noVerticalSpacer>
        <SectionWrapper>
          {!isReady ? (
            <div className="item">
              <h3>Connecting...</h3>
            </div>
          ) : (
            <>
              {validators.length === 0 && (
                <div className="item">
                  <h3>Fetching validators...</h3>
                </div>
              )}

              {validators.length > 0 && (
                <ValidatorList
                  validators={validators}
                  batchKey="validators_browse"
                  title="Network Validators"
                  allowMoreCols
                  allowFilters
                  pagination
                  toggleFavourites
                />
              )}
            </>
          )}
        </SectionWrapper>
      </PageRowWrapper>
    </>
  );
};

export default Validators;