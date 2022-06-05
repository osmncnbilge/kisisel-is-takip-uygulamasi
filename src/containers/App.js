import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import CreateNewJob from "./CreateNewJob/CreateNewJob";
import JobList from "./JobList/JobList";
import { Container } from "@mui/system";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  urgentColor: "#f23577",
  regularColor: "#f29d35",
  trivalColor: "#2e85ff",
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container sx={{ padding: "50px 10px" }}>
          <CreateNewJob />
          <JobList />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
