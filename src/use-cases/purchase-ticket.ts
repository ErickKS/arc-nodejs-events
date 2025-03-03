import { Ticket } from '@/entities/ticket'
import { EventRepository } from '@/repositories/event-repository'
import { TicketRepository } from '@/repositories/ticket-repository'

type PurchaseTicketUseCaseRequest = {
  eventId: string
  email: string
}

type PurchaseTicketUseCaseResponse = {
  eventId: string
  ticketId: string
}

export class PurchaseTicketUseCase {
  constructor(
    readonly eventRepository: EventRepository,
    readonly ticketRepository: TicketRepository
  ) {}

  async execute({
    eventId,
    email,
  }: PurchaseTicketUseCaseRequest): Promise<PurchaseTicketUseCaseResponse> {
    const eventData = await this.eventRepository.findById(eventId)

    if (!eventData) {
      throw new Error('Event not found')
    }

    const ticket = Ticket.create({ eventId, email })

    await this.ticketRepository.save(ticket)

    return {
      eventId: eventId,
      ticketId: ticket.id,
    }
  }
}
