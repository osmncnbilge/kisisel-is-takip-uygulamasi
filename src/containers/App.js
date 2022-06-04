import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar";
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
      <Navbar />
      <CreateNewJob />
    </>
  );
}

export default App;
