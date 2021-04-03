import styled from 'styled-components';

export const HeroContainer = styled.div`
  /* position: relative; */
  font-size: 6vw;
  line-height: 1.13;
  -webkit-text-stroke: 1px #000;
  -webkit-text-fill-color: transparent;

  & h2 {
    font-weight: 300;
    transform: translateY(100vh);
  }
`;

export const HeroClipContainer = styled(HeroContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-text-fill-color: #000;
`;

export const TitleLine = styled.span`
  margin-top: 0.12em;
  height: 0.5rem;
  background: #000;
  transform: scaleX(0);
  width: 0;
  display: inline-block;

  @media only screen and (max-width: 599px) {
    height: .22rem;
  }
`;

export const TitleText = styled.span`
  white-space: nowrap;
  display: inline-block;

  & img {
    vertical-align: bottom;
  }
`;

export const TitleRow = styled.span`
  &:nth-child(odd) ${TitleLine} {
    transform-origin: 0 50%;
  }

  &:nth-child(even) ${TitleLine} {
    transform-origin: 100% 50%;
  }
`;
