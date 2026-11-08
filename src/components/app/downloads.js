import { createContext, useContext } from 'react';

export const DownloadsContext = createContext({ platforms: [], primary: null });

/** The product's platforms and the one picked for this visitor, from the nearest <AppPage>. */
export const useDownloads = () => useContext(DownloadsContext);
