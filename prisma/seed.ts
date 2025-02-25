import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.deleteMany()

  await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@email.com',
      password: '123456',
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
