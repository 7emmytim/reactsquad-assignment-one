import { AppStore, makeStore } from "@/redux";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { Provider } from "react-redux";
import { Persistor, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  const storeRef = useRef<AppStore>(undefined);
  const persistorRef = useRef<Persistor>(undefined);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // Create persistor based on that same store
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current!}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
