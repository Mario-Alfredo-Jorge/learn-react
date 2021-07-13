import styled from "styled-components";
import { GlobalStyles } from "./styles/global";

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  color: #0d2636;
`;

export function App() {
  return (
    <div className="App">
      <WelcomeMessage>Hello dtmoney</WelcomeMessage>
      <GlobalStyles />
    </div>
  );
}
