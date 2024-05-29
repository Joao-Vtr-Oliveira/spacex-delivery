import { earthLocationType } from '@/types/earthLocationType';
import { marsLocationType } from '@/types/marsLocationType';

export const checkCode = (locations: marsLocationType[], code: string) => {
  const place = locations.filter((item) => item.code === code) as marsLocationType[];
  if(place.length > 0) return true;
  return false;
};

export const checkZipcode = (locations: earthLocationType[], zipCode: string) => {
  const place = locations.filter((item) => item.zipCode === zipCode) as earthLocationType[];
  if(place.length > 0) return true;
  return false;
}