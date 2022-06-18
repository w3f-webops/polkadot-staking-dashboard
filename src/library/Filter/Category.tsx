// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

export const Category = (props: any) => {
  const { title } = props;
  const buttons = props.buttons ?? [];

  return (
    <div className="category">
      <div className="head">
        {title}
        {buttons.map((button: any, i: number) => (
          <button
            key={`category_${title}_${i}`}
            type="button"
            onClick={() => button.onClick()}
            disabled={button.disabled}
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="items">{props.children}</div>
    </div>
  );
};