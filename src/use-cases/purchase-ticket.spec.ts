import { PurchaseTicketUseCase } from './purchase-ticket'

import { InMemoryEventRepository } from '@/repositories/in-memory/in-memory-event-repository'
import { InMemoryTicketRepository } from '@/repositories/in-memory/in-memory-ticket-repository'

import { makeEvent } from 'test/factories/make-event'

let inMemoryEventRepository: InMemoryEventRepository
let inMemoryTicketRepository: InMemoryTicketRepository

let sut: PurchaseTicketUseCase

describe('Purchase ticket', () => {
  beforeEach(() => {
    inMemoryEventRepository = new InMemoryEventRepository()
    inMemoryTicketRepository = new InMemoryTicketRepository()

    sut = new PurchaseTicketUseCase(
      inMemoryEventRepository,
      inMemoryTicketRepository
    )
  })

  it('should be able to purchase a ticket for an event', async () => {
    const newEvent = makeEvent()
    await inMemoryEventRepository.create(newEvent)

    const result = await sut.execute({
      eventId: newEvent.id,
      email: 'john.doe@email.com',
    })

    expect(result.ticketId).toBeTruthy()
  })

  it('should not be able to purchase a ticket for an event that does not exist', async () => {
    await expect(() =>
      sut.execute({
        eventId: 'non-existing-event-id',
        email: 'john.doe@email.com',
      })
    ).rejects.toThrow('Event not found')
  })
})
