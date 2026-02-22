# n8n-nodes-arcane

This is an n8n community node. It lets you use the [Arcane](https://getarcane.app/) API in your n8n workflows.

Arcane is a self-hosted platform for managing Docker containers, projects, and environments with advanced features like GitOps, vulnerability scanning, and automated image updates.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports a wide range of resources and operations (over 130+ endpoints):

- **API Keys**: List, create, delete, get, and update API keys.
- **Application Images**: Get favicon, logos, and profile images.
- **Auth**: Login (OIDC/SAML), logout, refresh tokens, and user profile management.
- **Container Registries**: List, create, sync, delete, get, and test registries.
- **Containers**: List, create, status counts, delete, get, restart, start, and stop containers.
- **Customize**: Git repositories management (list, create, delete, branch browsing, testing) and category search.
- **Environments**: Manage environments, agent pairing, deployment snippets, and sync.
- **Events**: List, create, get by environment, and delete events.
- **Fonts**: Retrieve app-defined fonts (monospace, sans, serif).
- **GitOps Syncs**: List, create, import, delete, and perform GitOps syncs per environment.
- **Health**: System health checks.
- **Image Updates**: Check for updates by reference or ID, batch checks, and summaries.
- **Images**: List, prune, pull, upload, and remove Docker images.
- **JobSchedules**: Manage background jobs and schedules.
- **Networks**: List, create, prune, delete, and get Docker networks.
- **Notifications**: Apprise settings, provider settings, and notification testing.
- **OIDC**: Configuration, callback handling, device authorization, and status.
- **Projects**: Lifecycle management (list, create, deploy, redeploy, pull images, destroy).
- **Settings**: System settings management (get, update, search).
- **System**: Bulk container control, conversion tools, Docker info, and system upgrades.
- **Templates**: Template management (list, create, content, download) and registries.
- **Updater**: Container update triggers and history.
- **Users**: User account management.
- **Version**: System and app version information.
- **Volume Backup**: Backup and restore functionalities (create, delete, list files, restore).
- **Volume Browser**: Browse, delete, download, and upload files within volumes.
- **Volumes**: List, create, prune, and get volume usage data.
- **Vulnerabilities**: Image and environment vulnerability scans, summaries, and ignore management.

## Credentials

To use this node, you need:

1.  **Base URL**: The URL of your Arcane instance (e.g., `https://arcane.example.tld`).
2.  **API Key**: Generated within the Arcane settings. The API key must start with `arc_` followed by 64 lowercase hexadecimal characters.

## Compatibility

| Node Version | Arcane Version |
| ------------ | -------------- |
| Untested     | < 1.15         |
| 1.0.0        | 1.15 - Current |

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Arcane Website](https://getarcane.app/)
- [Arcane GitHub Repository](https://github.com/getarcaneapp/arcane)
