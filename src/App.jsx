import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  z-index: 1;
  width: 1080px;
  min-height: 100vh;
  background-color: white;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;