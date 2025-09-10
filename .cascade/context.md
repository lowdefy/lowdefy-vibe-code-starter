# Lowdefy Vibe Code Starter - AI Assistant Context

*Note: For user setup instructions, project overview, and MCP configuration, see README.md*

## AI Development Context

This project demonstrates AI-assisted Lowdefy development patterns. When working with this codebase:

### Core Principles

- **Schema-First**: Always validate components against Lowdefy MCP server schemas
- **Pattern Recognition**: Apply consistent Lowdefy architectural patterns
- **Modular Design**: Use _ref for reusable components and configurations
- **Clean Structure**: Maintain logical file organization and naming conventions

### MCP Server Integration

The Lowdefy MCP server provides real-time schema access for:

- Component validation (blocks, actions, operators)
- Connection and request schema verification
- Intelligent code suggestions based on valid patterns
- Error prevention through schema enforcement

### Architecture Patterns

- **Frontend**: YAML-based configuration with consistent component hierarchy
- **Database**: MongoDB with clean schema design and changeLog audit trails
- **Authentication**: NextAuth integration with profile management flow
- **Navigation**: Router-based authentication and page flow control

### File Organization

```
app/
├── lowdefy.yaml           # Main app configuration
├── connections.yaml       # Database connections
├── pages.yaml            # Page references
├── menus.yaml            # Navigation structure
├── global.yaml           # Global state and theming
├── pages/                # Page definitions
│   └── [page-name]/      # Each page follows this structure:
│       ├── [page-name].yaml      # Main page file
│       ├── components/           # Page-specific components
│       ├── requests/             # Data operations
│       └── actions/              # Custom actions (if needed)
└── shared/               # Reusable components
    └── [domain]/         # Organized by domain (contacts, users, etc.)
```

### Component Structure Patterns

- **Pages**: Main interface definitions (PageHeaderMenu, Layout, Content)
- **Components**: Page-specific reusable UI elements within each page folder
- **Requests**: Data operations specific to each page (MongoDB queries, API calls)
- **Actions**: Custom actions specific to each page (if needed)
- **Shared**: Cross-page reusable elements organized by domain

### Request Organization

- **CRUD Operations**: get_, add_, update_, delete_ prefixes
- **Selectors**: _selector suffix for dropdown data
- **Aggregations**: Complex queries with pipeline stages
- **Validation**: Schema-based validation through MCP server

## @cascade Comment Guidelines

### Always Update Comments

When proposing code changes, AI must:

1. **Add @cascade comments** to new files without them
2. **Update existing comments** if file purpose or patterns change
3. **Maintain consistency** with established comment format
4. **Reflect current state** of dependencies and patterns

### Comment Format

```yaml
# @cascade: [File Type] - [Purpose]
# AI Context: [Specific guidance for AI assistance]
# MCP Integration: [How this file uses MCP server features]
# Patterns: [Key patterns to follow]
# Dependencies: [Related files or components]
```

### When to Update Comments

- Adding new functionality to existing files
- Changing file purpose or primary patterns
- Modifying dependencies or relationships
- Refactoring component structure
