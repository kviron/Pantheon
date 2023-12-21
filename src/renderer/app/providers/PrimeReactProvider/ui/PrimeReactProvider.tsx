import { FC } from 'react';
import { PrimeReactProvider as PrimeReactProviderBase } from 'primereact/api';

export interface PrimeReactProviderProps {
  readonly children: any;
}

export const PrimeReactProvider: FC<PrimeReactProviderProps> = (props) => {
  const { children } = props;

  return <PrimeReactProviderBase>{children}</PrimeReactProviderBase>;
};
