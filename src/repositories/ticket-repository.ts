import { Ticket } from '@/entities/ticket'

export abstract class TicketRepository {
  abstract findById(id: string): Promise<Ticket | null>
  abstract save(ticket: Ticket): Promise<void>
}
