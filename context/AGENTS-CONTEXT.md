# Agents Context

## Project Overview

This is the **Lowdefy Vibe Code Starter** - a comprehensive starter template designed for AI-assisted development of Lowdefy applications. The project demonstrates how AI can accelerate low-code application development through intelligent code generation, schema validation, and pattern-based development.

## Key Features

- **Companies Management**: Full CRUD operations with data tables, forms, and color-coded organization
- **Contact Management**: Relationship-based contact system with company associations
- **User Administration**: Authentication, profiles, role-based access control, and user management
- **AI Integration**: Real-time schema validation via MCP server, intelligent component suggestions
- **Email Integration**: Automated email verification and notifications using Nodemailer

## Architecture

### Application Structure

- **Frontend**: Lowdefy framework with YAML-based configuration
- **Backend**: MongoDB database with custom connections
- **Authentication**: NextAuth.js with email provider
- **Plugins**: Custom Lowdefy plugins for MongoDB and email functionality

### Key Components

- **Pages**: Modular page structure with shared components
- **Requests**: MongoDB aggregation and CRUD operations
- **Connections**: Database connections with audit logging
- **Global State**: Application-wide configuration and theming

## Technologies

- **Lowdefy**: Core framework for low-code application development
- **MongoDB**: NoSQL database with aggregation pipelines
- **NextAuth.js**: Authentication and session management
- **Nodemailer**: Email sending capabilities
- **MCP Server**: Model Context Protocol for AI-assisted development
- **Windsurf**: AI-powered development environment

## Database Schema

### Collections

- **companies**: Company profiles with name, description, color, and audit trails
- **contacts**: Contact records with profile information and company relationships
- **user_contacts**: User-to-contact mapping for ownership and visibility
- **log-usage**: Usage analytics and telemetry data
- **log-changes**: Audit trail for all data mutations

### Key Relationships

- Contacts belong to companies (many-to-one)
- Users have access to specific contacts (many-to-many via user_contacts)
- All collections include created/updated timestamps with user attribution

## Authentication & Authorization

- **Provider**: Email-based authentication with magic links
- **Roles**: user-admin role for administrative access
- **Session Management**: NextAuth with MongoDB adapter
- **Protected Routes**: Role-based page access control

## File Organization

### Directory Structure

```
app/
├── pages/              # Application pages (kebab-case IDs)
├── shared/             # Reusable components and utilities
├── connections.yaml    # Database connection definitions
├── global.yaml         # Application-wide configuration
├── menus.yaml          # Navigation structure
└── lowdefy.yaml        # Main application configuration

plugins/                # Custom Lowdefy plugins
context/                # Documentation and context files
```

### Naming Conventions

- **Pages**: kebab-case (e.g., `companies-edit.yaml`)
- **Components**: snake_case (e.g., `user_profile.yaml`)
- **Requests**: snake_case (e.g., `get_companies.yaml`)
- **Actions**: snake_case (e.g., `login.yaml`)

## Development Workflow

### Setup Process

1. **Environment**: Configure MongoDB Atlas and email service
2. **Dependencies**: Install with `pnpm install`
3. **Development**: Run `pnpm lowdefy:dev` for local development
4. **MCP Server**: Start Lowdefy dev server for AI assistance

### AI-Assisted Development

- **Context Comments**: Every file includes @context comments for AI guidance
- **Schema Validation**: Real-time validation via MCP server
- **Pattern Recognition**: Automated application of best practices
- **Code Generation**: Intelligent YAML configuration suggestions

## AI Integration Features

### MCP Server Integration

- **Schema Access**: Real-time Lowdefy schema information
- **Component Validation**: Automatic validation of block and action configurations
- **Documentation**: Built-in access to component documentation
- **Debugging**: Console error analysis and debugging assistance

### Agent Assistance

- **Code Generation**: Context-aware YAML configuration generation
- **Pattern Application**: Automated implementation of common patterns
- **Error Prevention**: Schema-based validation to prevent configuration errors
- **Best Practices**: Enforcement of Lowdefy development conventions

## Conventions & Patterns

### Code Style

- **YAML Structure**: Consistent indentation and organization
- **Reference Usage**: Extensive use of `_ref` for modularity
- **State Management**: Global and local state patterns
- **Event Handling**: Standardized event action structures

### Documentation

- **@context Comments**: Standardized format in all YAML files
- **Change Logging**: AGENTS-CHANGELOG.md for tracking modifications
- **Data Structures**: DATA-STRUCTURES.md for schema documentation
- **README**: Comprehensive project documentation

### Security

- **Secrets Management**: Environment variables for sensitive data
- **Audit Trails**: Change logging for all data mutations
- **Input Validation**: Form validation and sanitization
- **Access Control**: Role-based permissions and authentication

## Common Patterns

### CRUD Operations

- **List View**: AgGrid with sorting, filtering, and pagination
- **Create/Edit Forms**: Modal-based forms with validation
- **Delete Operations**: Confirmation dialogs and soft deletes
- **Audit Logging**: Automatic change tracking

### Navigation

- **Router Logic**: Authentication-based routing with profile completion checks
- **Menu Structure**: Hierarchical navigation with role-based visibility
- **Breadcrumbs**: Consistent back navigation patterns

### Data Flow

- **Request-Response**: Standardized MongoDB request patterns
- **State Management**: Global state for shared data
- **Event Actions**: Chainable action sequences
- **Error Handling**: Consistent error display and logging

## Development Best Practices

### File Management

- **Modularity**: Break down complex pages into shared components
- **References**: Use `_ref` for reusable configurations
- **Organization**: Logical grouping by feature and functionality

### Performance

- **Lazy Loading**: Efficient data loading patterns
- **Caching**: Appropriate use of request caching
- **Optimization**: Minimize unnecessary re-renders

### Maintainability

- **Documentation**: Comprehensive @context comments
- **Consistency**: Follow established naming and structure conventions
- **Testing**: Validate configurations through MCP server
- **Version Control**: Clear commit messages and change tracking

## Troubleshooting

### Common Issues

- **MCP Server**: Ensure Lowdefy dev server is running on localhost:3000
- **MongoDB**: Verify connection strings and network access
- **Email**: Check SMTP credentials and provider configuration
- **Authentication**: Validate NextAuth configuration and secrets

### Debug Tools

- **MCP Server**: Use for schema validation and error analysis
- **Browser DevTools**: Inspect network requests and console errors
- **MongoDB Atlas**: Monitor database operations and performance
- **Lowdefy Logs**: Check application logs for configuration issues

## Future Enhancements

### Planned Features

- **Advanced Analytics**: Enhanced usage tracking and reporting
- **API Integration**: External service connections and webhooks
- **Workflow Automation**: Business process automation features
- **Multi-tenancy**: Organization-based data isolation

### AI Improvements

- **Enhanced Suggestions**: More sophisticated code generation
- **Pattern Learning**: AI-driven pattern recognition and application
- **Automated Testing**: AI-generated test cases and validation
- **Performance Optimization**: AI-driven performance recommendations
