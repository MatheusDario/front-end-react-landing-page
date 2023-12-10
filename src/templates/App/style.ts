import styled, { css } from 'styled-components';

interface Props {
  background?: string;
}

export const Container = styled.div<Props>`
  ${({ background }) => css`
    background: ${background};
  `}
`;
