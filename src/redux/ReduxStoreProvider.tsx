"use client";

import { AppStore, makeStore } from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function ReduxStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize useRef with null as the default value
  const storeRef = useRef<{
    store: AppStore;
    persistor: ReturnType<typeof persistStore>;
  } | null>(null);

  // Create store and persistor only if not already initialized
  if (!storeRef.current) {
    const store = makeStore(); // Create Redux store
    const persistor = persistStore(store); // Create persistor
    storeRef.current = { store, persistor }; // Set the ref's current value
  }

  return (
    <Provider store={storeRef.current.store}>
      <PersistGate loading={null} persistor={storeRef.current.persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
