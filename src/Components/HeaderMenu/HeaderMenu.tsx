import { createElement } from 'react';
import { IconType } from 'react-icons';
import { IoIosPricetag } from 'react-icons/io';
import { RiMoneyDollarCircleFill, RiAlertFill } from 'react-icons/ri';

import { TestProps } from '../../Config/Tests/Test.types';
import {
  GeneralInfoContainer,
  HighlightedInfo,
  Info,
  InfoSection,
  InfoTitle,
  Logo,
  StyledFixedBar,
} from './HeaderMenu.styles';
import { HeaderMenuProps, DefaultHeaderMenuProps } from './HeaderMenu.types';

export const headerMenuDefaults: Required<DefaultHeaderMenuProps> &
  Required<TestProps> = {
  testID: 'HeaderMenu',
};

export const HeaderMenu: React.FC<HeaderMenuProps> = (props): JSX.Element => {
  const { testID = headerMenuDefaults.testID, ...others } = props;

  const renderInfoSection = (icon: IconType, title: string, info: string) => (
    <InfoSection>
      {createElement(icon)}
      <Info>
        <InfoTitle>{title}</InfoTitle>
        <HighlightedInfo>{info}</HighlightedInfo>
      </Info>
    </InfoSection>
  );

  return (
    <StyledFixedBar data-testid={testID} {...others}>
      <Logo to="/">
        <span>
          <span className="larger">T</span>
          op
        </span>
        <span>
          <span className="larger">C</span>
          rypto
        </span>
      </Logo>

      <GeneralInfoContainer>
        {renderInfoSection(
          RiMoneyDollarCircleFill,
          'Total Balance',
          '$64.7k / 28.2.ETH'
        )}
        {renderInfoSection(RiAlertFill, 'Risk', 'Moderate')}
        {renderInfoSection(IoIosPricetag, 'Gas fees', 'Normal')}
      </GeneralInfoContainer>
    </StyledFixedBar>
  );
};
