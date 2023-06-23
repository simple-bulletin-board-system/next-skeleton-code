import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { wrapper } from "@/config/store";
import withTheme from "../../theme";

import GlobalStyle from "@/styles/global-style";

export default function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return withTheme(
    <Provider store={store}>
      <GlobalStyle />
      <Component {...props.pageProps} />
    </Provider>
  );
}
