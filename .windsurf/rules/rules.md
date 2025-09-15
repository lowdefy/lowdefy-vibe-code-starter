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
# @context: [File Type] - [Purpose]
# AI Context: [Specific guidance for AI assistance]
# MCP Integration: [How this file uses MCP server features]
# Patterns: [Key patterns to follow]
# Dependencies: [Related files or components]
```

- Add @context comments to new files without them.
- Update @context comment if file purpose or patterns change.
- Update @context comment when adding new functionality to existing files.
- Update @context comment when changing file purpose or primary patterns.
- Update @context comment when modifying dependencies or relationships.
- Update @context comment when refactoring component structure.
- Maintain consistency with established @context comment format.

# Knowledge Base

- Use the README.md file in the root directory for general information about the project.
- Use the AI-CHANGELOG.md file to document changes made to the code.
- Use the lowdefy MCP server for schema validation and debugging.
- Use other similar files in the project for debugging and context.
- Use lowdefy MCP server for debugging console errors.
- Use the lowdefy MCP server to verify code suggestions.
