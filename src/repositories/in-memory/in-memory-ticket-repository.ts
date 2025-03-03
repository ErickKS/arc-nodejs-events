import { Ticket } from '@/entities/ticket'
import { TicketRepository } from '../ticket-repository'

export class InMemoryTicketRepository implements TicketRepository {
  public tickets: Ticket[] = []

  async findById(id: string): Promise<Ticket | null> {
    const ticket = this.tickets.find(item => item.id === id)

    if (!ticket) return null

    return ticket
  }

  async save(ticket: Ticket): Promise<void> {
    this.tickets.push(ticket)
  }
}
