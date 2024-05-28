'use client';

import { marsLocationType } from '@/types/marsLocationType';
import { marsDeliveryLocations } from '@/utils/marsDeliveryLocations';
import React, { ReactNode, useState } from "react";

type MarsContextType = {
  locations: marsLocationType[];
  addLocation: (code: string) => void;
  deleteLocation: (index: number) => void;
};

type MarsContextProviderProps = {
  children: ReactNode;
};

export const MarsContext = React.createContext<MarsContextType | undefined>(undefined);

export function MarsProvider({ children }: MarsContextProviderProps) {
  const [locations, setLocations] = useState<marsLocationType[]>(marsDeliveryLocations);

  function addLocation(code: string) {
    const newLocation: marsLocationType = {id: locations.length, code}
    setLocations([...locations, newLocation]);
  }

  function deleteLocation(index: number) {
    setLocations(locations.filter((_, i) => i !== index));
  }

  return (
    <MarsContext.Provider
      value={{
        locations,
        addLocation,
        deleteLocation,
      }}
    >
      {children}
    </MarsContext.Provider>
  );
}
