---
trigger: always_on
---

# App Configuration

- Use lowdefy.yaml is for the app configuration.
- Use app_config.yaml for app configuration definitions.
- Use connections.yaml for connection definitions.
- Use global.yaml for global state definitions.
- Use menus.yaml for menu layout and page navigation definitions.
- Use pages.yaml for page references.
- Use roles.yaml for role definitions.

# File Organization

- Use the following format for pages: pages/[page-name]/[page-name].yaml
- Use the following format for actions: pages/[page-name]/actions/[action_name].yaml
- Use the following format for components: pages/[page-name]/components/[component_name].yaml
- Use the following format for requests: pages/[page-name]/requests/[request_name].yaml
- Use the shared folder for files used in more than one place.
- Use the following format for the shared folder: shared/[page-name]/...

# Casing

- Use kebab-case for page ids e.g. users-all.
- Use snake_case for component ids e.g. user_profile.
- Use snake_case for request ids e.g get_user.
- Use snake_case for action ids e.g set_user.

# Architecture

- Use the _ref operator for referencing in other files.

# Comments

- All files must have a @context comment at the top of the file formatted as follows:

```yaml
# @context
# Name: [Name of the file]
# Description: [Description of the file with its purpose and features]
# Agents Context: [Specific context of the file for AI Agents assistance]
```

- Add @context comments to .yaml files without them.
- Add @context comments to .yaml.njk files without them.
- Update @context comment when adding or updating functionality of a file.
- Maintain consistency with established @context comment format.

# Context

- Use the AGENTS-CHANGELOG.md file to document changes made to the code.
- Use the AGENTS-CONTEXT.md file to document context about the project.
- Use the DATA-STRUCTURES.md file to add and update data structures used in the project.
- Use the README.md file in the root directory for general information about the project.

# MCP Server

- Use the local Lowdefy MCP server at http://localhost:3000/api/ai/mcp for schema validation and debugging.
- Use the local Lowdefy MCP server at http://localhost:3000/api/ai/mcp for debugging console errors.
- Use the local Lowdefy MCP server at http://localhost:3000/api/ai/mcp to always verify Lowdefy code suggestions.
