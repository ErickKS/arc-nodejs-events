import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  await prisma.event.deleteMany()
  await prisma.ticket.deleteMany()

  await prisma.event.create({
    data: {
      id: 'eaabc75c-a825-4f26-b666-9040427141a1',
      name: 'Software Arch',
      description: 'Event for the best developers',
      price: 100,
    },
  })

  await prisma.$disconnect()
}

seed()
  .then(() => {
    console.log('Database seeded! ✅')
  })
  .catch(e => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
