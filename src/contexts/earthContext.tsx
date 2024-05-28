'use client';

import { earthLocationType } from '@/types/earthLocationType';
import { earthDeliveryLocations } from '@/utils/earthDeliveryLocations';
import React, { ReactNode, useState } from "react";

type EarthContextType = {
  locations: earthLocationType[];
  addLocation: (location: Omit<earthLocationType, 'id'>) => void;
  deleteLocation: (index: number) => void;
};

type EarthContextProviderProps = {
  children: ReactNode;
};

export const EarthContext = React.createContext<EarthContextType | undefined>(undefined);

export function EarthProvider({ children }: EarthContextProviderProps) {
  const [locations, setLocations] = useState<earthLocationType[]>(earthDeliveryLocations);

  function addLocation(location: Omit<earthLocationType, 'id'>) {
    const newLocation: earthLocationType = {id: locations.length, ...location}
    setLocations([...locations, newLocation]);
  }

  function deleteLocation(index: number) {
    setLocations(locations.filter((_, i) => i !== index));
  }

  return (
    <EarthContext.Provider
      value={{
        locations,
        addLocation,
        deleteLocation,
      }}
    >
      {children}
    </EarthContext.Provider>
  );
}
