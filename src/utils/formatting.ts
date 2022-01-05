
import { format } from 'date-fns'

export function datetime(d?: Date): string {
  if (!d){
    return ''
  }

  return format(d, 'HH:mm')
}