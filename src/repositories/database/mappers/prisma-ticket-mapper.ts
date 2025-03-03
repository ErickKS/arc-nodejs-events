import { Ticket } from '@/entities/ticket'
import { Prisma, Ticket as PrismaTicket } from '@prisma/client'

export class PrismaTicketMapper {
  private constructor() {}

  static toDomain(raw: PrismaTicket): Ticket {
    return Ticket.create({ eventId: raw.eventId, email: raw.email })
  }

  static toPrisma(ticket: Ticket): Prisma.TicketUncheckedCreateInput {
    return {
      id: ticket.id,
      eventId: ticket.eventId,
      email: ticket.email,
    }
  }
}
