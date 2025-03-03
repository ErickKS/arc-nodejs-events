import { faker } from '@faker-js/faker'

import { Event, EventProps } from '@/entities/event'

export function makeEvent(override: Partial<EventProps> = {}, id?: string) {
  const event = Event.create(
    {
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
      price: faker.number.int(),
      ...override,
    },
    id
  )

  return event
}
