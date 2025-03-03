import { PurchaseTicketUseCase } from './purchase-ticket'

import { InMemoryEventRepository } from '@/repositories/in-memory/in-memory-event-repository'
import { InMemoryTicketRepository } from '@/repositories/in-memory/in-memory-ticket-repository'

import { makeEvent } from 'test/factories/make-event'
import { CreateEventUseCase } from './create-event'

let inMemoryEventRepository: InMemoryEventRepository

let sut: CreateEventUseCase

describe('Create event', () => {
  beforeEach(() => {
    inMemoryEventRepository = new InMemoryEventRepository()

    sut = new CreateEventUseCase(inMemoryEventRepository)
  })

  it('should be able to create an event', async () => {
    const result = await sut.execute({
      name: 'Teste Event',
      description: 'Test description',
      price: 200,
    })

    expect(result).toBeTruthy()
    expect(inMemoryEventRepository.events[0].name).toEqual(result.event.name)
  })

  it('should not be able to create an event with negative price', async () => {
    await expect(() =>
      sut.execute({
        name: 'Teste Event',
        description: 'Test description',
        price: -200,
      })
    ).rejects.toThrow('Event price must be greater than zero')
  })
})
