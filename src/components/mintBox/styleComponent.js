import styled from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledRoundButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #ed6ea0,
    #ec8c69,
    #f7186a,
    #fbb03b
  );
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;
