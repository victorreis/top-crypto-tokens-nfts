/* eslint-disable react/jsx-max-depth */
import { TestProps } from '../../Config/Tests/Test.types';
import { Typography } from '../Typography/Typography';
import { StyledCryptoTable } from './CryptoTable.styles';
import { CryptoTableProps, DefaultCryptoTableProps } from './CryptoTable.types';

export const cryptoTableDefaults: Required<DefaultCryptoTableProps> &
  Required<TestProps> = {
  testID: 'CryptoTable',
};

export const CryptoTable: React.FC<CryptoTableProps> = (props): JSX.Element => {
  const { testID = cryptoTableDefaults.testID, cryptos, ...others } = props;

  const renderCryptoRows = () =>
    cryptos.map(
      ({ id, name, poolPercentage, priceChangePercentage, liquidity }) => (
        <tr key={id}>
          <td>
            <Typography>{name}</Typography>
          </td>
          <td>
            <Typography>{poolPercentage}</Typography>
          </td>
          <td>
            <Typography>{priceChangePercentage}</Typography>
          </td>
          <td>
            <Typography>{liquidity}</Typography>
          </td>
        </tr>
      )
    );

  return (
    <div data-testid={testID} {...others}>
      <StyledCryptoTable>
        <thead>
          <tr>
            <th>
              <Typography variant="subtitle1">Tokens</Typography>
            </th>
            <th>
              <Typography variant="subtitle1">Pool %</Typography>
            </th>
            <th>
              <Typography variant="subtitle1">Price Change %</Typography>
            </th>
            <th>
              <Typography variant="subtitle1">Liquidity</Typography>
            </th>
          </tr>
        </thead>
        <tbody>{renderCryptoRows()}</tbody>
      </StyledCryptoTable>
    </div>
  );
};
