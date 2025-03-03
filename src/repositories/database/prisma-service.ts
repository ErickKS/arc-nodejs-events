import { PrismaClient } from '@prisma/client'

export class PrismaService extends PrismaClient {
  prisma: PrismaClient

  constructor() {
    super()
    this.prisma = new PrismaClient({
      log: ['warn', 'error'],
    })
  }

  async close() {
    return this.prisma.$disconnect()
  }
}
