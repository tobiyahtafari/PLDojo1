import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Ultron } from "@thirdweb-dev/chains";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import theme from "../components/theme";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={Ultron}
      clientId="bb3486ea1cb42ecb2fdc60af7676aa94">
      <ChakraProvider theme={theme}>
       <Navbar />
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
