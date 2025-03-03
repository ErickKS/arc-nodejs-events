import { Entity } from '@/core/entities/entity'

export interface EventProps {
  name: string
  description: string
  price: number
}

export class Event extends Entity<EventProps> {
  get name() {
    return this.props.name
  }

  get description() {
    return this.props.description
  }

  get price() {
    return this.props.price
  }

  static create(props: EventProps, id?: string) {
    if (props.price < 0) {
      throw new Error('Event price must be greater than zero.')
    }

    const event = new Event(props, id)

    return event
  }
}
