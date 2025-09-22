# Data Structures

This document describes the MongoDB collections used by the application and their typical document structures. It is derived from `app/connections.yaml` and usages across pages/requests. Update this file whenever schemas evolve.

## Collections Overview

- companies (connectionId: `companies`)
- contacts (connectionId: `contacts`)
- user_contacts (connectionId: `user_contacts`)
- log-usage (connectionId: `log-usage`)
- log-changes (audit trail collection referenced by changeLog)

Notes
- All writable connections use a `changeLog` configuration to write audit records into `log-changes` with the acting user.
- Documents commonly include a `created` field and may include an `updated` field as well.

---

## companies
Connection: `companies` → collection: `companies`

Purpose
- Store company profiles used across the app.

Fields
```yaml
  _id: UUID string
  name: string
  description: string | null
  color: string (hex or CSS color)
  created:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
  updated:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
```

---

## contacts
Connection: `contacts` → collection: `contacts`

Purpose
- Store contact records (people) optionally associated to companies.

Fields
```yaml
  _id: UUID string
  profile:
    first_name: string
    last_name: string
    email: string | null
    work_phone: string | null
    mobile_phone: string | null
  company_id: UUID string | null (reference to `companies._id`)
  created:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
  updated:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
```

---

## user_contacts
Connection: `user_contacts` → collection: `user_contacts`

Purpose
- Map users to contacts (ownership, assignments, visibility).

Fields
```yaml
  _id: UUID string
  user_id: UUID string (application user)
  contact_id: UUID string (reference to `contacts._id`)
  role: string | null (e.g., owner, viewer)
  created:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
  updated:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
```

---

## log-usage
Connection: `log-usage` → collection: `log-usage`

Purpose
- Usage analytics and general telemetry.

Fields
```yaml
  _id: ObjectId
  timestamp: ISODate
  user:
    id: UUID string
    name: string
  route: string | null
  action: string | null
  meta: object (free-form)
  created:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
  updated:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
```

---

## log-changes (Audit Trail)
Referenced by `changeLog` in multiple connections.

Purpose
- Track mutations on collections for auditing.

Fields
```yaml
  _id: ObjectId
  collection: string (e.g., companies, contacts)
  document_id: string | ObjectId
  operation: string (insert|update|delete)
  timestamp: ISODate
  user:
    id: UUID string
    name: string
  changes: object | array (field-level diffs; shape may vary)
  created:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
  updated:
    timestamp: ISODate
    user:
      id: UUID string
      name: string
```

---

## Field Conventions

- _id: UUID string (for main collections) | ObjectId (for log collections)
- created:
    timestamp: ISODate (creation time)
    user:
      id: string | ObjectId
      name: string
- updated:
    timestamp: ISODate (update time)
    user:
      id: string | ObjectId
      name: string

## Relationships

- contacts.company_id → companies._id (many contacts to one company)
- user_contacts.contact_id → contacts._id (many-to-one)
