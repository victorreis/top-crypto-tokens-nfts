import { PageContainer } from '../../App.styles';
import { CryptoTable } from '../../Components/CryptoTable';
import { TestProps } from '../../Config/Tests/Test.types';

export const homeDefaults: Required<TestProps> = {
  testID: 'Home',
};

export const Home: React.FC = (): JSX.Element => {
  return (
    <PageContainer data-testid={homeDefaults.testID}>
      <CryptoTable
        cryptos={[
          {
            id: '123',
            name: 'name',
            poolPercentage: '123%',
            priceChangePercentage: '456%',
            liquidity: 10000.1,
          },
          {
            id: '123',
            name: 'name',
            poolPercentage: '123%',
            priceChangePercentage: '456%',
            liquidity: 10000.1,
          },
          {
            id: '123',
            name: 'name',
            poolPercentage: '123%',
            priceChangePercentage: '456%',
            liquidity: 10000.1,
          },
          {
            id: '123',
            name: 'name',
            poolPercentage: '123%',
            priceChangePercentage: '456%',
            liquidity: 10000.1,
          },
          {
            id: '123',
            name: 'name',
            poolPercentage: '123%',
            priceChangePercentage: '456%',
            liquidity: 10000.1,
          },
          {
            id: '123',
            name: 'name',
            poolPercentage: '123%',
            priceChangePercentage: '456%',
            liquidity: 10000.1,
          },
        ]}
      />
    </PageContainer>
  );
};
