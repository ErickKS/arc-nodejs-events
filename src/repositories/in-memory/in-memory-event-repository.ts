import { Event } from '@/entities/event'
import { EventRepository } from '../event-repository'

export class InMemoryEventRepository implements EventRepository {
  public events: Event[] = []

  async findById(id: string): Promise<Event | null> {
    const event = this.events.find(item => item.id === id)

    if (!event) return null

    return event
  }

  async create(event: Event): Promise<void> {
    this.events.push(event)
  }
}
