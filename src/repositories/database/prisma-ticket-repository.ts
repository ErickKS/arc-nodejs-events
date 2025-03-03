import { Ticket } from '@/entities/ticket'
import { TicketRepository } from '../ticket-repository'
import { PrismaTicketMapper } from './mappers/prisma-ticket-mapper'
import { PrismaService } from './prisma-service'

export class PrismaTicketRepository implements TicketRepository {
  constructor(private prisma: PrismaService) {}

  async save(ticket: Ticket): Promise<void> {
    const data = PrismaTicketMapper.toPrisma(ticket)

    await this.prisma.ticket.create({
      data,
    })
  }

  async findById(id: string): Promise<Ticket | null> {
    throw new Error('Method not implemented.')
  }
}
