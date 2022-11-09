import styled from 'styled-components';

export const StyledCryptoTable = styled.table`
  caption-side: top;
  border: none;
  border-spacing: 0;
  caption-side: bottom;

  td,
  th {
    border: none;
  }

  td {
    padding: 1rem 6rem;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.colors.main.primary.lighter};
    }
    :hover {
      background-color: ${({ theme }) => theme.colors.main.primary.normal};
    }
  }
`;
