import { Event } from '@/entities/event'
import { Prisma, Event as PrismaEvent } from '@prisma/client'

export class PrismaEventMapper {
  private constructor() {}

  static toDomain(raw: PrismaEvent): Event {
    return Event.create({
      name: raw.name,
      description: raw.description,
      price: Number(raw.price),
    })
  }

  static toPrisma(event: Event): Prisma.EventUncheckedCreateInput {
    return {
      id: event.id,
      name: event.name,
      description: event.description,
      price: new Prisma.Decimal(event.price),
    }
  }
}
