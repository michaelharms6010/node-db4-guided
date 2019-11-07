# Requirements

A client has hired you to track zoo animals.
For each individual animal, you must track that their name, species, and all zoos in which they have resided (including zoo name and address).

Determine the database tables necessary to track this information. Label any relationships between table.

#### Zoos:

-name
-address

### Animal:

-name
-species
-list of zoos where they have been

### A good data model

-captures ALL the info the system needs
-captures ONLY the info the system needs
-reflects reality (from the POV of the system)
-is flexible, can evolve with the system, the client, the company, the product
-guarantees data integrity
-is driven by how we access data

### components

-entities (nouns: zoo, animal species)
- properties --> columns, fields
- relationships--> foreign keys

### workflow

- identify entities
-identify relationships
-identify properties

### relationships

- 1-1
- 1-many
- many-many

_one species has many animals_

_each zoo has many animals, animals can live in many zoos_



### Mantras

- Every table must have a ==Primary Key== 
- Work on two or three entities at a time
- one to many relationships are modelled using a **FOREIGN KEY** 
- The Foreign Key always goes in the **many** side
- The Foreign Key Column must be the same type as the Primary Key of the referenced table
- ***many to many*** are modelled using a **third table**
- The third table can include other columns