# Lowdefy Context

## What is Lowdefy?

Lowdefy is an open-source low-code framework that enables developers to build web applications using YAML configuration files. It provides a declarative approach to application development, allowing rapid prototyping and development with minimal coding.

## Core Concepts

### Blocks

Blocks are the UI components that make up your application's interface. They include:

- **Layout Blocks**: `Box`, `Content`, `Layout`, `PageHeaderMenu`
- **Form Blocks**: `TextInput`, `TextArea`, `Selector`, `Button`, `ColorSelector`
- **Display Blocks**: `Title`, `Html`, `Avatar`, `Descriptions`, `AgGridAlpine`
- **Container Blocks**: `Card`, `Modal`, `Alert`, `Divider`
- **Navigation Blocks**: `MenuLink`, `MenuGroup`

### Actions

Actions are operations that can be triggered by events. Common actions include:

- **Navigation**: `Link`, `SetState`
- **Data Operations**: `Request`, `Validate`
- **UI Interactions**: `CallMethod`, `Reset`
- **Authentication**: `Logout`
- **Control Flow**: Conditional logic with `_if`, `_switch`

### Connections

Connections define how your application interacts with external services:

- **MongoDB Collections**: `MongoDBCollection`, `MongoDBAggregation`, `MongoDBInsertOne`
- **Custom Connections**: `HelloWorldAPI` (custom plugin)
- **Configuration**: Database URIs, authentication, and connection properties

### Requests

Requests are specific operations performed on connections:

- **CRUD Operations**: `get_companies`, `insert_company`, `update_company`
- **Aggregations**: Complex data queries with MongoDB aggregation pipelines
- **Custom Logic**: Business logic encapsulated in request definitions

### Operators

Operators are functions that transform data:

- **Data Access**: `_user`, `_state`, `_request`, `_payload`
- **Logic**: `_if`, `_eq`, `_and`, `_or`
- **String Operations**: `_string.concat`, `_string.substring`
- **Array Operations**: `_array.map`, `_array.filter`
- **Date/Time**: `_date.format`, `_date.now`

## Configuration Structure

### Application Level

```yaml
lowdefy: 0.0.0-experimental-20250915134255
version: 0.0.0
name: lowdefy-vibe-code-starter

config:
  homePageId: router

auth:
  providers:
    - id: email
      type: EmailProvider
  pages:
    protected: true
    public:
      - login
      - router

global:
  _ref: global.yaml

connections:
  _ref: connections.yaml

pages:
  _ref: pages.yaml
```

### Page Level

```yaml
id: companies
type: PageHeaderMenu
properties:
  title: Companies
layout:
  contentJustify: center
requests:
  - _ref: requests/get_companies.yaml
events:
  onMount:
    - id: get_companies
      type: Request
      params: get_companies
blocks:
  - id: table
    type: AgGridAlpine
    properties:
      rowData:
        _request: get_companies
```

## Common Patterns

### CRUD Operations

```yaml
# List Page Pattern
- id: table
  type: AgGridAlpine
  properties:
    rowData: _request: get_items
  events:
    onRowClick:
      - id: navigate
        type: Link
        params:
          pageId: items-edit
          urlQuery:
            id: _event: row._id

# Create Modal Pattern
- id: create_modal
  type: Modal
  events:
    onOk:
      - id: validate
        type: Validate
      - id: create
        type: Request
        params: insert_item
      - id: refresh
        type: Request
        params: get_items
```

### Form Handling

```yaml
# Form Component
- id: item_form
  type: Box
  layout:
    contentGutter: 8
  blocks:
    - id: item.name
      type: TextInput
      required: true
      properties:
        title: Name
    - id: item.description
      type: TextArea
      properties:
        title: Description

# Form Submission
events:
  onClick:
    - id: validate
      type: Validate
    - id: submit
      type: Request
      params: update_item
    - id: reset
      type: Reset
    - id: navigate
      type: Link
      params: items
```

### State Management

```yaml
# Global State
global:
  colors:
    primary: '#4484F1'

# Local State
events:
  onMount:
    - id: set_initial
      type: SetState
      params:
        selected_item: _request: get_item

# State Access
properties:
  value: _state: selected_item.name
```

## Layout and Styling

### Layout System

```yaml
layout:
  contentGutter: 16
  contentJustify: center
  contentAlign: middle
  span: 12 # Grid system
  flex: 1 0 auto # Flexbox

areas:
  header:
    blocks: [...]
  content:
    blocks: [...]
  footer:
    blocks: [...]
```

### Styling

```yaml
style:
  maxWidth: 800
  marginTop: 64px
  '& > *':
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'

properties:
  theme: light # light/dark theme
  size: large # small/medium/large
  type: primary # primary/default/text/link
```

## Event Handling

### Event Types

- **Lifecycle Events**: `onMount`, `onMountAsync`, `onUnmount`
- **User Interactions**: `onClick`, `onChange`, `onSubmit`, `onRowClick`
- **Form Events**: `onOk`, `onCancel`, `onPressEnter`
- **Navigation Events**: `onBeforeUnload`

### Event Actions

```yaml
events:
  onClick:
    - id: validate_form
      type: Validate
    - id: submit_data
      type: Request
      params: update_item
    - id: show_success
      type: CallMethod
      params:
        blockId: success_message
        method: setVisible
        args: [true]
```

## Data Flow

### Request-Response Pattern

```yaml
requests:
  - _ref: requests/get_data.yaml

blocks:
  - id: data_table
    type: AgGridAlpine
    properties:
      rowData: _request: get_data
      loading: _request: get_data.loading
      error: _request: get_data.error
```

### Payload Handling

```yaml
payload:
  item:
    _state: form_data

properties:
  doc:
    _id: _uuid: true
    name: _payload: item.name
    created: _ref: shared/change_stamp.yaml
```

## Authentication and Authorization

### Auth Configuration

```yaml
auth:
  authPages:
    signIn: '/login'
    verifyRequest: '/verify-email-request'
  providers:
    - id: email
      type: EmailProvider
  userFields:
    id: user.id
    profile: user.profile
  pages:
    protected: true
    roles:
      user-admin:
        - users
        - users-edit
```

### User Context

```yaml
properties:
  currentUser: _user: profile.name
  userId: _user: id
  userRoles: _user: roles

visible:
  _includes:
    - _user: roles
    - admin
```

## Best Practices

### File Organization

- Use `_ref` for reusable configurations
- Group related functionality in shared directories
- Maintain consistent naming conventions
- Document with @context comments

### Performance

- Use appropriate loading states
- Implement pagination for large datasets
- Cache frequently accessed data
- Minimize unnecessary re-renders

### Maintainability

- Keep pages modular and focused
- Use shared components for common UI patterns
- Validate configurations regularly
- Follow established patterns

### Security

- Validate all user inputs
- Use parameterized queries
- Implement proper authentication checks
- Log security-relevant events

## Common Components

### Navigation

```yaml
- id: menu
  type: MenuLink
  properties:
    title: Dashboard
    icon: AiOutlineDashboard
  pageId: dashboard
```

### Data Display

```yaml
- id: grid
  type: AgGridAlpine
  properties:
    columnDefs:
      - headerName: Name
        field: name
        sortable: true
      - headerName: Status
        field: status
        cellRenderer:
          _function:
            __nunjucks: |
              <span class="status-{{ status }}">{{ status }}</span>
```

### Forms

```yaml
- id: form_field
  type: TextInput
  required: true
  validate:
    _ref: shared/validate_email.yaml
  properties:
    title: Email
    placeholder: Enter your email
```

## Integration Patterns

### MongoDB Integration

```yaml
connections:
  - id: items
    type: MongoDBCollection
    properties:
      collection: items
      databaseUri: _secret: MONGODB_URI
      write: true
      changeLog:
        collection: log-changes
        meta:
          user: _user: true

requests:
  - id: get_items
    type: MongoDBAggregation
    connectionId: items
    properties:
      pipeline:
        - $sort: { created: -1 }
```

### Email Integration

```yaml
auth:
  providers:
    - id: email
      type: EmailProvider
      properties:
        server:
          host: smtp.mailgun.org
          auth:
            user: _secret: MAILGUN_SMTP_USER
            pass: _secret: MAILGUN_SMTP_PASSWORD
        from: _secret: FROM_ADDRESS
```

## Debugging and Development

### Common Issues

- **Schema Validation**: Use MCP server for real-time validation
- **State Issues**: Check state initialization and updates
- **Event Flow**: Verify event action chains
- **Data Loading**: Monitor request states and errors

### Development Tools

- **MCP Server**: Schema validation and component documentation
- **Browser DevTools**: Network inspection and console debugging
- **Lowdefy Logs**: Application runtime information
- **YAML Validation**: Syntax checking and structure validation

## Advanced Features

### Custom Blocks

```yaml
# In plugins/plugin-lowdefy-vibe-code-starter/src/blocks/
HelloWorldAlert:
  schema.json  # Block schema
  HelloWorldAlert.js  # Block implementation
  examples.yaml  # Usage examples
```

### Custom Operators

```yaml
# In plugins/plugin-lowdefy-vibe-code-starter/src/operators/
hello_world.js # Custom operator implementation
```

### Custom Connections

```yaml
# In plugins/plugin-lowdefy-vibe-code-starter/src/connections/
HelloWorldAPI.js # Custom connection implementation
```

This comprehensive guide covers the essential aspects of Lowdefy development as implemented in this starter project. For more detailed information, refer to the official Lowdefy documentation at https://docs.lowdefy.com.
