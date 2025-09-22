# Lowdefy Vibe Code Starter

A Lowdefy application starter template designed for AI-assisted development with AI Agents and the Lowdefy MCP server.

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

## 🤖 AI-First Development

This starter template showcases how AI can accelerate Lowdefy application development through:

- **AI Agents Integration**: Intelligent code generation and suggestions
- **Lowdefy MCP Server**: Real-time schema access and validation
- **Smart Component Selection**: AI-powered block and action recommendations
- **Pattern Recognition**: Automated application of best practices

## 🚀 Quick Start

> Tip: Before starting an AI-assisted session, prime the LLM with `AGENTS-PROMPT.md` (see the "Example Use Cases" section below for details).

### Environment Setup

1. **MongoDB Setup**

   - Sign up for a free MongoDB Atlas cluster at [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
   - Create a new project and build a free shared cluster
   - Under "Security > Database Access", create a new database user with read/write access
   - Go to "Network Access" and add your IP address (or 0.0.0.0/0 for development)
   - In the "Database" section, click "Connect" and choose "Connect your application"
   - Copy the connection string (it will look like `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/`)

2. **Email Service Setup**

   Choose one of the suggested options below or any of the [supported providers](https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/).

   **Option 1: Mailgun**

   - Sign up for a free Mailgun account at [https://signup.mailgun.com/](https://signup.mailgun.com/)
   - Verify your domain or use the sandbox domain for testing
   - Go to "Sending > Domain Settings" and find your SMTP credentials
   - Copy your SMTP username and password
   - Add your email as an authorized recipient

   **Option 2: SendGrid**

   - Sign up for a free SendGrid account at [https://signup.sendgrid.com/](https://signup.sendgrid.com/)
   - Verify your sender identity (Single Sender Verification for testing)
   - Go to "Settings > API Keys" and create a new API key with "Full Access"
   - Copy the API key

3. **Create Environment File**

   Create a `.env` file in the `app/` folder with the following variables:

   ```bash
   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret-here

   # MongoDB
   LOWDEFY_SECRET_MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/lowdefy-vibe-code-starter?retryWrites=true&w=majority

   # Sender email
   LOWDEFY_SECRET_FROM_ADDRESS=no-reply@your-domain.com

   # Choose one email provider configuration:

   # For Mailgun
   LOWDEFY_SECRET_MAILGUN_SMTP_USER=postmaster@your-domain.com
   LOWDEFY_SECRET_MAILGUN_SMTP_PASSWORD=your-mailgun-smtp-password

   # OR for SendGrid
   LOWDEFY_SECRET_SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
# Change to the app directory
cd app

# Install dependencies
pnpm install

# Start development server
pnpm lowdefy:dev
```

## 🤖 MCP Server Configuration (Windsurf example)

The Lowdefy MCP server enables AI-assisted development through schema access and validation.

### Setup Steps

1. Start the Lowdefy development server: `pnpm lowdefy:dev` (runs on localhost:3000)
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
- `execute_request` - Execute a request with the specified parameters

## 🏗️ Project Structure

```
lowdefy-vibe-code-starter/
├── .windsurf/
│   └── rules/
│       └── rules.md            # Windsurf AI Agent assistance rules & conventions
├── app/
│   ├── pages/                  # Application pages
│   ├── connections.yaml        # Database connections
│   ├── lowdefy.yaml            # Main app configuration
│   └── menus.yaml              # Navigation structure
├── plugins/                    # Custom Lowdefy plugins
├── context/                    # Context files
│   ├──AGENTS-CHANGELOG.md      # Agents change log
│   ├──AGENTS-CONTEXT.md        # Agents context
│   ├──DATA-STRUCTURES.md       # Data structures
│   ├──LOWDEFY-CONTEXT.md       # Lowdefy context
├── AGENTS-PROMPT.md            # Initialization prompt to prime AI Agent context
├── AGENTS.md                   # AI Agents assistance rules & conventions
└── README.md
```

> Note: This project uses `_ref` extensively to keep files modular and maintainable.

## 🧠 AI Integration Features

### AI Agent Assistant

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

Before starting a new chat with the AI Agent, open and send the contents of `AGENTS-PROMPT.md` to the chat to provide immediate context about this repo.

- Open `AGENTS-PROMPT.md` in the root of this project.
- Start a fresh chat in Windsurf.
- Paste or reference the file contents to the assistant to prime context.
- Then proceed with other actions below.

### 2. Component Generation

Ask AI Agent: "Create a project management page with a data table and form"

### 3. Schema Validation

AI Agent validates configurations against Lowdefy schemas in real-time

### 4. Pattern Application

AI Agent suggests and applies common Lowdefy patterns automatically

### 5. Rapid Prototyping

Generate complete page structures with minimal input

## 🔧 Development Workflow

1. **Describe Intent**: Tell the AI Agent what you want to build
2. **AI Generation**: AI Agent generates appropriate YAML configurations
3. **Schema Validation**: MCP server ensures valid Lowdefy syntax
4. **Iterative Refinement**: Collaborate with AI to perfect the implementation

## 🧩 Plugins

- `@lowdefy/community-plugin-mongodb` for MongoDB connections and requests
- `@lowdefy/community-plugin-nodemailer` for email provider integration
- `@lowdefy/plugin-lowdefy-vibe-code-starter` workspace plugin for local integrations

## 🤝 Contributing

This project serves as a reference for AI-assisted Lowdefy development. Contributions that showcase new AI integration patterns are welcome.

## 📚 Resources

- [Lowdefy Documentation](https://docs.lowdefy.com)
- [Cascade AI Assistant](https://windsurf.ai)
- [MCP Protocol](https://modelcontextprotocol.io)
