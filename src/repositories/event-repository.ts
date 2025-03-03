import { Event } from '@/entities/event'

export abstract class EventRepository {
  abstract findById(id: string): Promise<Event | null>
  abstract create(event: Event): Promise<void>
}
