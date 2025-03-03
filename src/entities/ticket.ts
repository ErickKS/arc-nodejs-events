import { Entity } from '@/core/entities/entity'

export interface TicketProps {
  eventId: string
  email: string
}

export class Ticket extends Entity<TicketProps> {
  static create(props: TicketProps, id?: string) {
    const ticket = new Ticket(props, id)

    return ticket
  }
}
