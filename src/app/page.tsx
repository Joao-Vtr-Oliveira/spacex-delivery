'use client'

import { MarsContext } from '@/contexts/marsContext';
import { EarthContext } from '@/contexts/earthContext'
import { Card, CardHeader } from '@chakra-ui/react'
import { useContext } from 'react'

export default function Home() {
  
  const earthContext = useContext(EarthContext);
  const marsContext = useContext(MarsContext);
  console.log(earthContext?.locations);
  console.log(marsContext?.locations);

  return (
    <Card>
      <CardHeader>
        Hello world!
      </CardHeader>
    </Card>
  )
}
