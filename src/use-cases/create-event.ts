import { Event } from '@/entities/event'
import { EventRepository } from '@/repositories/event-repository'

type CreateEventUseCaseRequest = {
  name: string
  description: string
  price: number
}

type CreateEventUseCaseResponse = {
  event: Event
}

export class CreateEventUseCase {
  constructor(readonly eventRepository: EventRepository) {}

  async execute({
    name,
    description,
    price,
  }: CreateEventUseCaseRequest): Promise<CreateEventUseCaseResponse> {
    const event = Event.create({ name, description, price })

    await this.eventRepository.create(event)

    return {
      event,
    }
  }
}
