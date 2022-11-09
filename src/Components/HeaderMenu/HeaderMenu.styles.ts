import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { FixedBar } from '../FixedBar/FixedBar';

export const StyledFixedBar = styled(FixedBar)`
  display: flex;
  justify-content: space-between;
  height: 5rem;
`;

export const Logo = styled(NavLink)`
  text-transform: uppercase;
  justify-content: center;
  margin: 0;
  ${({ theme }) => theme.typographies.h2};

  ${({ theme }) => `background: linear-gradient(135deg,
     ${theme.colors.main.effect.dark},
     ${theme.colors.main.effect.light},
     ${theme.colors.main.detail.darker},
     ${theme.colors.main.detail.normal});`}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span.larger {
    font-size: 2.4rem;
  }
`;

export const GeneralInfoContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.span`
  ${({ theme }) => theme.typographies.subtitle3};
  margin: 0;
`;

export const HighlightedInfo = styled.span`
  ${({ theme }) => theme.typographies.h4};
  margin: 0;
`;
