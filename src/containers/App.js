import { createGlobalStyle } from "styled-components";
import CreateNewJob from "./CreateNewJob";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CreateNewJob />
    </>
  );
}

export default App;
