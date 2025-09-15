# Lowdefy Vibe Code Starter

A Lowdefy application starter template designed for AI-assisted development with Cascade AI and the Lowdefy MCP server.

## 📖 Project Overview

This starter template demonstrates how AI can accelerate Lowdefy application development by providing:

- **Real-time schema validation** through MCP server integration
- **Intelligent component suggestions** based on Lowdefy best practices
- **Automated code generation** with proper YAML structure
- **Pattern-based development** following established conventions

### Key Features

- **Companies Management**: CRUD operations with data tables and forms
- **Contact Management**: Relationship handling with company associations
- **User Administration**: Authentication, profiles, and role management
- **AI Integration**: Comprehensive MCP server integration for development assistance

## 🎯 Target Audience

- Developers learning AI-assisted low-code development
- Teams wanting to accelerate Lowdefy application creation
- Anyone interested in MCP server integration patterns
- Educators teaching modern development workflows

## 🤖 AI-First Development

This starter template showcases how AI can accelerate Lowdefy application development through:

- **Cascade AI Integration**: Intelligent code generation and suggestions
- **Lowdefy MCP Server**: Real-time schema access and validation
- **Smart Component Selection**: AI-powered block and action recommendations
- **Pattern Recognition**: Automated application of best practices

## 🚀 Quick Start

> Tip: Before starting an AI-assisted session, prime the LLM with `AI-INIT-PROMPT.md` (see the "Example Use Cases" section below for details).

### Environment Setup

Create a `.env` file in the `app/` folder with the following variables:

```bash
LOWDEFY_SECRET_MONGODB_URI={{YOUR_MONGODB_URI}}
LOWDEFY_SECRET_SENDGRID_API_KEY={{YOUR_SENDGRID_API_KEY}}
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET={{YOUR_NEXTAUTH_SECRET}}
```

**Generate NextAuth Secret:**

```bash
# Generate a secure random secret
openssl rand -base64 32
```

Or use Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm ldf:d
```

## 🤖 MCP Server Configuration

The Lowdefy MCP server enables AI-assisted development through schema access and validation.

### Setup Steps

1. Start the Lowdefy development server: `pnpm ldf:d` (runs on localhost:3000)
2. Configure Windsurf MCP settings in your `mcp_config.json`:

    ```json
    {
        "mcpServers": {
            "lowdefy": {
                "serverUrl": "http://localhost:3000/api/ai/mcp"
            }
        }
    }
    ```

3. Restart Windsurf to load the MCP server configuration
4. The AI assistant will now have access to Lowdefy schemas and can provide:
   - Real-time component validation
   - Intelligent code suggestions
   - Schema-based error prevention
   - Context-aware development assistance

### Available MCP Tools

- `list_blocks` - Get all available Lowdefy blocks
- `get_block` - Get detailed schema for specific blocks
- `list_actions` - Get all available Lowdefy actions
- `get_action` - Get detailed schema for specific actions
- `list_connections` - Get all available connection types
- `get_connection` - Get detailed schema for connections
- `list_operators` - Get all available operators
- `get_operator` - Get detailed schema for operators
- `list_requests` - Get requests for specific connection types
- `get_request` - Get detailed schema for specific requests

## 🏗️ Project Structure

```
lowdefy-vibe-code-starter/
├── .windsurf/
│   └── rules/
│       └── rules.md            # AI assistance rules & conventions
├── app/
│   ├── pages/                  # Application pages
│   ├── connections.yaml        # Database connections
│   ├── lowdefy.yaml            # Main app configuration
│   └── menus.yaml              # Navigation structure
├── plugins/                    # Custom Lowdefy plugins
├── AI-INIT-PROMPT.md           # Initialization prompt to prime AI context
├── AI-CHANGELOG.md             # AI change log
└── README.md
```

> Note: This project uses `_ref` extensively to keep files modular and maintainable.

## 🧠 AI Integration Features

### Cascade AI Assistant

- Context-aware code generation
- Intelligent component suggestions
- Automated YAML configuration
- Best practice enforcement

### Lowdefy MCP Server

- Real-time schema access
- Component documentation
- Validation and error prevention
- Pattern-based suggestions

## 📋 Example Use Cases

### 1. Prime AI Context (Recommended for a fresh chat)

Before using Cascade in a new chat, open and send the contents of `AI-INIT-PROMPT.md` to the assistant to provide immediate context about this repo.

- Open `AI-INIT-PROMPT.md` in the root of this project.
- Start a fresh chat in Windsurf.
- Paste or reference the file contents to the assistant to prime context.
- Then proceed with other actions below.

### 2. Configure Windsurf Context

Navigate to `.windsurf.rules/rules.md` and set the activation mode to "always on" so Windsurf always checks this for context when providing AI assistance.

### 3. Component Generation

Ask Cascade: "Create a project management page with a data table and form"

### 4. Schema Validation

Cascade validates configurations against Lowdefy schemas in real-time

### 5. Pattern Application

AI suggests and applies common Lowdefy patterns automatically

### 6. Rapid Prototyping

Generate complete page structures with minimal input

## 🔧 Development Workflow

1. **Describe Intent**: Tell Cascade what you want to build
2. **AI Generation**: Cascade generates appropriate YAML configurations
3. **Schema Validation**: MCP server ensures valid Lowdefy syntax
4. **Iterative Refinement**: Collaborate with AI to perfect the implementation

## 🎯 Key Features

- **Companies Management**: CRUD operations with AI-generated forms
- **Contact Management**: Relationship handling with intelligent suggestions
- **User Administration**: Authentication and profile management
- **Event Logging**: Audit trail with AI-optimized queries

## 🧩 Plugins

- `@lowdefy/community-plugin-mongodb` for MongoDB connections and requests
- `@lowdefy/community-plugin-nodemailer` for email provider integration
- `@lowdefy/plugin-lowdefy-vibe-code-starter` (workspace) for demo components/actions

## 🤝 Contributing

This project serves as a reference for AI-assisted Lowdefy development. Contributions that showcase new AI integration patterns are welcome.

## 📚 Resources

- [Lowdefy Documentation](https://docs.lowdefy.com)
- [Cascade AI Assistant](https://windsurf.ai)
- [MCP Protocol](https://modelcontextprotocol.io)

## 🏷️ Tags

`lowdefy` `ai-assisted-development` `mcp-server` `cascade-ai` `low-code` `yaml-configuration`
