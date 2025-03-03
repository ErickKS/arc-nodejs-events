import { Event } from '@/entities/event'
import { EventRepository } from '../event-repository'
import { PrismaEventMapper } from './mappers/prisma-event-mapper'
import { PrismaService } from './prisma-service'

export class PrismaEventRepository implements EventRepository {
  constructor(private prisma: PrismaService) {}

  async create(event: Event): Promise<void> {
    const data = PrismaEventMapper.toPrisma(event)

    await this.prisma.event.create({
      data,
    })
  }

  async findById(id: string): Promise<Event | null> {
    const event = await this.prisma.event.findUnique({
      where: {
        id,
      },
    })

    if (!event) return null

    return PrismaEventMapper.toDomain(event)
  }
}
