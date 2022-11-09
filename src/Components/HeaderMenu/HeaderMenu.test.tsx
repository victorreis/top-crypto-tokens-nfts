import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { HeaderMenu, headerMenuDefaults } from './HeaderMenu';
import { RequiredHeaderMenuProps, HeaderMenuProps } from './HeaderMenu.types';

describe('headerMenu component tests', () => {
  const requiredProps: RequiredHeaderMenuProps = {};

  const setup = (props?: HeaderMenuProps) => {
    const renderRTR = () =>
      renderRTRCreator<HeaderMenuProps>(HeaderMenu, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<HeaderMenuProps>(HeaderMenu, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(headerMenuDefaults.testID);

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
