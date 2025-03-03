import { Entity } from '@/core/entities/entity'

export interface EventProps {
  name: string
  description: string
  price: number
}

export class Event extends Entity<EventProps> {
  static create(props: EventProps, id?: string) {
    const event = new Event(props, id)

    return event
  }
}
