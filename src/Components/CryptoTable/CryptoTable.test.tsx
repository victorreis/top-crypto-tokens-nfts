import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { CryptoType } from '../../Models/Crypto.types';
import { CryptoTable, cryptoTableDefaults } from './CryptoTable';
import {
  RequiredCryptoTableProps,
  CryptoTableProps,
} from './CryptoTable.types';

describe('cryptoTable component tests', () => {
  const cryptos: CryptoType[] = [
    {
      id: '',
      name: '',
      poolPercentage: '',
      priceChangePercentage: '',
      liquidity: 10000.1,
    },
  ];

  const requiredProps: RequiredCryptoTableProps = {
    cryptos,
  };

  const setup = (props?: CryptoTableProps) => {
    const renderRTR = () =>
      renderRTRCreator<CryptoTableProps>(CryptoTable, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<CryptoTableProps>(CryptoTable, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(cryptoTableDefaults.testID);

      expect(testInstance).toBeTruthy();
    });
  });

  describe('style tests', () => {});

  describe('snapshot tests', () => {
    it(`should render correctly`, () => {
      expect.assertions(1);
      const generatedJson = setup().renderRTR().toJSON();

      expect(generatedJson).toMatchSnapshot();
    });
  });
});
