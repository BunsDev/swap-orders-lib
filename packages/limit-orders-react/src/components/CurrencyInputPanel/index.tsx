import React, { ReactNode, useCallback, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Currency, CurrencyAmount, Percent, Token } from "@uniswap/sdk-core";
import { Pair } from "@uniswap/v2-sdk";
import { useWeb3 } from "../../web3";

import { Input as NumericalInput } from "../NumericalInput";
// import selectCoinAnimation from 'animation/select-coin.json'
import CurrencySearchModal from "../SearchModal/CurrencySearchModal";
import { useCurrencyBalance } from "../../hooks/Balances";
import classNames from "../../utils/classNames";
import CurrencyLogo from "../CurrencyLogo";
// import DoubleCurrencyLogo from '../DoubleLogo'
// import Input from '../Input'
import { FiatValue } from "./FiatValue";
import { SOUL_FANTOM } from "../../constants/tokens.fantom";
import styled from "styled-components";

const InputPanel = styled.div<{ hideInput?: boolean }>`
  ${({ theme }) => theme.flexColumnNoWrap}
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? "16px" : "20px")};
  background-color: ${({ theme, hideInput }) =>
    hideInput ? "transparent" : theme.bg2};
  z-index: 1;
  width: ${({ hideInput }) => (hideInput ? "100%" : "initial")};
`;

const InputRow = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  padding: ${({ selected }) =>
    selected ? " 1rem 1rem 0.75rem 1rem" : "1rem 1rem 0.75rem 1rem"};
`;
interface CurrencyInputPanelProps {
  value?: string;
  onUserInput?: (value?: "") => void;
  onHalf?: () => void;
  onMax?: () => void;
  showMaxButton: boolean;
  label?: string;
  onCurrencySelect?: (currency: Currency) => void;
  currency?: Currency | null;
  disableCurrencySelect?: boolean;
  hideBalance?: boolean;
  pair?: Pair | null;
  hideInput?: boolean;
  otherCurrency?: Currency | null;
  fiatValue?: CurrencyAmount<Token> | null;
  priceImpact?: Percent;
  id: string;
  showCommonBases?: boolean;
  allowManageTokenList?: boolean;
  renderBalance?: (amount: CurrencyAmount<Currency>) => ReactNode;
  locked?: boolean;
  customBalanceText?: string;
  showSearch?: boolean;
}

export default function CurrencyInputPanel({
  value,
  onUserInput,
  onHalf,
  onMax,
  showMaxButton,
  label = "Input",
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  otherCurrency,
  id,
  showCommonBases,
  renderBalance,
  fiatValue,
  priceImpact,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  locked = false,
  customBalanceText,
  allowManageTokenList = true,
  showSearch = true,
}: CurrencyInputPanelProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { account } = useWeb3();
  const selectedCurrencyBalance = useCurrencyBalance(
    account ?? undefined,
    currency ?? undefined
  );

  const handleDismissSearch = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  return (
    <div
      id={id}
      className={classNames(hideInput ? "p-4" : "p-5", "rounded bg-dark-800")}
    >
      <div className="flex flex-col justify-between space-y-3 sm:space-y-0 sm:flex-row">
        <div className={classNames("w-full sm:w-2/5")}>
          <button
            type="button"
            className={classNames(
              !!currency ? "text-primary" : "text-high-emphesis",
              "open-currency-select-button h-full outline-none select-none cursor-pointer border-none text-xl font-medium items-center"
            )}
            onClick={() => {
              if (onCurrencySelect) {
                setModalOpen(true);
              }
            }}
          >
            <div className="flex">
              <div className="flex items-center">
                <CurrencyLogo
                  currency={currency ? currency : SOUL_FANTOM}
                  size={"54px"}
                />
              </div>
              {pair ? (
                <span
                  className={classNames(
                    "pair-name-container",
                    Boolean(currency && currency.symbol)
                      ? "text-2xl"
                      : "text-xs"
                  )}
                >
                  {pair?.token0.symbol}:{pair?.token1.symbol}
                </span>
              ) : (
                <div className="flex flex-1 flex-col items-start justify-center mx-3.5">
                  {label && (
                    <div className="text-xs font-medium text-secondary whitespace-nowrap">
                      {label}
                    </div>
                  )}
                  <div className="flex items-center">
                    <div className="text-lg font-bold token-symbol-container md:text-2xl">
                      {(currency &&
                      currency.symbol &&
                      currency.symbol.length > 20
                        ? currency.symbol.slice(0, 4) +
                          "..." +
                          currency.symbol.slice(
                            currency.symbol.length - 5,
                            currency.symbol.length
                          )
                        : currency?.symbol) || (
                        <div className="px-2 py-1 mt-1 text-xs font-medium bg-transparent border rounded-full hover:bg-primary border-low-emphesis text-secondary whitespace-nowrap ">
                          {`Select Token`}
                        </div>
                      )}
                    </div>

                    {!disableCurrencySelect && currency && (
                      <ChevronDownIcon
                        width={16}
                        height={16}
                        className="ml-2 stroke-current"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </button>
        </div>
        {!hideInput && (
          <div
            className={classNames(
              "flex items-center w-full space-x-3 rounded bg-dark-900 focus:bg-dark-700 p-3 sm:w-3/5"
            )}
          >
            <>
              {/* <Input.Numeric
                id="token-amount-input"
                value={Number(value)}
                onUserInput={(val) => {
                  onUserInput(val)
                }}
              /> */}
              <InputRow
                style={hideInput ? { padding: "0", borderRadius: "8px" } : {}}
                selected={!onCurrencySelect}
              ></InputRow>
              {!hideBalance && currency && selectedCurrencyBalance ? (
                <div className="flex flex-cols-2">
                  <div
                    onClick={onHalf}
                    className="text-xs font-medium text-right cursor-pointer text-low-emphesis"
                  >
                    {renderBalance ? (
                      renderBalance(selectedCurrencyBalance)
                    ) : (
                      <>
                        {/* {i18n._(t`Balance:`)}  */}
                        {`50%`}
                        {/* {formatCurrencyAmount(selectedCurrencyBalance.divide(2), 4)} {currency.symbol} */}
                        {/* {selectedCurrencyBalance?.toSignificant(6, { groupSeparator: ',' }) || '0'} {currency?.symbol} */}
                      </>
                    )}
                  </div>
                  <br />
                  <div
                    onClick={onMax}
                    className="text-xs font-medium text-right cursor-pointer text-low-emphesis"
                  >
                    {renderBalance ? (
                      renderBalance(selectedCurrencyBalance)
                    ) : (
                      <>
                        {/* {i18n._(t`Balance:`)}  */}
                        {/* {i18n._(t`Balance:`)}  */}
                        {/* {formatCurrencyAmount(selectedCurrencyBalance, 4)} {currency.symbol} */}
                        {selectedCurrencyBalance?.toSignificant(6, {
                          groupSeparator: ",",
                        }) || "0"}{" "}
                        {currency?.symbol}
                      </>
                    )}
                  </div>
                  <FiatValue fiatValue={fiatValue} priceImpact={priceImpact} />
                </div>
              ) : null}
            </>
          </div>
        )}
      </div>
      {!disableCurrencySelect && onCurrencySelect && (
        <CurrencySearchModal //.Controlled
          // open={modalOpen}
          onDismiss={handleDismissSearch}
          onCurrencySelect={onCurrencySelect}
          selectedCurrency={currency ?? undefined}
          otherSelectedCurrency={otherCurrency ?? undefined}
          showCommonBases={showCommonBases}
          isOpen={false} // allowManageTokenList={allowManageTokenList}
          // showSearch={showSearch}
        />
      )}
    </div>
  );
}
