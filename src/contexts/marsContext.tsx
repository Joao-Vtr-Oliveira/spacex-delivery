'use client';

import { marsLocationType } from '@/types/marsLocationType';
import { marsDeliveryLocations } from '@/utils/marsDeliveryLocations';
import React, { ReactNode, useState } from "react";

type MarsContextType = {
  locations: marsLocationType[];
  addLocation: (location: Omit<marsLocationType, 'id'>) => void;
  deleteLocation: (index: number) => void;
  updateLocation: (id: number, udpatedLocation: Omit<marsLocationType, 'id'>) => void;
};

type MarsContextProviderProps = {
  children: ReactNode;
};

export const MarsContext = React.createContext<MarsContextType | undefined>(undefined);

export function MarsProvider({ children }: MarsContextProviderProps) {
  const [locations, setLocations] = useState<marsLocationType[]>(marsDeliveryLocations);

  function addLocation(location: Omit<marsLocationType, 'id'>) {
    const newLocation: marsLocationType = {id: Date.now(), ...location}
    setLocations([...locations, newLocation]);
  }

  function deleteLocation(index: number) {
    setLocations(locations.filter((_, i) => i !== index));
  }

  function updateLocation(id: number, updatedLocation: Omit<marsLocationType, 'id'>) {
    setLocations(locations.map(location => 
      location.id === id ? { ...location, ...updatedLocation } : location
    ));
  }

  return (
    <MarsContext.Provider
      value={{
        locations,
        addLocation,
        deleteLocation,
        updateLocation,
      }}
    >
      {children}
    </MarsContext.Provider>
  );
}
