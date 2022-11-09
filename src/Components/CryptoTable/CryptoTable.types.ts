import { TestProps } from '../../Config/Tests/Test.types';
import { CryptoType } from '../../Models/Crypto.types';

export interface RequiredCryptoTableProps {
  /**
   * Crypto data array.
   */
  cryptos: CryptoType[];
}

export interface DefaultCryptoTableProps {}

export interface OptionalCryptoTableProps {}

export type CryptoTableProps = RequiredCryptoTableProps &
  DefaultCryptoTableProps &
  OptionalCryptoTableProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;

export type CryptoTableStyleProps = Required<DefaultCryptoTableProps>;
