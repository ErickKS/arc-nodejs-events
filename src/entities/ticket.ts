import { Entity } from '@/core/entities/entity'

export interface TicketProps {
  eventId: string
  email: string
}

export class Ticket extends Entity<TicketProps> {
  get eventId() {
    return this.props.eventId
  }

  get email() {
    return this.props.email
  }

  static create(props: TicketProps, id?: string) {
    const ticket = new Ticket(props, id)

    return ticket
  }
}
