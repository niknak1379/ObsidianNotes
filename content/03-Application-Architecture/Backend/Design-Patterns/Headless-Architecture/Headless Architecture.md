---
creation date: 2024-07-15 12:23
modification date: Monday 15th July 2024 12:23:29
---
#Backend #Design-Patterns
<< ---------------------------------------------------------------- >>

# Headless Architecture

<< ---------------------------------------------------------------- >>
it is Complete separation of the Frontend Experience from the Backend business architecture.
basically you use the same APIs on the backend for all different kinds of #FrontEnd systems.
Apparently useful for E-commerce systems.

## Layers for this Architecture:
### Experience Layer
user interface, web apps, native apps, etc...
### Application Layer
Content, Data, Functionality
Basically, APIs, ur [[Microservice|micro-services]], etc...

### Communication Layer
optimizing and translation
It Orchestrates APIs, API orchestration frameworks, [[graphQL]], [[Event Driven Architecture(EDA)]] providers, ADNs, [[Backend-For-Frontend(BFF)]]s

### Business Administration Layer

