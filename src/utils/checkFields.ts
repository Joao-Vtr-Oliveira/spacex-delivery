import { earthLocationType } from '@/types/earthLocationType';
import { marsLocationType } from '@/types/marsLocationType';

type infosType = 'name' | 'addressLine' | 'country' | 'state' | 'city' | 'zipCode';

const infos: infosType[]  = ['name', 'addressLine', 'country', 'state', 'city', 'zipCode']


export const checkEarthFields = (location: earthLocationType) => {
  for(let i = 0; i < infos.length; i++) {
    if(!location[infos[i]]) return false
  }
  return true;
}

export const checkMarsFields = (location: marsLocationType) => {
  if(!location.code || !location.name) return false;
  return true;
}