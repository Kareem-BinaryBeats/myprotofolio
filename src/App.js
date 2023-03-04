import logo from './logo.svg';

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Nav from './components/navbar';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Intro from './components/me';
import Skills from './components/skills';


function App() {
  return (
    <ChakraProvider >
      <Nav />
      <Intro />
      <Skills />
      <Footer />
  </ChakraProvider>
  );
}

export default App;
