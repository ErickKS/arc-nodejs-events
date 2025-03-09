_**Note:** This project focuses on practicing design patterns, Clean Architecture, DDD, and SOLID in a simple. 🚀_

# Events

## Overview

This project is a simple event management system.

## Requirements

- [x] Create an event with a name, description, and price
- [x] Ensure an event cannot be created with a negative price
- [x] Purchase a ticket for an event
- [x] Prevent ticket purchase for non-existing events

## Architecture & Design Patterns

This project follows **Clean Architecture** by separating concerns into different layers:

- **Entities**: Represent core business logic and are independent of frameworks or external dependencies.
- **Repositories**: Abstract data persistence using the **Repository Pattern** to provide a consistent interface for database interactions.
- **Use Cases**: Encapsulate business rules and orchestrate interactions between repositories and entities.
- **Mappers**: Transform data between database models and domain entities.
- **Factories**: Encapsulate object creation logic for easier instantiation and testing.

### Applied Design Patterns:

- **Adapter Pattern**: Implemented in the repositories (e.g, `PrismaEventRepository`, `InMemoryEventRepository`), which adapt different persistence strategies (database and in-memory storage) to a common interface (e.g, `EventRepository`). This ensures that the domain layer remains independent of the data storage mechanism.

### Applied SOLID Principles:

- **Single Responsibility Principle (SRP)**: Each class has a single responsibility (e.g., `Event` handles only event properties, `EventRepository` abstracts persistence).
- **Open/Closed Principle (OCP)**: New repository implementations (e.g., Prisma, in-memory) can be added without modifying existing logic.
- **Liskov Substitution Principle (LSP)**: The repository interface (e.g., `EventRepository`) allows different implementations without breaking functionality.
- **Interface Segregation Principle (ISP)**: Repositories define clear contracts (e.g., `EventRepository`), preventing unnecessary dependencies.
- **Dependency Inversion Principle (DIP)**: Use cases depend on abstractions (e.g., `EventRepository`), not concrete implementations.