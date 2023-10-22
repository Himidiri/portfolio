import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes.js'
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        Portfolio
      </Body>
  </ThemeProvider>
  );
}

export default App;
