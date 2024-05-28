'use client';

import { MarsContext } from '@/contexts/marsContext';
import { Button, Card, CardHeader } from '@chakra-ui/react';
import { useContext } from 'react';

export default function Home() {
  const marsContext = useContext(MarsContext);

  if (!marsContext) {
    throw new Error('useMarsContext must be used within a MarsProvider');
  }

  const { locations, addLocation, deleteLocation } = marsContext;

  console.log(locations); // Deve logar as localizações de Marte

  return (
    <Card>
      <CardHeader>
        <h1>Hello Mars!</h1>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
              ID: {location.id}, Code: {location.code}
              <Button size={'sm'} onClick={() => deleteLocation(index)}>Delete</Button>
            </li>
          ))}
        </ul>
        <Button size={'sm'} onClick={() => addLocation('NEW_CODE')}>
          Add New Location
        </Button>
      </CardHeader>
    </Card>
  );
}
