/* eslint-disable n8n-nodes-base/node-param-resource-with-plural-option */
/* eslint-disable n8n-nodes-base/node-param-color-type-unused */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-description-wrong-for-limit */
/* eslint-disable n8n-nodes-base/node-param-default-wrong-for-limit */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-description-identical-to-display-name */
/* eslint-disable n8n-nodes-base/node-param-description-miscased-url */
/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IHttpRequestMethods,
	IHttpRequestOptions,
	IDataObject,
} from 'n8n-workflow';

export class Arcane implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Arcane',
		name: 'arcane',
		icon: 'file:../../icons/arcane.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Arcane API',
		defaults: {
			name: 'Arcane',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'arcaneApi',
				required: true,
			},
		],
    usableAsTool: true,
		properties: [
			// ----------------------------------
			//         Resource
			// ----------------------------------
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: "API Keys", value: "apiKeys" },
					{ name: "Application Images", value: "applicationImages" },
					{ name: "Auth", value: "auth" },
					{ name: "Container Registries", value: "containerRegistries" },
					{ name: "Containers", value: "containers" },
					{ name: "Customize", value: "customize" },
					{ name: "Environments", value: "environments" },
					{ name: "Events", value: "events" },
					{ name: "Fonts", value: "fonts" },
					{ name: "Git Repositories", value: "gitRepositories" },
					{ name: "GitOps Syncs", value: "gitopsSyncs" },
					{ name: "Health", value: "health" },
					{ name: "Image Updates", value: "imageUpdates" },
					{ name: "Images", value: "images" },
					{ name: "JobSchedules", value: "jobschedules" },
					{ name: "Networks", value: "networks" },
					{ name: "Notifications", value: "notifications" },
					{ name: "OIDC", value: "oidc" },
					{ name: "Projects", value: "projects" },
					{ name: "Settings", value: "settings" },
					{ name: "System", value: "system" },
					{ name: "Templates", value: "templates" },
					{ name: "Updater", value: "updater" },
					{ name: "Users", value: "users" },
					{ name: "Version", value: "version" },
					{ name: "Volume Backup", value: "volumeBackup" },
					{ name: "Volume Browser", value: "volumeBrowser" },
					{ name: "Volumes", value: "volumes" },
					{ name: "Vulnerabilities", value: "vulnerabilities" },
				],
				default: "apiKeys",
			},

			// ----------------------------------
			//         apiKeys operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["apiKeys"],
					},
				},
				options: [
					{
						name: 'List API Keys',
						value: "listApiKeys",
						description: "GET /api-keys",
						action: "List API keys",
					},
					{
						name: 'Create an API Key',
						value: "createApiKey",
						description: "POST /api-keys",
						action: "Create an API key",
					},
					{
						name: 'Delete an API Key',
						value: "deleteApiKey",
						description: 'DELETE /api-keys/{ID}',
						action: "Delete an API key",
					},
					{
						name: 'Get an API Key',
						value: "getApiKey",
						description: 'GET /api-keys/{ID}',
						action: "Get an API key",
					},
					{
						name: 'Update an API Key',
						value: "updateApiKey",
						description: 'PUT /api-keys/{ID}',
						action: "Update an API key",
					},
				],
				default: "listApiKeys",
			},

			// ----------------------------------
			//         applicationImages operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["applicationImages"],
					},
				},
				options: [
					{
						name: 'Get Application Favicon',
						value: "getFavicon",
						description: "GET /app-images/favicon",
						action: "Get application favicon",
					},
					{
						name: 'Get Application Logo',
						value: "getLogo",
						description: "GET /app-images/logo",
						action: "Get application logo",
					},
					{
						name: 'Get Application Logo for Email',
						value: "getLogoEmail",
						description: "GET /app-images/logo-email",
						action: "Get application logo for email",
					},
					{
						name: 'Get Default Profile Image',
						value: "getDefaultProfile",
						description: "GET /app-images/profile",
						action: "Get default profile image",
					},
				],
				default: "getFavicon",
			},

			// ----------------------------------
			//         auth operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["auth"],
					},
				},
				options: [
					{
						name: "Login",
						value: "login",
						description: "POST /auth/login",
						action: "Login",
					},
					{
						name: "Logout",
						value: "logout",
						description: "POST /auth/logout",
						action: "Logout",
					},
					{
						name: 'Get Current User',
						value: "getCurrentUser",
						description: "GET /auth/me",
						action: "Get current user",
					},
					{
						name: 'Change Password',
						value: "changePassword",
						description: "POST /auth/password",
						action: "Change password",
					},
					{
						name: 'Refresh Token',
						value: "refreshToken",
						description: "POST /auth/refresh",
						action: "Refresh token",
					},
				],
				default: "login",
			},

			// ----------------------------------
			//         containerRegistries operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
					},
				},
				options: [
					{
						name: 'List Container Registries',
						value: "listcontainerregistries",
						description: "GET /container-registries",
						action: "List container registries",
					},
					{
						name: 'Create a Container Registry',
						value: "createcontainerregistry",
						description: "POST /container-registries",
						action: "Create a container registry",
					},
					{
						name: 'Sync Container Registries',
						value: "synccontainerregistries",
						description: "POST /container-registries/sync",
						action: "Sync container registries",
					},
					{
						name: 'Delete a Container Registry',
						value: "deletecontainerregistry",
						description: 'DELETE /container-registries/{ID}',
						action: "Delete a container registry",
					},
					{
						name: 'Get a Container Registry',
						value: "getcontainerregistry",
						description: 'GET /container-registries/{ID}',
						action: "Get a container registry",
					},
					{
						name: 'Update a Container Registry',
						value: "updatecontainerregistry",
						description: 'PUT /container-registries/{ID}',
						action: "Update a container registry",
					},
					{
						name: 'Test a Container Registry',
						value: "testcontainerregistry",
						description: 'POST /container-registries/{ID}/test',
						action: "Test a container registry",
					},
				],
				default: "listcontainerregistries",
			},

			// ----------------------------------
			//         containers operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["containers"],
					},
				},
				options: [
					{
						name: 'List Containers',
						value: "listContainers",
						description: 'GET /environments/{ID}/containers',
						action: "List containers",
					},
					{
						name: 'Create Container',
						value: "createContainer",
						description: 'POST /environments/{ID}/containers',
						action: "Create container",
					},
					{
						name: 'Container Status Counts',
						value: "containerStatusCounts",
						description: 'GET /environments/{ID}/containers/counts',
						action: "Container status counts",
					},
					{
						name: 'Delete Container',
						value: "deleteContainer",
						description: 'DELETE /environments/{ID}/containers/{containerId}',
						action: "Delete container",
					},
					{
						name: 'Get Container',
						value: "getContainer",
						description: 'GET /environments/{ID}/containers/{containerId}',
						action: "Get container",
					},
					{
						name: 'Restart Container',
						value: "restartContainer",
						description: 'POST /environments/{ID}/containers/{containerId}/restart',
						action: "Restart container",
					},
					{
						name: 'Start Container',
						value: "startContainer",
						description: 'POST /environments/{ID}/containers/{containerId}/start',
						action: "Start container",
					},
					{
						name: 'Stop Container',
						value: "stopContainer",
						description: 'POST /environments/{ID}/containers/{containerId}/stop',
						action: "Stop container",
					},
				],
				default: "listContainers",
			},

			// ----------------------------------
			//         customize operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["customize"],
					},
				},
				options: [
					{
						name: 'Get Customization Categories',
						value: "getCustomizeCategories",
						description: "GET /customize/categories",
						action: "Get customization categories",
					},
					{
						name: 'List Git Repositories',
						value: "listgitrepositories",
						description: "GET /customize/git-repositories",
						action: "List git repositories",
					},
					{
						name: 'Create a Git Repository',
						value: "creategitrepository",
						description: "POST /customize/git-repositories",
						action: "Create a git repository",
					},
					{
						name: 'Delete a Git Repository',
						value: "deletegitrepository",
						description: 'DELETE /customize/git-repositories/{ID}',
						action: "Delete a git repository",
					},
					{
						name: 'Get a Git Repository',
						value: "getgitrepository",
						description: 'GET /customize/git-repositories/{ID}',
						action: "Get a git repository",
					},
					{
						name: 'Update a Git Repository',
						value: "updategitrepository",
						description: 'PUT /customize/git-repositories/{ID}',
						action: "Update a git repository",
					},
					{
						name: 'List Repository Branches',
						value: "listgitrepositorybranches",
						description: 'GET /customize/git-repositories/{ID}/branches',
						action: "List repository branches",
					},
					{
						name: 'Browse Repository Files',
						value: "browsegitrepositoryfiles",
						description: 'GET /customize/git-repositories/{ID}/files',
						action: "Browse repository files",
					},
					{
						name: 'Test a Git Repository',
						value: "testgitrepository",
						description: 'POST /customize/git-repositories/{ID}/test',
						action: "Test a git repository",
					},
					{
						name: 'Search Customization Options',
						value: "searchCustomize",
						description: "POST /customize/search",
						action: "Search customization options",
					},
				],
				default: "getCustomizeCategories",
			},

			// ----------------------------------
			//         environments operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["environments"],
					},
				},
				options: [
					{
						name: 'List Environments',
						value: "listenvironments",
						description: "GET /environments",
						action: "List environments",
					},
					{
						name: 'Create an Environment',
						value: "createenvironment",
						description: "POST /environments",
						action: "Create an environment",
					},
					{
						name: 'Pair Agent with Manager',
						value: "pairenvironment",
						description: "POST /environments/pair",
						action: "Pair agent with manager",
					},
					{
						name: 'Delete an Environment',
						value: "deleteenvironment",
						description: 'DELETE /environments/{ID}',
						action: "Delete an environment",
					},
					{
						name: 'Get an Environment',
						value: "getenvironment",
						description: 'GET /environments/{ID}',
						action: "Get an environment",
					},
					{
						name: 'Update an Environment',
						value: "updateenvironment",
						description: 'PUT /environments/{ID}',
						action: "Update an environment",
					},
					{
						name: 'Pair with Local Agent',
						value: "pairagent",
						description: 'POST /environments/{ID}/agent/pair',
						action: "Pair with local agent",
					},
					{
						name: 'Get Deployment Snippets',
						value: "getdeploymentsnippets",
						description: 'GET /environments/{ID}/deployment',
						action: "Get deployment snippets",
					},
					{
						name: 'Update Environment Heartbeat',
						value: "updateheartbeat",
						description: 'POST /environments/{ID}/heartbeat',
						action: "Update environment heartbeat",
					},
					{
						name: 'Sync Environment',
						value: "syncenvironment",
						description: 'POST /environments/{ID}/sync',
						action: "Sync environment",
					},
					{
						name: 'Test Environment Connection',
						value: "testconnection",
						description: 'POST /environments/{ID}/test',
						action: "Test environment connection",
					},
					{
						name: 'Get Environment Version',
						value: "getenvironmentversion",
						description: 'GET /environments/{ID}/version',
						action: "Get environment version",
					},
				],
				default: "listenvironments",
			},

			// ----------------------------------
			//         events operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["events"],
					},
				},
				options: [
					{
						name: 'List Events',
						value: "listevents",
						description: "GET /events",
						action: "List events",
					},
					{
						name: 'Create an Event',
						value: "createevent",
						description: "POST /events",
						action: "Create an event",
					},
					{
						name: 'Get Events by Environment',
						value: "geteventsbyenvironment",
						description: "GET /events/environment/{environmentId}",
						action: "Get events by environment",
					},
					{
						name: 'Delete an Event',
						value: "deleteevent",
						description: "DELETE /events/{eventId}",
						action: "Delete an event",
					},
				],
				default: "listevents",
			},

			// ----------------------------------
			//         fonts operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["fonts"],
					},
				},
				options: [
					{
						name: 'Get Monospace Font',
						value: "getMonoFont",
						description: "GET /fonts/mono",
						action: "Get monospace font",
					},
					{
						name: 'Get Sans-Serif Font',
						value: "getSansFont",
						description: "GET /fonts/sans",
						action: "Get sans-serif font",
					},
					{
						name: 'Get Serif Font',
						value: "getSerifFont",
						description: "GET /fonts/serif",
						action: "Get serif font",
					},
				],
				default: "getMonoFont",
			},

			// ----------------------------------
			//         gitRepositories operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["gitRepositories"],
					},
				},
				options: [
					{
						name: 'Sync Git Repositories',
						value: "syncgitrepositories",
						description: "POST /git-repositories/sync",
						action: "Sync git repositories",
					},
				],
				default: "syncgitrepositories",
			},

			// ----------------------------------
			//         gitopsSyncs operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
					},
				},
				options: [
					{
						name: 'List GitOps Syncs',
						value: "listgitopssyncs",
						description: 'GET /environments/{ID}/gitops-syncs',
						action: "List GitOps syncs",
					},
					{
						name: 'Create a GitOps Sync',
						value: "creategitopssync",
						description: 'POST /environments/{ID}/gitops-syncs',
						action: "Create a GitOps sync",
					},
					{
						name: 'Import GitOps Syncs',
						value: "importgitopssyncs",
						description: 'POST /environments/{ID}/gitops-syncs/import',
						action: "Import GitOps syncs",
					},
					{
						name: 'Delete a GitOps Sync',
						value: "deletegitopssync",
						description: 'DELETE /environments/{ID}/gitops-syncs/{syncId}',
						action: "Delete a GitOps sync",
					},
					{
						name: 'Get a GitOps Sync',
						value: "getgitopssync",
						description: 'GET /environments/{ID}/gitops-syncs/{syncId}',
						action: "Get a GitOps sync",
					},
					{
						name: 'Update a GitOps Sync',
						value: "updategitopssync",
						description: 'PUT /environments/{ID}/gitops-syncs/{syncId}',
						action: "Update a GitOps sync",
					},
					{
						name: 'Browse GitOps Sync Files',
						value: "browsegitopssyncfiles",
						description: 'GET /environments/{ID}/gitops-syncs/{syncId}/files',
						action: "Browse GitOps sync files",
					},
					{
						name: 'Get GitOps Sync Status',
						value: "getgitopssyncstatus",
						description: 'GET /environments/{ID}/gitops-syncs/{syncId}/status',
						action: "Get GitOps sync status",
					},
					{
						name: 'Perform a GitOps Sync',
						value: "performgitopssync",
						description: 'POST /environments/{ID}/gitops-syncs/{syncId}/sync',
						action: "Perform a GitOps sync",
					},
				],
				default: "listgitopssyncs",
			},

			// ----------------------------------
			//         health operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["health"],
					},
				},
				options: [
					{
						name: 'Health Check',
						value: "healthCheck",
						description: "GET /health",
						action: "Health check",
					},
					{
						name: 'Health Check (HEAD)',
						value: "healthCheckHead",
						description: "HEAD /health",
						action: "Health check (HEAD)",
					},
				],
				default: "healthCheck",
			},

			// ----------------------------------
			//         imageUpdates operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
					},
				},
				options: [
					{
						name: 'Check Image Update by Reference',
						value: "checkImageUpdate",
						description: 'GET /environments/{ID}/image-updates/check',
						action: "Check image update by reference",
					},
					{
						name: 'Check All Images',
						value: "checkAllImages",
						description: 'POST /environments/{ID}/image-updates/check-all',
						action: "Check all images",
					},
					{
						name: 'Check Multiple Images',
						value: "checkMultipleImages",
						description: 'POST /environments/{ID}/image-updates/check-batch',
						action: "Check multiple images",
					},
					{
						name: 'Check Image Update by ID',
						value: "checkImageUpdateById",
						description: 'GET /environments/{ID}/image-updates/check/{imageId}',
						action: "Check image update by ID",
					},
					{
						name: 'Check Image Update by ID (POST)',
						value: "checkImageUpdateByIdPost",
						description: 'POST /environments/{ID}/image-updates/check/{imageId}',
						action: "Check image update by ID (POST)",
					},
					{
						name: 'Get Update Summary',
						value: "getUpdateSummary",
						description: 'GET /environments/{ID}/image-updates/summary',
						action: "Get update summary",
					},
				],
				default: "checkImageUpdate",
			},

			// ----------------------------------
			//         images operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["images"],
					},
				},
				options: [
					{
						name: 'List Images',
						value: "listImages",
						description: 'GET /environments/{ID}/images',
						action: "List images",
					},
					{
						name: 'Get Image Usage Counts',
						value: "getImageUsageCounts",
						description: 'GET /environments/{ID}/images/counts',
						action: "Get image usage counts",
					},
					{
						name: 'Prune Unused Images',
						value: "pruneImages",
						description: 'POST /environments/{ID}/images/prune',
						action: "Prune unused images",
					},
					{
						name: 'Pull an Image',
						value: "pullImage",
						description: 'POST /environments/{ID}/images/pull',
						action: "Pull an image",
					},
					{
						name: 'Upload an Image',
						value: "uploadImage",
						description: 'POST /environments/{ID}/images/upload',
						action: "Upload an image",
					},
					{
						name: 'Remove an Image',
						value: "removeImage",
						description: 'DELETE /environments/{ID}/images/{imageId}',
						action: "Remove an image",
					},
					{
						name: 'Get Image by ID',
						value: "getImage",
						description: 'GET /environments/{ID}/images/{imageId}',
						action: "Get image by ID",
					},
				],
				default: "listImages",
			},

			// ----------------------------------
			//         jobschedules operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["jobschedules"],
					},
				},
				options: [
					{
						name: 'Get Job Schedules',
						value: "getJobSchedules",
						description: 'GET /environments/{ID}/job-schedules',
						action: "Get job schedules",
					},
					{
						name: 'Update Job Schedules',
						value: "updateJobSchedules",
						description: 'PUT /environments/{ID}/job-schedules',
						action: "Update job schedules",
					},
					{
						name: 'List All Background Jobs',
						value: "listJobs",
						description: 'GET /environments/{ID}/jobs',
						action: "List all background jobs",
					},
					{
						name: 'Run a Job Now',
						value: "runJob",
						description: 'POST /environments/{ID}/jobs/{jobId}/run',
						action: "Run a job now",
					},
				],
				default: "getJobSchedules",
			},

			// ----------------------------------
			//         networks operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["networks"],
					},
				},
				options: [
					{
						name: 'List Networks',
						value: "listNetworks",
						description: 'GET /environments/{ID}/networks',
						action: "List networks",
					},
					{
						name: 'Create Network',
						value: "createNetwork",
						description: 'POST /environments/{ID}/networks',
						action: "Create network",
					},
					{
						name: 'Network Counts',
						value: "networkCounts",
						description: 'GET /environments/{ID}/networks/counts',
						action: "Network counts",
					},
					{
						name: 'Prune Networks',
						value: "pruneNetworks",
						description: 'POST /environments/{ID}/networks/prune',
						action: "Prune networks",
					},
					{
						name: 'Delete Network',
						value: "deleteNetwork",
						description: 'DELETE /environments/{ID}/networks/{networkId}',
						action: "Delete network",
					},
					{
						name: 'Get Network',
						value: "getNetwork",
						description: 'GET /environments/{ID}/networks/{networkId}',
						action: "Get network",
					},
				],
				default: "listNetworks",
			},

			// ----------------------------------
			//         notifications operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["notifications"],
					},
				},
				options: [
					{
						name: 'Get Apprise Settings',
						value: "getAppriseSettings",
						description: 'GET /environments/{ID}/notifications/apprise',
						action: "Get Apprise settings",
					},
					{
						name: 'Create or Update Apprise Settings',
						value: "createOrUpdateAppriseSettings",
						description: 'POST /environments/{ID}/notifications/apprise',
						action: "Create or update Apprise settings",
					},
					{
						name: 'Test Apprise Notification',
						value: "testAppriseNotification",
						description: 'POST /environments/{ID}/notifications/apprise/test',
						action: "Test Apprise notification",
					},
					{
						name: 'Get All Notification Settings',
						value: "getAllNotificationSettings",
						description: 'GET /environments/{ID}/notifications/settings',
						action: "Get all notification settings",
					},
					{
						name: 'Create or Update Notification Settings',
						value: "createOrUpdateNotificationSettings",
						description: 'POST /environments/{ID}/notifications/settings',
						action: "Create or update notification settings",
					},
					{
						name: 'Delete Notification Settings',
						value: "deleteNotificationSettings",
						description: 'DELETE /environments/{ID}/notifications/settings/{provider}',
						action: "Delete notification settings",
					},
					{
						name: 'Get Notification Settings by Provider',
						value: "getNotificationSettings",
						description: 'GET /environments/{ID}/notifications/settings/{provider}',
						action: "Get notification settings by provider",
					},
					{
						name: 'Test Notification',
						value: "testNotification",
						description: 'POST /environments/{ID}/notifications/test/{provider}',
						action: "Test notification",
					},
				],
				default: "getAppriseSettings",
			},

			// ----------------------------------
			//         oidc operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["oidc"],
					},
				},
				options: [
					{
						name: 'Handle OIDC Callback',
						value: "handleOidcCallback",
						description: "POST /oidc/callback",
						action: "Handle OIDC callback",
					},
					{
						name: 'Get OIDC Config',
						value: "getOidcConfig",
						description: "GET /oidc/config",
						action: "Get OIDC config",
					},
					{
						name: 'Initiate OIDC Device Authorization',
						value: "initiateOidcDeviceAuth",
						description: "POST /oidc/device/code",
						action: "Initiate OIDC device authorization",
					},
					{
						name: 'Exchange Device Code for Tokens',
						value: "exchangeOidcDeviceToken",
						description: "POST /oidc/device/token",
						action: "Exchange device code for tokens",
					},
					{
						name: 'Get OIDC Status',
						value: "getOidcStatus",
						description: "GET /oidc/status",
						action: "Get OIDC status",
					},
					{
						name: 'Get OIDC Auth URL',
						value: "getOidcAuthUrl",
						description: "POST /oidc/url",
						action: "Get OIDC auth URL",
					},
				],
				default: "handleOidcCallback",
			},

			// ----------------------------------
			//         projects operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["projects"],
					},
				},
				options: [
					{
						name: 'List Projects',
						value: "listProjects",
						description: 'GET /environments/{ID}/projects',
						action: "List projects",
					},
					{
						name: 'Create a Project',
						value: "createProject",
						description: 'POST /environments/{ID}/projects',
						action: "Create a project",
					},
					{
						name: 'Get Project Status Counts',
						value: "getProjectStatusCounts",
						description: 'GET /environments/{ID}/projects/counts',
						action: "Get project status counts",
					},
					{
						name: 'Get a Project',
						value: "getProject",
						description: 'GET /environments/{ID}/projects/{projectId}',
						action: "Get a project",
					},
					{
						name: 'Update a Project',
						value: "updateProject",
						description: 'PUT /environments/{ID}/projects/{projectId}',
						action: "Update a project",
					},
					{
						name: 'Destroy a Project',
						value: "destroyProject",
						description: 'DELETE /environments/{ID}/projects/{projectId}/destroy',
						action: "Destroy a project",
					},
					{
						name: 'Bring Down a Project',
						value: "downProject",
						description: 'POST /environments/{ID}/projects/{projectId}/down',
						action: "Bring down a project",
					},
					{
						name: 'Update Project Include File',
						value: "updateProjectInclude",
						description: 'PUT /environments/{ID}/projects/{projectId}/includes',
						action: "Update project include file",
					},
					{
						name: 'Pull Project Images',
						value: "pullProjectImages",
						description: 'POST /environments/{ID}/projects/{projectId}/pull',
						action: "Pull project images",
					},
					{
						name: 'Redeploy a Project',
						value: "redeployProject",
						description: 'POST /environments/{ID}/projects/{projectId}/redeploy',
						action: "Redeploy a project",
					},
					{
						name: 'Restart a Project',
						value: "restartProject",
						description: 'POST /environments/{ID}/projects/{projectId}/restart',
						action: "Restart a project",
					},
					{
						name: 'Deploy a Project',
						value: "deployProject",
						description: 'POST /environments/{ID}/projects/{projectId}/up',
						action: "Deploy a project",
					},
				],
				default: "listProjects",
			},

			// ----------------------------------
			//         settings operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["settings"],
					},
				},
				options: [
					{
						name: 'Get Settings',
						value: "getSettings",
						description: 'GET /environments/{ID}/settings',
						action: "Get settings",
					},
					{
						name: 'Update Settings',
						value: "updateSettings",
						description: 'PUT /environments/{ID}/settings',
						action: "Update settings",
					},
					{
						name: 'Get Public Settings',
						value: "getPublicSettings",
						description: 'GET /environments/{ID}/settings/public',
						action: "Get public settings",
					},
					{
						name: 'Get Settings Categories',
						value: "getSettingsCategories",
						description: "GET /settings/categories",
						action: "Get settings categories",
					},
					{
						name: 'Search Settings',
						value: "searchSettings",
						description: "POST /settings/search",
						action: "Search settings",
					},
				],
				default: "getSettings",
			},

			// ----------------------------------
			//         system operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["system"],
					},
				},
				options: [
					{
						name: 'Start All Containers',
						value: "startAllContainers",
						description: 'POST /environments/{ID}/system/containers/start-all',
						action: "Start all containers",
					},
					{
						name: 'Start All Stopped Containers',
						value: "startAllStoppedContainers",
						description: 'POST /environments/{ID}/system/containers/start-stopped',
						action: "Start all stopped containers",
					},
					{
						name: 'Stop All Containers',
						value: "stopAllContainers",
						description: 'POST /environments/{ID}/system/containers/stop-all',
						action: "Stop all containers",
					},
					{
						name: 'Convert Docker Run Command',
						value: "convertDockerRun",
						description: 'POST /environments/{ID}/system/convert',
						action: "Convert docker run command",
					},
					{
						name: 'Get Docker Info',
						value: "getDockerInfo",
						description: 'GET /environments/{ID}/system/docker/info',
						action: "Get Docker info",
					},
					{
						name: 'Check System Health',
						value: "systemHealth",
						description: 'HEAD /environments/{ID}/system/health',
						action: "Check system health",
					},
					{
						name: 'Prune Docker Resources',
						value: "pruneAll",
						description: 'POST /environments/{ID}/system/prune',
						action: "Prune Docker resources",
					},
					{
						name: 'Trigger System Upgrade',
						value: "triggerUpgrade",
						description: 'POST /environments/{ID}/system/upgrade',
						action: "Trigger system upgrade",
					},
					{
						name: 'Check for System Upgrade',
						value: "checkUpgrade",
						description: 'GET /environments/{ID}/system/upgrade/check',
						action: "Check for system upgrade",
					},
				],
				default: "startAllContainers",
			},

			// ----------------------------------
			//         templates operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["templates"],
					},
				},
				options: [
					{
						name: 'List Templates (Paginated)',
						value: "listtemplatespaginated",
						description: "GET /templates",
						action: "List templates (paginated)",
					},
					{
						name: 'Create a Template',
						value: "createtemplate",
						description: "POST /templates",
						action: "Create a template",
					},
					{
						name: 'List All Templates',
						value: "getalltemplates",
						description: "GET /templates/all",
						action: "List all templates",
					},
					{
						name: 'Get Default Templates',
						value: "getdefaulttemplates",
						description: "GET /templates/default",
						action: "Get default templates",
					},
					{
						name: 'Save Default Templates',
						value: "savedefaulttemplates",
						description: "POST /templates/default",
						action: "Save default templates",
					},
					{
						name: 'Fetch Remote Registry',
						value: "fetchtemplateregistry",
						description: "GET /templates/fetch",
						action: "Fetch remote registry",
					},
					{
						name: 'List Template Registries',
						value: "gettemplateregistries",
						description: "GET /templates/registries",
						action: "List template registries",
					},
					{
						name: 'Create a Template Registry',
						value: "createtemplateregistry",
						description: "POST /templates/registries",
						action: "Create a template registry",
					},
					{
						name: 'Delete a Template Registry',
						value: "deletetemplateregistry",
						description: 'DELETE /templates/registries/{ID}',
						action: "Delete a template registry",
					},
					{
						name: 'Update a Template Registry',
						value: "updatetemplateregistry",
						description: 'PUT /templates/registries/{ID}',
						action: "Update a template registry",
					},
					{
						name: 'Get Global Variables',
						value: "getglobalvariables",
						description: "GET /templates/variables",
						action: "Get global variables",
					},
					{
						name: 'Update Global Variables',
						value: "updateglobalvariables",
						description: "PUT /templates/variables",
						action: "Update global variables",
					},
					{
						name: 'Delete a Template',
						value: "deletetemplate",
						description: 'DELETE /templates/{ID}',
						action: "Delete a template",
					},
					{
						name: 'Get a Template',
						value: "gettemplate",
						description: 'GET /templates/{ID}',
						action: "Get a template",
					},
					{
						name: 'Update a Template',
						value: "updatetemplate",
						description: 'PUT /templates/{ID}',
						action: "Update a template",
					},
					{
						name: 'Get Template Content',
						value: "gettemplatecontent",
						description: 'GET /templates/{ID}/content',
						action: "Get template content",
					},
					{
						name: 'Download a Template',
						value: "downloadtemplate",
						description: 'POST /templates/{ID}/download',
						action: "Download a template",
					},
				],
				default: "listtemplatespaginated",
			},

			// ----------------------------------
			//         updater operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["updater"],
					},
				},
				options: [
					{
						name: 'Update a Single Container',
						value: "updateContainer",
						description: 'POST /environments/{ID}/containers/{containerId}/update',
						action: "Update a single container",
					},
					{
						name: 'Get Updater History',
						value: "getUpdaterHistory",
						description: 'GET /environments/{ID}/updater/history',
						action: "Get updater history",
					},
					{
						name: 'Run Updater',
						value: "runUpdater",
						description: 'POST /environments/{ID}/updater/run',
						action: "Run updater",
					},
					{
						name: 'Get Updater Status',
						value: "getUpdaterStatus",
						description: 'GET /environments/{ID}/updater/status',
						action: "Get updater status",
					},
				],
				default: "updateContainer",
			},

			// ----------------------------------
			//         users operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["users"],
					},
				},
				options: [
					{
						name: 'List Users',
						value: "listusers",
						description: "GET /users",
						action: "List users",
					},
					{
						name: 'Create a User',
						value: "createuser",
						description: "POST /users",
						action: "Create a user",
					},
					{
						name: 'Delete a User',
						value: "deleteuser",
						description: "DELETE /users/{userId}",
						action: "Delete a user",
					},
					{
						name: 'Get a User',
						value: "getuser",
						description: "GET /users/{userId}",
						action: "Get a user",
					},
					{
						name: 'Update a User',
						value: "updateuser",
						description: "PUT /users/{userId}",
						action: "Update a user",
					},
				],
				default: "listusers",
			},

			// ----------------------------------
			//         version operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["version"],
					},
				},
				options: [
					{
						name: 'Get App Version',
						value: "getappversion",
						description: "GET /app-version",
						action: "Get app version",
					},
					{
						name: 'Get Version Information',
						value: "getversion",
						description: "GET /version",
						action: "Get version information",
					},
				],
				default: "getappversion",
			},

			// ----------------------------------
			//         volumeBackup operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
					},
				},
				options: [
					{
						name: 'Delete Volume Backup',
						value: "deleteVolumeBackup",
						description: 'DELETE /environments/{ID}/volumes/backups/{backupId}',
						action: "Delete volume backup",
					},
					{
						name: 'Download Volume Backup',
						value: "downloadVolumeBackup",
						description: 'GET /environments/{ID}/volumes/backups/{backupId}/download',
						action: "Download volume backup",
					},
					{
						name: 'List Files in a Volume Backup',
						value: "listBackupFiles",
						description: 'GET /environments/{ID}/volumes/backups/{backupId}/files',
						action: "List files in a volume backup",
					},
					{
						name: 'Check if Backup Contains Path',
						value: "backupHasPath",
						description: 'GET /environments/{ID}/volumes/backups/{backupId}/has-path',
						action: "Check if backup contains path",
					},
					{
						name: 'List Volume Backups',
						value: "listVolumeBackups",
						description: 'GET /environments/{ID}/volumes/{volumeName}/backups',
						action: "List volume backups",
					},
					{
						name: 'Create Volume Backup',
						value: "createVolumeBackup",
						description: 'POST /environments/{ID}/volumes/{volumeName}/backups',
						action: "Create volume backup",
					},
					{
						name: 'Upload and Restore Volume Backup',
						value: "uploadVolumeBackup",
						description: 'POST /environments/{ID}/volumes/{volumeName}/backups/upload',
						action: "Upload and restore volume backup",
					},
					{
						name: 'Restore Volume Backup',
						value: "restoreVolumeBackup",
						description: 'POST /environments/{ID}/volumes/{volumeName}/backups/{backupId}/restore',
						action: "Restore volume backup",
					},
					{
						name: 'Restore Specific Files From a Volume Backup',
						value: "restoreVolumeBackupFiles",
						description: 'POST /environments/{ID}/volumes/{volumeName}/backups/{backupId}/restore-files',
						action: "Restore specific files from a volume backup",
					},
				],
				default: "deleteVolumeBackup",
			},

			// ----------------------------------
			//         volumeBrowser operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
					},
				},
				options: [
					{
						name: 'Delete File or Directory in Volume',
						value: "deleteVolumeFile",
						description: 'DELETE /environments/{ID}/volumes/{volumeName}/browse',
						action: "Delete file or directory in volume",
					},
					{
						name: 'List Volume Directory',
						value: "browseVolumeDirectory",
						description: 'GET /environments/{ID}/volumes/{volumeName}/browse',
						action: "List volume directory",
					},
					{
						name: 'Get File Content Preview',
						value: "getVolumeFileContent",
						description: 'GET /environments/{ID}/volumes/{volumeName}/browse/content',
						action: "Get file content preview",
					},
					{
						name: 'Download File From Volume',
						value: "downloadVolumeFile",
						description: 'GET /environments/{ID}/volumes/{volumeName}/browse/download',
						action: "Download file from volume",
					},
					{
						name: 'Create Directory in Volume',
						value: "createVolumeDirectory",
						description: 'POST /environments/{ID}/volumes/{volumeName}/browse/mkdir',
						action: "Create directory in volume",
					},
					{
						name: 'Upload File to Volume',
						value: "uploadVolumeFile",
						description: 'POST /environments/{ID}/volumes/{volumeName}/browse/upload',
						action: "Upload file to volume",
					},
				],
				default: "deleteVolumeFile",
			},

			// ----------------------------------
			//         volumes operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["volumes"],
					},
				},
				options: [
					{
						name: 'List Volumes',
						value: "listVolumes",
						description: 'GET /environments/{ID}/volumes',
						action: "List volumes",
					},
					{
						name: 'Create a Volume',
						value: "createVolume",
						description: 'POST /environments/{ID}/volumes',
						action: "Create a volume",
					},
					{
						name: 'Get Volume Usage Counts',
						value: "getVolumeUsageCounts",
						description: 'GET /environments/{ID}/volumes/counts',
						action: "Get volume usage counts",
					},
					{
						name: 'Prune Unused Volumes',
						value: "pruneVolumes",
						description: 'POST /environments/{ID}/volumes/prune',
						action: "Prune unused volumes",
					},
					{
						name: 'Get Volume Sizes',
						value: "getVolumeSizes",
						description: 'GET /environments/{ID}/volumes/sizes',
						action: "Get volume sizes",
					},
					{
						name: 'Remove a Volume',
						value: "removeVolume",
						description: 'DELETE /environments/{ID}/volumes/{volumeName}',
						action: "Remove a volume",
					},
					{
						name: 'Get Volume by Name',
						value: "getVolume",
						description: 'GET /environments/{ID}/volumes/{volumeName}',
						action: "Get volume by name",
					},
					{
						name: 'Get Volume Usage',
						value: "getVolumeUsage",
						description: 'GET /environments/{ID}/volumes/{volumeName}/usage',
						action: "Get volume usage",
					},
				],
				default: "listVolumes",
			},

			// ----------------------------------
			//         vulnerabilities operations
			// ----------------------------------
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
					},
				},
				options: [
					{
						name: 'Get Vulnerability Scan Summaries',
						value: "getImageVulnerabilitySummaries",
						description: 'POST /environments/{ID}/images/vulnerabilities/summaries',
						action: "Get vulnerability scan summaries",
					},
					{
						name: 'Get Vulnerability Scan Result',
						value: "getImageVulnerabilities",
						description: 'GET /environments/{ID}/images/{imageId}/vulnerabilities',
						action: "Get vulnerability scan result",
					},
					{
						name: 'List Image Vulnerabilities',
						value: "listImageVulnerabilities",
						description: 'GET /environments/{ID}/images/{imageId}/vulnerabilities/list',
						action: "List image vulnerabilities",
					},
					{
						name: 'Scan Image for Vulnerabilities',
						value: "scanImageVulnerabilities",
						description: 'POST /environments/{ID}/images/{imageId}/vulnerabilities/scan',
						action: "Scan image for vulnerabilities",
					},
					{
						name: 'Get Vulnerability Scan Summary',
						value: "getImageVulnerabilitySummary",
						description: 'GET /environments/{ID}/images/{imageId}/vulnerabilities/summary',
						action: "Get vulnerability scan summary",
					},
					{
						name: 'List Environment Vulnerabilities',
						value: "listEnvironmentVulnerabilities",
						description: 'GET /environments/{ID}/vulnerabilities/all',
						action: "List environment vulnerabilities",
					},
					{
						name: 'Ignore a Vulnerability',
						value: "ignoreVulnerability",
						description: 'POST /environments/{ID}/vulnerabilities/ignore',
						action: "Ignore a vulnerability",
					},
					{
						name: 'Unignore a Vulnerability',
						value: "unignoreVulnerability",
						description: 'DELETE /environments/{ID}/vulnerabilities/ignore/{ignoreId}',
						action: "Unignore a vulnerability",
					},
					{
						name: 'List Ignored Vulnerabilities',
						value: "listIgnoredVulnerabilities",
						description: 'GET /environments/{ID}/vulnerabilities/ignored',
						action: "List ignored vulnerabilities",
					},
					{
						name: 'Get Vulnerability Scanner Status',
						value: "getVulnerabilityScannerStatus",
						description: 'GET /environments/{ID}/vulnerabilities/scanner-status',
						action: "Get vulnerability scanner status",
					},
					{
						name: 'Get Environment Vulnerability Summary',
						value: "getEnvironmentVulnerabilitySummary",
						description: 'GET /environments/{ID}/vulnerabilities/summary',
						action: "Get environment vulnerability summary",
					},
				],
				default: "getImageVulnerabilitySummaries",
			},

			// apiKeys:listApiKeys query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["apiKeys"],
						operation: ["listApiKeys"],
					},
				},
				options: [
					{
						displayName: 'Search Query for Filtering by Name or Description',
						name: "search",
						type: "string",
						default: "",
						description: "Search query for filtering by name or description",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction (Asc or Desc)',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction (asc or desc)",
					},
					{
						displayName: 'Start Index for Pagination',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index for pagination",
					},
					{
						displayName: 'Number of Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Number of items per page",
					},
				],
			},

			// apiKeys:createApiKey body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["apiKeys"],
						operation: ["createApiKey"],
					},
				},
				description: "JSON request body",
			},

			// apiKeys:deleteApiKey id
			{
				displayName: 'API Key ID',
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["apiKeys"],
						operation: ["deleteApiKey"],
					},
				},
				description: "API key ID",
			},

			// apiKeys:getApiKey id
			{
				displayName: 'API Key ID',
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["apiKeys"],
						operation: ["getApiKey"],
					},
				},
				description: "API key ID",
			},

			// apiKeys:updateApiKey id
			{
				displayName: 'API Key ID',
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["apiKeys"],
						operation: ["updateApiKey"],
					},
				},
				description: "API key ID",
			},

			// apiKeys:updateApiKey body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["apiKeys"],
						operation: ["updateApiKey"],
					},
				},
				description: "JSON request body",
			},

			// applicationImages:getLogo query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["applicationImages"],
						operation: ["getLogo"],
					},
				},
				options: [
					{
						displayName: 'Return Full Logo Instead of Icon',
						name: "full",
						type: "boolean",
						default: false,
						description: "Return full logo instead of icon",
					},
					{
						displayName: 'Optional Accent Color Override for Preview (e.g., \'oklch(0.65 0.2 150)\')',
						name: "color",
						type: "string",
						default: "",
						description: "Optional accent color override for preview (e.g., 'oklch(0.65 0.2 150)')",
					},
				],
			},

			// auth:login body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["auth"],
						operation: ["login"],
					},
				},
				description: "JSON request body",
			},

			// auth:changePassword body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["auth"],
						operation: ["changePassword"],
					},
				},
				description: "JSON request body",
			},

			// auth:refreshToken body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["auth"],
						operation: ["refreshToken"],
					},
				},
				description: "JSON request body",
			},

			// containerRegistries:listcontainerregistries query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["listcontainerregistries"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: 'Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Items per page",
					},
				],
			},

			// containerRegistries:createcontainerregistry body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["createcontainerregistry"],
					},
				},
				description: "JSON request body",
			},

			// containerRegistries:synccontainerregistries body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["synccontainerregistries"],
					},
				},
				description: "JSON request body",
			},

			// containerRegistries:deletecontainerregistry id
			{
				displayName: "Registry ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["deletecontainerregistry"],
					},
				},
				description: "Registry ID",
			},

			// containerRegistries:getcontainerregistry id
			{
				displayName: "Registry ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["getcontainerregistry"],
					},
				},
				description: "Registry ID",
			},

			// containerRegistries:updatecontainerregistry id
			{
				displayName: "Registry ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["updatecontainerregistry"],
					},
				},
				description: "Registry ID",
			},

			// containerRegistries:updatecontainerregistry body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["updatecontainerregistry"],
					},
				},
				description: "JSON request body",
			},

			// containerRegistries:testcontainerregistry id
			{
				displayName: "Registry ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containerRegistries"],
						operation: ["testcontainerregistry"],
					},
				},
				description: "Registry ID",
			},

			// containers:listContainers id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["listContainers"],
					},
				},
				description: "Environment ID",
			},

			// containers:listContainers query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["listContainers"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: "Limit",
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Limit",
					},
					{
						displayName: 'Include Internal Containers',
						name: "includeInternal",
						type: "boolean",
						default: false,
						description: "Include internal containers",
					},
					{
						displayName: 'Filter by Update Status (Has_update, Up_to_date, Error, Unknown)',
						name: "updates",
						type: "string",
						default: "",
						description: "Filter by update status (has_update, up_to_date, error, unknown)",
					},
				],
			},

			// containers:createContainer id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["createContainer"],
					},
				},
				description: "Environment ID",
			},

			// containers:createContainer body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["createContainer"],
					},
				},
				description: "JSON request body",
			},

			// containers:containerStatusCounts id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["containerStatusCounts"],
					},
				},
				description: "Environment ID",
			},

			// containers:containerStatusCounts query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["containerStatusCounts"],
					},
				},
				options: [
					{
						displayName: 'Include Internal Containers',
						name: "includeInternal",
						type: "boolean",
						default: false,
						description: "Include internal containers",
					},
				],
			},

			// containers:deleteContainer id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["deleteContainer"],
					},
				},
				description: "Environment ID",
			},

			// containers:deleteContainer containerId
			{
				displayName: "Container ID",
				name: "containerId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["deleteContainer"],
					},
				},
				description: "Container ID",
			},

			// containers:deleteContainer query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["deleteContainer"],
					},
				},
				options: [
					{
						displayName: 'Force Delete Running Container',
						name: "force",
						type: "boolean",
						default: false,
						description: "Force delete running container",
					},
					{
						displayName: 'Remove Associated Volumes',
						name: "volumes",
						type: "boolean",
						default: false,
						description: "Remove associated volumes",
					},
				],
			},

			// containers:getContainer id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["getContainer"],
					},
				},
				description: "Environment ID",
			},

			// containers:getContainer containerId
			{
				displayName: "Container ID",
				name: "containerId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["getContainer"],
					},
				},
				description: "Container ID",
			},

			// containers:restartContainer id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["restartContainer"],
					},
				},
				description: "Environment ID",
			},

			// containers:restartContainer containerId
			{
				displayName: "Container ID",
				name: "containerId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["restartContainer"],
					},
				},
				description: "Container ID",
			},

			// containers:startContainer id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["startContainer"],
					},
				},
				description: "Environment ID",
			},

			// containers:startContainer containerId
			{
				displayName: "Container ID",
				name: "containerId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["startContainer"],
					},
				},
				description: "Container ID",
			},

			// containers:stopContainer id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["stopContainer"],
					},
				},
				description: "Environment ID",
			},

			// containers:stopContainer containerId
			{
				displayName: "Container ID",
				name: "containerId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["containers"],
						operation: ["stopContainer"],
					},
				},
				description: "Container ID",
			},

			// customize:listgitrepositories query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["listgitrepositories"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: 'Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Items per page",
					},
				],
			},

			// customize:creategitrepository body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["creategitrepository"],
					},
				},
				description: "JSON request body",
			},

			// customize:deletegitrepository id
			{
				displayName: "Repository ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["deletegitrepository"],
					},
				},
				description: "Repository ID",
			},

			// customize:getgitrepository id
			{
				displayName: "Repository ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["getgitrepository"],
					},
				},
				description: "Repository ID",
			},

			// customize:updategitrepository id
			{
				displayName: "Repository ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["updategitrepository"],
					},
				},
				description: "Repository ID",
			},

			// customize:updategitrepository body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["updategitrepository"],
					},
				},
				description: "JSON request body",
			},

			// customize:listgitrepositorybranches id
			{
				displayName: "Repository ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["listgitrepositorybranches"],
					},
				},
				description: "Repository ID",
			},

			// customize:browsegitrepositoryfiles id
			{
				displayName: "Repository ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["browsegitrepositoryfiles"],
					},
				},
				description: "Repository ID",
			},

			// customize:browsegitrepositoryfiles query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["browsegitrepositoryfiles"],
					},
				},
				options: [
					{
						displayName: 'Branch to Browse',
						name: "branch",
						type: "string",
						default: "",
						description: "Branch to browse",
					},
					{
						displayName: 'Path Within Repository (Optional)',
						name: "path",
						type: "string",
						default: "",
						description: "Path within repository (optional)",
					},
				],
			},

			// customize:testgitrepository id
			{
				displayName: "Repository ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["testgitrepository"],
					},
				},
				description: "Repository ID",
			},

			// customize:testgitrepository query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["testgitrepository"],
					},
				},
				options: [
					{
						displayName: 'Branch to Test (Optional, Defaults to Main)',
						name: "branch",
						type: "string",
						default: "",
						description: "Branch to test (optional, defaults to main)",
					},
				],
			},

			// customize:searchCustomize body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["customize"],
						operation: ["searchCustomize"],
					},
				},
				description: "JSON request body",
			},

			// environments:listenvironments query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["listenvironments"],
					},
				},
				options: [
					{
						displayName: 'Search Query for Filtering by Name or API URL',
						name: "search",
						type: "string",
						default: "",
						description: "Search query for filtering by name or API URL",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction (Asc or Desc)',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction (asc or desc)",
					},
					{
						displayName: 'Start Index for Pagination',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index for pagination",
					},
					{
						displayName: 'Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Items per page",
					},
				],
			},

			// environments:createenvironment body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["createenvironment"],
					},
				},
				description: "JSON request body",
			},

			// environments:deleteenvironment id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["deleteenvironment"],
					},
				},
				description: "Environment ID",
			},

			// environments:getenvironment id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["getenvironment"],
					},
				},
				description: "Environment ID",
			},

			// environments:updateenvironment id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["updateenvironment"],
					},
				},
				description: "Environment ID",
			},

			// environments:updateenvironment body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["updateenvironment"],
					},
				},
				description: "JSON request body",
			},

			// environments:pairagent id
			{
				displayName: 'Environment ID (Must Be 0 for Local)',
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["pairagent"],
					},
				},
				description: "Environment ID (must be 0 for local)",
			},

			// environments:pairagent body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["pairagent"],
					},
				},
				description: "JSON request body",
			},

			// environments:getdeploymentsnippets id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["getdeploymentsnippets"],
					},
				},
				description: "Environment ID",
			},

			// environments:updateheartbeat id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["updateheartbeat"],
					},
				},
				description: "Environment ID",
			},

			// environments:syncenvironment id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["syncenvironment"],
					},
				},
				description: "Environment ID",
			},

			// environments:testconnection id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["testconnection"],
					},
				},
				description: "Environment ID",
			},

			// environments:testconnection body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["testconnection"],
					},
				},
				description: "JSON request body",
			},

			// environments:getenvironmentversion id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["environments"],
						operation: ["getenvironmentversion"],
					},
				},
				description: "Environment ID",
			},

			// events:listevents query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["events"],
						operation: ["listevents"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: "Limit",
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Limit",
					},
					{
						displayName: 'Filter by Severity',
						name: "severity",
						type: "string",
						default: "",
						description: "Filter by severity",
					},
					{
						displayName: 'Filter by Event Type',
						name: "type",
						type: "string",
						default: "",
						description: "Filter by event type",
					},
				],
			},

			// events:createevent body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["events"],
						operation: ["createevent"],
					},
				},
				description: "JSON request body",
			},

			// events:geteventsbyenvironment environmentId
			{
				displayName: "Environment ID",
				name: "environmentId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["events"],
						operation: ["geteventsbyenvironment"],
					},
				},
				description: "Environment ID",
			},

			// events:geteventsbyenvironment query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["events"],
						operation: ["geteventsbyenvironment"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: "Limit",
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Limit",
					},
					{
						displayName: 'Filter by Severity',
						name: "severity",
						type: "string",
						default: "",
						description: "Filter by severity",
					},
					{
						displayName: 'Filter by Event Type',
						name: "type",
						type: "string",
						default: "",
						description: "Filter by event type",
					},
				],
			},

			// events:deleteevent eventId
			{
				displayName: "Event ID",
				name: "eventId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["events"],
						operation: ["deleteevent"],
					},
				},
				description: "Event ID",
			},

			// gitRepositories:syncgitrepositories body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["gitRepositories"],
						operation: ["syncgitrepositories"],
					},
				},
				description: "JSON request body",
			},

			// gitopsSyncs:listgitopssyncs id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["listgitopssyncs"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:listgitopssyncs query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["listgitopssyncs"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: 'Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Items per page",
					},
				],
			},

			// gitopsSyncs:creategitopssync id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["creategitopssync"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:creategitopssync body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["creategitopssync"],
					},
				},
				description: "JSON request body",
			},

			// gitopsSyncs:importgitopssyncs id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["importgitopssyncs"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:importgitopssyncs body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["importgitopssyncs"],
					},
				},
				description: "JSON request body",
			},

			// gitopsSyncs:deletegitopssync id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["deletegitopssync"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:deletegitopssync syncId
			{
				displayName: "Sync ID",
				name: "syncId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["deletegitopssync"],
					},
				},
				description: "Sync ID",
			},

			// gitopsSyncs:getgitopssync id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["getgitopssync"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:getgitopssync syncId
			{
				displayName: "Sync ID",
				name: "syncId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["getgitopssync"],
					},
				},
				description: "Sync ID",
			},

			// gitopsSyncs:updategitopssync id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["updategitopssync"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:updategitopssync syncId
			{
				displayName: "Sync ID",
				name: "syncId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["updategitopssync"],
					},
				},
				description: "Sync ID",
			},

			// gitopsSyncs:updategitopssync body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["updategitopssync"],
					},
				},
				description: "JSON request body",
			},

			// gitopsSyncs:browsegitopssyncfiles id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["browsegitopssyncfiles"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:browsegitopssyncfiles syncId
			{
				displayName: "Sync ID",
				name: "syncId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["browsegitopssyncfiles"],
					},
				},
				description: "Sync ID",
			},

			// gitopsSyncs:browsegitopssyncfiles query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["browsegitopssyncfiles"],
					},
				},
				options: [
					{
						displayName: 'Path to Browse (Optional)',
						name: "path",
						type: "string",
						default: "",
						description: "Path to browse (optional)",
					},
				],
			},

			// gitopsSyncs:getgitopssyncstatus id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["getgitopssyncstatus"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:getgitopssyncstatus syncId
			{
				displayName: "Sync ID",
				name: "syncId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["getgitopssyncstatus"],
					},
				},
				description: "Sync ID",
			},

			// gitopsSyncs:performgitopssync id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["performgitopssync"],
					},
				},
				description: "Environment ID",
			},

			// gitopsSyncs:performgitopssync syncId
			{
				displayName: "Sync ID",
				name: "syncId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["gitopsSyncs"],
						operation: ["performgitopssync"],
					},
				},
				description: "Sync ID",
			},

			// imageUpdates:checkImageUpdate id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkImageUpdate"],
					},
				},
				description: "Environment ID",
			},

			// imageUpdates:checkImageUpdate query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkImageUpdate"],
					},
				},
				options: [
					{
						displayName: 'Image Reference',
						name: "imageRef",
						type: "string",
						default: "",
						description: "Image reference",
					},
				],
			},

			// imageUpdates:checkAllImages id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkAllImages"],
					},
				},
				description: "Environment ID",
			},

			// imageUpdates:checkAllImages body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkAllImages"],
					},
				},
				description: "JSON request body",
			},

			// imageUpdates:checkMultipleImages id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkMultipleImages"],
					},
				},
				description: "Environment ID",
			},

			// imageUpdates:checkMultipleImages body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkMultipleImages"],
					},
				},
				description: "JSON request body",
			},

			// imageUpdates:checkImageUpdateById id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkImageUpdateById"],
					},
				},
				description: "Environment ID",
			},

			// imageUpdates:checkImageUpdateById imageId
			{
				displayName: "Image ID",
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkImageUpdateById"],
					},
				},
				description: "Image ID",
			},

			// imageUpdates:checkImageUpdateByIdPost id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkImageUpdateByIdPost"],
					},
				},
				description: "Environment ID",
			},

			// imageUpdates:checkImageUpdateByIdPost imageId
			{
				displayName: "Image ID",
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["checkImageUpdateByIdPost"],
					},
				},
				description: "Image ID",
			},

			// imageUpdates:getUpdateSummary id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["imageUpdates"],
						operation: ["getUpdateSummary"],
					},
				},
				description: "Environment ID",
			},

			// images:listImages id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["listImages"],
					},
				},
				description: "Environment ID",
			},

			// images:listImages query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["listImages"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction (Asc or Desc)',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction (asc or desc)",
					},
					{
						displayName: 'Start Index for Pagination',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index for pagination",
					},
					{
						displayName: 'Number of Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Number of items per page",
					},
					{
						displayName: 'Filter by in-Use Status (True/false)',
						name: "inUse",
						type: "string",
						default: "",
						description: "Filter by in-use status (true/false)",
					},
					{
						displayName: 'Filter by Update Availability (True/false)',
						name: "updates",
						type: "string",
						default: "",
						description: "Filter by update availability (true/false)",
					},
				],
			},

			// images:getImageUsageCounts id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["getImageUsageCounts"],
					},
				},
				description: "Environment ID",
			},

			// images:pruneImages id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["pruneImages"],
					},
				},
				description: "Environment ID",
			},

			// images:pruneImages query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["pruneImages"],
					},
				},
				options: [
					{
						displayName: 'Only Remove Dangling Images',
						name: "dangling",
						type: "boolean",
						default: false,
						description: "Only remove dangling images",
					},
				],
			},

			// images:pruneImages body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["pruneImages"],
					},
				},
				description: "JSON request body",
			},

			// images:pullImage id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["pullImage"],
					},
				},
				description: "Environment ID",
			},

			// images:pullImage body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["pullImage"],
					},
				},
				description: "JSON request body",
			},

			// images:uploadImage id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["uploadImage"],
					},
				},
				description: "Environment ID",
			},

			// images:uploadImage body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["uploadImage"],
					},
				},
				description: "JSON request body",
			},

			// images:removeImage id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["removeImage"],
					},
				},
				description: "Environment ID",
			},

			// images:removeImage imageId
			{
				displayName: "Image ID",
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["removeImage"],
					},
				},
				description: "Image ID",
			},

			// images:removeImage query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["removeImage"],
					},
				},
				options: [
					{
						displayName: 'Force Removal',
						name: "force",
						type: "boolean",
						default: false,
						description: "Force removal",
					},
				],
			},

			// images:getImage id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["getImage"],
					},
				},
				description: "Environment ID",
			},

			// images:getImage imageId
			{
				displayName: "Image ID",
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["images"],
						operation: ["getImage"],
					},
				},
				description: "Image ID",
			},

			// jobschedules:getJobSchedules id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["jobschedules"],
						operation: ["getJobSchedules"],
					},
				},
				description: "Environment ID",
			},

			// jobschedules:updateJobSchedules id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["jobschedules"],
						operation: ["updateJobSchedules"],
					},
				},
				description: "Environment ID",
			},

			// jobschedules:updateJobSchedules body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["jobschedules"],
						operation: ["updateJobSchedules"],
					},
				},
				description: "JSON request body",
			},

			// jobschedules:listJobs id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["jobschedules"],
						operation: ["listJobs"],
					},
				},
				description: "Environment ID",
			},

			// jobschedules:runJob id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["jobschedules"],
						operation: ["runJob"],
					},
				},
				description: "Environment ID",
			},

			// jobschedules:runJob jobId
			{
				displayName: 'Job ID to Run',
				name: "jobId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["jobschedules"],
						operation: ["runJob"],
					},
				},
				description: "Job ID to run",
			},

			// networks:listNetworks id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["listNetworks"],
					},
				},
				description: "Environment ID",
			},

			// networks:listNetworks query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["listNetworks"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction (Asc or Desc)',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction (asc or desc)",
					},
					{
						displayName: 'Start Index for Pagination',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index for pagination",
					},
					{
						displayName: 'Number of Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Number of items per page",
					},
					{
						displayName: 'Filter by in-Use Status (True/false)',
						name: "inUse",
						type: "string",
						default: "",
						description: "Filter by in-use status (true/false)",
					},
				],
			},

			// networks:createNetwork id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["createNetwork"],
					},
				},
				description: "Environment ID",
			},

			// networks:createNetwork body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["createNetwork"],
					},
				},
				description: "JSON request body",
			},

			// networks:networkCounts id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["networkCounts"],
					},
				},
				description: "Environment ID",
			},

			// networks:pruneNetworks id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["pruneNetworks"],
					},
				},
				description: "Environment ID",
			},

			// networks:deleteNetwork id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["deleteNetwork"],
					},
				},
				description: "Environment ID",
			},

			// networks:deleteNetwork networkId
			{
				displayName: "Network ID",
				name: "networkId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["deleteNetwork"],
					},
				},
				description: "Network ID",
			},

			// networks:getNetwork id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["getNetwork"],
					},
				},
				description: "Environment ID",
			},

			// networks:getNetwork networkId
			{
				displayName: "Network ID",
				name: "networkId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["getNetwork"],
					},
				},
				description: "Network ID",
			},

			// networks:getNetwork query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["networks"],
						operation: ["getNetwork"],
					},
				},
				options: [
					{
						displayName: 'Sort',
						name: "sort",
						type: "string",
						default: "name",
						description: 'Sort',
					},
					{
						displayName: 'Order',
						name: "order",
						type: "string",
						default: "asc",
						description: 'Order',
					},
				],
			},

			// notifications:getAppriseSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["getAppriseSettings"],
					},
				},
				description: "Environment ID",
			},

			// notifications:createOrUpdateAppriseSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["createOrUpdateAppriseSettings"],
					},
				},
				description: "Environment ID",
			},

			// notifications:createOrUpdateAppriseSettings body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["createOrUpdateAppriseSettings"],
					},
				},
				description: "JSON request body",
			},

			// notifications:testAppriseNotification id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["testAppriseNotification"],
					},
				},
				description: "Environment ID",
			},

			// notifications:testAppriseNotification query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["testAppriseNotification"],
					},
				},
				options: [
					{
						displayName: 'Type',
						name: "type",
						type: "string",
						default: "simple",
						description: 'Type',
					},
				],
			},

			// notifications:getAllNotificationSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["getAllNotificationSettings"],
					},
				},
				description: "Environment ID",
			},

			// notifications:createOrUpdateNotificationSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["createOrUpdateNotificationSettings"],
					},
				},
				description: "Environment ID",
			},

			// notifications:createOrUpdateNotificationSettings body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["createOrUpdateNotificationSettings"],
					},
				},
				description: "JSON request body",
			},

			// notifications:deleteNotificationSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["deleteNotificationSettings"],
					},
				},
				description: "Environment ID",
			},

			// notifications:deleteNotificationSettings provider
			{
				displayName: "Provider",
				name: "provider",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["deleteNotificationSettings"],
					},
				},
				description: "Provider",
			},

			// notifications:getNotificationSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["getNotificationSettings"],
					},
				},
				description: "Environment ID",
			},

			// notifications:getNotificationSettings provider
			{
				displayName: "Provider",
				name: "provider",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["getNotificationSettings"],
					},
				},
				description: "Provider",
			},

			// notifications:testNotification id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["testNotification"],
					},
				},
				description: "Environment ID",
			},

			// notifications:testNotification provider
			{
				displayName: "Provider",
				name: "provider",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["testNotification"],
					},
				},
				description: "Provider",
			},

			// notifications:testNotification query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["notifications"],
						operation: ["testNotification"],
					},
				},
				options: [
					{
						displayName: 'Type',
						name: "type",
						type: "string",
						default: "simple",
						description: 'Type',
					},
				],
			},

			// oidc:handleOidcCallback body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["oidc"],
						operation: ["handleOidcCallback"],
					},
				},
				description: "JSON request body",
			},

			// oidc:exchangeOidcDeviceToken body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["oidc"],
						operation: ["exchangeOidcDeviceToken"],
					},
				},
				description: "JSON request body",
			},

			// oidc:getOidcAuthUrl body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["oidc"],
						operation: ["getOidcAuthUrl"],
					},
				},
				description: "JSON request body",
			},

			// projects:listProjects id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["listProjects"],
					},
				},
				description: "Environment ID",
			},

			// projects:listProjects query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["listProjects"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction (Asc or Desc)',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction (asc or desc)",
					},
					{
						displayName: 'Start Index for Pagination',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index for pagination",
					},
					{
						displayName: 'Number of Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Number of items per page",
					},
					{
						displayName: 'Filter by Status (Comma-Separated: Running,stopped,partially Running)',
						name: "status",
						type: "string",
						default: "",
						description: "Filter by status (comma-separated: running,stopped,partially running)",
					},
				],
			},

			// projects:createProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["createProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:createProject body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["createProject"],
					},
				},
				description: "JSON request body",
			},

			// projects:getProjectStatusCounts id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["getProjectStatusCounts"],
					},
				},
				description: "Environment ID",
			},

			// projects:getProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["getProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:getProject projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["getProject"],
					},
				},
				description: "Project ID",
			},

			// projects:updateProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["updateProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:updateProject projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["updateProject"],
					},
				},
				description: "Project ID",
			},

			// projects:updateProject body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["updateProject"],
					},
				},
				description: "JSON request body",
			},

			// projects:destroyProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["destroyProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:destroyProject projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["destroyProject"],
					},
				},
				description: "Project ID",
			},

			// projects:destroyProject body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["destroyProject"],
					},
				},
				description: "JSON request body",
			},

			// projects:downProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["downProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:downProject projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["downProject"],
					},
				},
				description: "Project ID",
			},

			// projects:updateProjectInclude id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["updateProjectInclude"],
					},
				},
				description: "Environment ID",
			},

			// projects:updateProjectInclude projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["updateProjectInclude"],
					},
				},
				description: "Project ID",
			},

			// projects:updateProjectInclude body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["updateProjectInclude"],
					},
				},
				description: "JSON request body",
			},

			// projects:pullProjectImages id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["pullProjectImages"],
					},
				},
				description: "Environment ID",
			},

			// projects:pullProjectImages projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["pullProjectImages"],
					},
				},
				description: "Project ID",
			},

			// projects:redeployProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["redeployProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:redeployProject projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["redeployProject"],
					},
				},
				description: "Project ID",
			},

			// projects:restartProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["restartProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:restartProject projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["restartProject"],
					},
				},
				description: "Project ID",
			},

			// projects:deployProject id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["deployProject"],
					},
				},
				description: "Environment ID",
			},

			// projects:deployProject projectId
			{
				displayName: "Project ID",
				name: "projectId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["projects"],
						operation: ["deployProject"],
					},
				},
				description: "Project ID",
			},

			// settings:getSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["settings"],
						operation: ["getSettings"],
					},
				},
				description: "Environment ID",
			},

			// settings:updateSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["settings"],
						operation: ["updateSettings"],
					},
				},
				description: "Environment ID",
			},

			// settings:updateSettings body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["settings"],
						operation: ["updateSettings"],
					},
				},
				description: "JSON request body",
			},

			// settings:getPublicSettings id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["settings"],
						operation: ["getPublicSettings"],
					},
				},
				description: "Environment ID",
			},

			// settings:searchSettings body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["settings"],
						operation: ["searchSettings"],
					},
				},
				description: "JSON request body",
			},

			// system:startAllContainers id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["startAllContainers"],
					},
				},
				description: "Environment ID",
			},

			// system:startAllStoppedContainers id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["startAllStoppedContainers"],
					},
				},
				description: "Environment ID",
			},

			// system:stopAllContainers id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["stopAllContainers"],
					},
				},
				description: "Environment ID",
			},

			// system:convertDockerRun id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["convertDockerRun"],
					},
				},
				description: "Environment ID",
			},

			// system:convertDockerRun body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["convertDockerRun"],
					},
				},
				description: "JSON request body",
			},

			// system:getDockerInfo id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["getDockerInfo"],
					},
				},
				description: "Environment ID",
			},

			// system:systemHealth id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["systemHealth"],
					},
				},
				description: "Environment ID",
			},

			// system:pruneAll id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["pruneAll"],
					},
				},
				description: "Environment ID",
			},

			// system:pruneAll body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["pruneAll"],
					},
				},
				description: "JSON request body",
			},

			// system:triggerUpgrade id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["triggerUpgrade"],
					},
				},
				description: "Environment ID",
			},

			// system:checkUpgrade id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["system"],
						operation: ["checkUpgrade"],
					},
				},
				description: "Environment ID",
			},

			// templates:listtemplatespaginated query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["listtemplatespaginated"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: 'Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Items per page",
					},
				],
			},

			// templates:createtemplate body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["createtemplate"],
					},
				},
				description: "JSON request body",
			},

			// templates:savedefaulttemplates body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["savedefaulttemplates"],
					},
				},
				description: "JSON request body",
			},

			// templates:fetchtemplateregistry query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["fetchtemplateregistry"],
					},
				},
				options: [
					{
						displayName: "Registry URL",
						name: "url",
						type: "string",
						default: "",
						description: "Registry URL",
					},
				],
			},

			// templates:createtemplateregistry body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["createtemplateregistry"],
					},
				},
				description: "JSON request body",
			},

			// templates:deletetemplateregistry id
			{
				displayName: "Registry ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["deletetemplateregistry"],
					},
				},
				description: "Registry ID",
			},

			// templates:updatetemplateregistry id
			{
				displayName: "Registry ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["updatetemplateregistry"],
					},
				},
				description: "Registry ID",
			},

			// templates:updatetemplateregistry body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["updatetemplateregistry"],
					},
				},
				description: "JSON request body",
			},

			// templates:updateglobalvariables body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["updateglobalvariables"],
					},
				},
				description: "JSON request body",
			},

			// templates:deletetemplate id
			{
				displayName: "Template ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["deletetemplate"],
					},
				},
				description: "Template ID",
			},

			// templates:gettemplate id
			{
				displayName: "Template ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["gettemplate"],
					},
				},
				description: "Template ID",
			},

			// templates:updatetemplate id
			{
				displayName: "Template ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["updatetemplate"],
					},
				},
				description: "Template ID",
			},

			// templates:updatetemplate body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["updatetemplate"],
					},
				},
				description: "JSON request body",
			},

			// templates:gettemplatecontent id
			{
				displayName: "Template ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["gettemplatecontent"],
					},
				},
				description: "Template ID",
			},

			// templates:downloadtemplate id
			{
				displayName: "Template ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["templates"],
						operation: ["downloadtemplate"],
					},
				},
				description: "Template ID",
			},

			// updater:updateContainer id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["updater"],
						operation: ["updateContainer"],
					},
				},
				description: "Environment ID",
			},

			// updater:updateContainer containerId
			{
				displayName: 'Container ID to Update',
				name: "containerId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["updater"],
						operation: ["updateContainer"],
					},
				},
				description: "Container ID to update",
			},

			// updater:getUpdaterHistory id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["updater"],
						operation: ["getUpdaterHistory"],
					},
				},
				description: "Environment ID",
			},

			// updater:getUpdaterHistory query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["updater"],
						operation: ["getUpdaterHistory"],
					},
				},
				options: [
					{
						displayName: 'Number of History Entries to Return',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 50,
						description: "Number of history entries to return",
					},
				],
			},

			// updater:runUpdater id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["updater"],
						operation: ["runUpdater"],
					},
				},
				description: "Environment ID",
			},

			// updater:runUpdater body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["updater"],
						operation: ["runUpdater"],
					},
				},
				description: "JSON request body",
			},

			// updater:getUpdaterStatus id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["updater"],
						operation: ["getUpdaterStatus"],
					},
				},
				description: "Environment ID",
			},

			// users:listusers query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["users"],
						operation: ["listusers"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: 'Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Items per page",
					},
				],
			},

			// users:createuser body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["users"],
						operation: ["createuser"],
					},
				},
				description: "JSON request body",
			},

			// users:deleteuser userId
			{
				displayName: "User ID",
				name: "userId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["users"],
						operation: ["deleteuser"],
					},
				},
				description: "User ID",
			},

			// users:getuser userId
			{
				displayName: "User ID",
				name: "userId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["users"],
						operation: ["getuser"],
					},
				},
				description: "User ID",
			},

			// users:updateuser userId
			{
				displayName: "User ID",
				name: "userId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["users"],
						operation: ["updateuser"],
					},
				},
				description: "User ID",
			},

			// users:updateuser body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["users"],
						operation: ["updateuser"],
					},
				},
				description: "JSON request body",
			},

			// version:getversion query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["version"],
						operation: ["getversion"],
					},
				},
				options: [
					{
						displayName: 'Current Version to Compare Against',
						name: "current",
						type: "string",
						default: "",
						description: "Current version to compare against",
					},
				],
			},

			// volumeBackup:deleteVolumeBackup id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["deleteVolumeBackup"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:deleteVolumeBackup backupId
			{
				displayName: "Backup ID",
				name: "backupId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["deleteVolumeBackup"],
					},
				},
				description: "Backup ID",
			},

			// volumeBackup:downloadVolumeBackup id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["downloadVolumeBackup"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:downloadVolumeBackup backupId
			{
				displayName: "Backup ID",
				name: "backupId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["downloadVolumeBackup"],
					},
				},
				description: "Backup ID",
			},

			// volumeBackup:listBackupFiles id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["listBackupFiles"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:listBackupFiles backupId
			{
				displayName: "Backup ID",
				name: "backupId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["listBackupFiles"],
					},
				},
				description: "Backup ID",
			},

			// volumeBackup:backupHasPath id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["backupHasPath"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:backupHasPath backupId
			{
				displayName: "Backup ID",
				name: "backupId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["backupHasPath"],
					},
				},
				description: "Backup ID",
			},

			// volumeBackup:backupHasPath query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["backupHasPath"],
					},
				},
				options: [
					{
						displayName: 'Path to Check',
						name: "path",
						type: "string",
						default: "",
						description: "Path to check",
					},
				],
			},

			// volumeBackup:listVolumeBackups id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["listVolumeBackups"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:listVolumeBackups volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["listVolumeBackups"],
					},
				},
				description: "Volume name",
			},

			// volumeBackup:listVolumeBackups query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["listVolumeBackups"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction",
					},
					{
						displayName: 'Start Index',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index",
					},
					{
						displayName: "Limit",
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Limit",
					},
				],
			},

			// volumeBackup:createVolumeBackup id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["createVolumeBackup"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:createVolumeBackup volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["createVolumeBackup"],
					},
				},
				description: "Volume name",
			},

			// volumeBackup:uploadVolumeBackup id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["uploadVolumeBackup"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:uploadVolumeBackup volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["uploadVolumeBackup"],
					},
				},
				description: "Volume name",
			},

			// volumeBackup:restoreVolumeBackup id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["restoreVolumeBackup"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:restoreVolumeBackup volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["restoreVolumeBackup"],
					},
				},
				description: "Volume name",
			},

			// volumeBackup:restoreVolumeBackup backupId
			{
				displayName: "Backup ID",
				name: "backupId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["restoreVolumeBackup"],
					},
				},
				description: "Backup ID",
			},

			// volumeBackup:restoreVolumeBackupFiles id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["restoreVolumeBackupFiles"],
					},
				},
				description: "Environment ID",
			},

			// volumeBackup:restoreVolumeBackupFiles volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["restoreVolumeBackupFiles"],
					},
				},
				description: "Volume name",
			},

			// volumeBackup:restoreVolumeBackupFiles backupId
			{
				displayName: "Backup ID",
				name: "backupId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["restoreVolumeBackupFiles"],
					},
				},
				description: "Backup ID",
			},

			// volumeBackup:restoreVolumeBackupFiles body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["volumeBackup"],
						operation: ["restoreVolumeBackupFiles"],
					},
				},
				description: "JSON request body",
			},

			// volumeBrowser:deleteVolumeFile id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["deleteVolumeFile"],
					},
				},
				description: "Environment ID",
			},

			// volumeBrowser:deleteVolumeFile volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["deleteVolumeFile"],
					},
				},
				description: "Volume name",
			},

			// volumeBrowser:deleteVolumeFile query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["deleteVolumeFile"],
					},
				},
				options: [
					{
						displayName: 'File or Directory Path to Delete',
						name: "path",
						type: "string",
						default: "",
						description: "File or directory path to delete",
					},
				],
			},

			// volumeBrowser:browseVolumeDirectory id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["browseVolumeDirectory"],
					},
				},
				description: "Environment ID",
			},

			// volumeBrowser:browseVolumeDirectory volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["browseVolumeDirectory"],
					},
				},
				description: "Volume name",
			},

			// volumeBrowser:browseVolumeDirectory query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["browseVolumeDirectory"],
					},
				},
				options: [
					{
						displayName: 'Directory Path to Browse',
						name: "path",
						type: "string",
						default: "/",
						description: "Directory path to browse",
					},
				],
			},

			// volumeBrowser:getVolumeFileContent id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["getVolumeFileContent"],
					},
				},
				description: "Environment ID",
			},

			// volumeBrowser:getVolumeFileContent volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["getVolumeFileContent"],
					},
				},
				description: "Volume name",
			},

			// volumeBrowser:getVolumeFileContent query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["getVolumeFileContent"],
					},
				},
				options: [
					{
						displayName: 'File Path',
						name: "path",
						type: "string",
						default: "",
						description: "File path",
					},
					{
						displayName: 'Maximum Bytes to Read (Default 1MB)',
						name: "maxBytes",
						type: "number",
						default: 1048576,
						description: "Maximum bytes to read (default 1MB)",
					},
				],
			},

			// volumeBrowser:downloadVolumeFile id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["downloadVolumeFile"],
					},
				},
				description: "Environment ID",
			},

			// volumeBrowser:downloadVolumeFile volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["downloadVolumeFile"],
					},
				},
				description: "Volume name",
			},

			// volumeBrowser:downloadVolumeFile query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["downloadVolumeFile"],
					},
				},
				options: [
					{
						displayName: 'File Path',
						name: "path",
						type: "string",
						default: "",
						description: "File path",
					},
				],
			},

			// volumeBrowser:createVolumeDirectory id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["createVolumeDirectory"],
					},
				},
				description: "Environment ID",
			},

			// volumeBrowser:createVolumeDirectory volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["createVolumeDirectory"],
					},
				},
				description: "Volume name",
			},

			// volumeBrowser:createVolumeDirectory query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["createVolumeDirectory"],
					},
				},
				options: [
					{
						displayName: 'Directory Path to Create',
						name: "path",
						type: "string",
						default: "",
						description: "Directory path to create",
					},
				],
			},

			// volumeBrowser:uploadVolumeFile id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["uploadVolumeFile"],
					},
				},
				description: "Environment ID",
			},

			// volumeBrowser:uploadVolumeFile volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["uploadVolumeFile"],
					},
				},
				description: "Volume name",
			},

			// volumeBrowser:uploadVolumeFile query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumeBrowser"],
						operation: ["uploadVolumeFile"],
					},
				},
				options: [
					{
						displayName: 'Destination Path',
						name: "path",
						type: "string",
						default: "/",
						description: "Destination path",
					},
				],
			},

			// volumes:listVolumes id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["listVolumes"],
					},
				},
				description: "Environment ID",
			},

			// volumes:listVolumes query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["listVolumes"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Column to Sort By',
						name: "sort",
						type: "string",
						default: "",
						description: "Column to sort by",
					},
					{
						displayName: 'Sort Direction (Asc or Desc)',
						name: "order",
						type: "string",
						default: "asc",
						description: "Sort direction (asc or desc)",
					},
					{
						displayName: 'Start Index for Pagination',
						name: "start",
						type: "number",
						default: 0,
						description: "Start index for pagination",
					},
					{
						displayName: 'Number of Items per Page',
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 20,
						description: "Number of items per page",
					},
					{
						displayName: 'Filter by in-Use Status (True/false)',
						name: "inUse",
						type: "string",
						default: "",
						description: "Filter by in-use status (true/false)",
					},
				],
			},

			// volumes:createVolume id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["createVolume"],
					},
				},
				description: "Environment ID",
			},

			// volumes:createVolume body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["createVolume"],
					},
				},
				description: "JSON request body",
			},

			// volumes:getVolumeUsageCounts id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["getVolumeUsageCounts"],
					},
				},
				description: "Environment ID",
			},

			// volumes:pruneVolumes id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["pruneVolumes"],
					},
				},
				description: "Environment ID",
			},

			// volumes:getVolumeSizes id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["getVolumeSizes"],
					},
				},
				description: "Environment ID",
			},

			// volumes:removeVolume id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["removeVolume"],
					},
				},
				description: "Environment ID",
			},

			// volumes:removeVolume volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["removeVolume"],
					},
				},
				description: "Volume name",
			},

			// volumes:removeVolume query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["removeVolume"],
					},
				},
				options: [
					{
						displayName: 'Force Removal',
						name: "force",
						type: "boolean",
						default: false,
						description: "Force removal",
					},
				],
			},

			// volumes:getVolume id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["getVolume"],
					},
				},
				description: "Environment ID",
			},

			// volumes:getVolume volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["getVolume"],
					},
				},
				description: "Volume name",
			},

			// volumes:getVolumeUsage id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["getVolumeUsage"],
					},
				},
				description: "Environment ID",
			},

			// volumes:getVolumeUsage volumeName
			{
				displayName: 'Volume Name',
				name: "volumeName",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["volumes"],
						operation: ["getVolumeUsage"],
					},
				},
				description: "Volume name",
			},

			// vulnerabilities:getImageVulnerabilitySummaries id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getImageVulnerabilitySummaries"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:getImageVulnerabilitySummaries body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getImageVulnerabilitySummaries"],
					},
				},
				description: "JSON request body",
			},

			// vulnerabilities:getImageVulnerabilities id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getImageVulnerabilities"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:getImageVulnerabilities imageId
			{
				displayName: "Image ID",
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getImageVulnerabilities"],
					},
				},
				description: "Image ID",
			},

			// vulnerabilities:listImageVulnerabilities id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["listImageVulnerabilities"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:listImageVulnerabilities imageId
			{
				displayName: "Image ID",
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["listImageVulnerabilities"],
					},
				},
				description: "Image ID",
			},

			// vulnerabilities:listImageVulnerabilities query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["listImageVulnerabilities"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Sort Field',
						name: "sort",
						type: "string",
						default: "",
						description: "Sort field",
					},
					{
						displayName: 'Sort Order',
						name: "order",
						type: "string",
						default: "",
						description: "Sort order",
					},
					{
						displayName: 'Start Offset',
						name: "start",
						type: "number",
						default: 0,
						description: "Start offset",
					},
					{
						displayName: "Limit",
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 0,
						description: "Limit",
					},
					{
						displayName: 'Page Number',
						name: "page",
						type: "number",
						default: 0,
						description: "Page number",
					},
					{
						displayName: 'Comma-Separated Severity Filter',
						name: "severity",
						type: "string",
						default: "",
						description: "Comma-separated severity filter",
					},
				],
			},

			// vulnerabilities:scanImageVulnerabilities id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["scanImageVulnerabilities"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:scanImageVulnerabilities imageId
			{
				displayName: 'Image ID to Scan',
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["scanImageVulnerabilities"],
					},
				},
				description: "Image ID to scan",
			},

			// vulnerabilities:getImageVulnerabilitySummary id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getImageVulnerabilitySummary"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:getImageVulnerabilitySummary imageId
			{
				displayName: "Image ID",
				name: "imageId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getImageVulnerabilitySummary"],
					},
				},
				description: "Image ID",
			},

			// vulnerabilities:listEnvironmentVulnerabilities id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["listEnvironmentVulnerabilities"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:listEnvironmentVulnerabilities query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["listEnvironmentVulnerabilities"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Sort Field',
						name: "sort",
						type: "string",
						default: "",
						description: "Sort field",
					},
					{
						displayName: 'Sort Order',
						name: "order",
						type: "string",
						default: "",
						description: "Sort order",
					},
					{
						displayName: 'Start Offset',
						name: "start",
						type: "number",
						default: 0,
						description: "Start offset",
					},
					{
						displayName: "Limit",
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 0,
						description: "Limit",
					},
					{
						displayName: 'Page Number',
						name: "page",
						type: "number",
						default: 0,
						description: "Page number",
					},
					{
						displayName: 'Comma-Separated Severity Filter',
						name: "severity",
						type: "string",
						default: "",
						description: "Comma-separated severity filter",
					},
					{
						displayName: 'Filter by Image/repo Name (Substring)',
						name: "imageName",
						type: "string",
						default: "",
						description: "Filter by image/repo name (substring)",
					},
				],
			},

			// vulnerabilities:ignoreVulnerability id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["ignoreVulnerability"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:ignoreVulnerability body
			{
				displayName: "Body",
				name: "body",
				type: "json",
				default: "{}",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["ignoreVulnerability"],
					},
				},
				description: "JSON request body",
			},

			// vulnerabilities:unignoreVulnerability id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["unignoreVulnerability"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:unignoreVulnerability ignoreId
			{
				displayName: 'Ignore Record ID',
				name: "ignoreId",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["unignoreVulnerability"],
					},
				},
				description: "Ignore record ID",
			},

			// vulnerabilities:listIgnoredVulnerabilities id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["listIgnoredVulnerabilities"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:listIgnoredVulnerabilities query parameters
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["listIgnoredVulnerabilities"],
					},
				},
				options: [
					{
						displayName: 'Search Query',
						name: "search",
						type: "string",
						default: "",
						description: "Search query",
					},
					{
						displayName: 'Sort Field',
						name: "sort",
						type: "string",
						default: "",
						description: "Sort field",
					},
					{
						displayName: 'Sort Order',
						name: "order",
						type: "string",
						default: "",
						description: "Sort order",
					},
					{
						displayName: 'Start Offset',
						name: "start",
						type: "number",
						default: 0,
						description: "Start offset",
					},
					{
						displayName: "Limit",
						name: "limit",
						type: "number",
						typeOptions: {
							minValue: 1,
						},
						default: 0,
						description: "Limit",
					},
					{
						displayName: 'Page Number',
						name: "page",
						type: "number",
						default: 0,
						description: "Page number",
					},
				],
			},

			// vulnerabilities:getVulnerabilityScannerStatus id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getVulnerabilityScannerStatus"],
					},
				},
				description: "Environment ID",
			},

			// vulnerabilities:getEnvironmentVulnerabilitySummary id
			{
				displayName: "Environment ID",
				name: "id",
				type: "string",
				required: true,
				default: "",
				displayOptions: {
					show: {
						resource: ["vulnerabilities"],
						operation: ["getEnvironmentVulnerabilitySummary"],
					},
				},
				description: "Environment ID",
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let method = 'GET';
				let endpoint = '';
				let body: object | undefined = undefined;
				const qs: Record<string, string | number | boolean> = {};

				// ----------------------------------
				//         API Keys
				// ----------------------------------
				if (resource === "apiKeys" && operation === "listApiKeys") {
					method = "GET";
					endpoint = "/api-keys";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "apiKeys" && operation === "createApiKey") {
					method = "POST";
					endpoint = "/api-keys";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "apiKeys" && operation === "deleteApiKey") {
					method = "DELETE";
					endpoint = `/api-keys/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "apiKeys" && operation === "getApiKey") {
					method = "GET";
					endpoint = `/api-keys/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "apiKeys" && operation === "updateApiKey") {
					method = "PUT";
					endpoint = `/api-keys/${this.getNodeParameter('id', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         Application Images
				// ----------------------------------
				if (resource === "applicationImages" && operation === "getFavicon") {
					method = "GET";
					endpoint = "/app-images/favicon";
				}

				if (resource === "applicationImages" && operation === "getLogo") {
					method = "GET";
					endpoint = "/app-images/logo";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "applicationImages" && operation === "getLogoEmail") {
					method = "GET";
					endpoint = "/app-images/logo-email";
				}

				if (resource === "applicationImages" && operation === "getDefaultProfile") {
					method = "GET";
					endpoint = "/app-images/profile";
				}

				// ----------------------------------
				//         Auth
				// ----------------------------------
				if (resource === "auth" && operation === "login") {
					method = "POST";
					endpoint = "/auth/login";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "auth" && operation === "logout") {
					method = "POST";
					endpoint = "/auth/logout";
				}

				if (resource === "auth" && operation === "getCurrentUser") {
					method = "GET";
					endpoint = "/auth/me";
				}

				if (resource === "auth" && operation === "changePassword") {
					method = "POST";
					endpoint = "/auth/password";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "auth" && operation === "refreshToken") {
					method = "POST";
					endpoint = "/auth/refresh";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         Container Registries
				// ----------------------------------
				if (resource === "containerRegistries" && operation === "listcontainerregistries") {
					method = "GET";
					endpoint = "/container-registries";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "containerRegistries" && operation === "createcontainerregistry") {
					method = "POST";
					endpoint = "/container-registries";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "containerRegistries" && operation === "synccontainerregistries") {
					method = "POST";
					endpoint = "/container-registries/sync";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "containerRegistries" && operation === "deletecontainerregistry") {
					method = "DELETE";
					endpoint = `/container-registries/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "containerRegistries" && operation === "getcontainerregistry") {
					method = "GET";
					endpoint = `/container-registries/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "containerRegistries" && operation === "updatecontainerregistry") {
					method = "PUT";
					endpoint = `/container-registries/${this.getNodeParameter('id', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "containerRegistries" && operation === "testcontainerregistry") {
					method = "POST";
					endpoint = `/container-registries/${this.getNodeParameter('id', i) as string}/test`;
				}

				// ----------------------------------
				//         Containers
				// ----------------------------------
				if (resource === "containers" && operation === "listContainers") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "containers" && operation === "createContainer") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "containers" && operation === "containerStatusCounts") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers/counts`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "containers" && operation === "deleteContainer") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers/${this.getNodeParameter('containerId', i) as string}`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "containers" && operation === "getContainer") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers/${this.getNodeParameter('containerId', i) as string}`;
				}

				if (resource === "containers" && operation === "restartContainer") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers/${this.getNodeParameter('containerId', i) as string}/restart`;
				}

				if (resource === "containers" && operation === "startContainer") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers/${this.getNodeParameter('containerId', i) as string}/start`;
				}

				if (resource === "containers" && operation === "stopContainer") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers/${this.getNodeParameter('containerId', i) as string}/stop`;
				}

				// ----------------------------------
				//         Customize
				// ----------------------------------
				if (resource === "customize" && operation === "getCustomizeCategories") {
					method = "GET";
					endpoint = "/customize/categories";
				}

				if (resource === "customize" && operation === "listgitrepositories") {
					method = "GET";
					endpoint = "/customize/git-repositories";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "customize" && operation === "creategitrepository") {
					method = "POST";
					endpoint = "/customize/git-repositories";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "customize" && operation === "deletegitrepository") {
					method = "DELETE";
					endpoint = `/customize/git-repositories/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "customize" && operation === "getgitrepository") {
					method = "GET";
					endpoint = `/customize/git-repositories/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "customize" && operation === "updategitrepository") {
					method = "PUT";
					endpoint = `/customize/git-repositories/${this.getNodeParameter('id', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "customize" && operation === "listgitrepositorybranches") {
					method = "GET";
					endpoint = `/customize/git-repositories/${this.getNodeParameter('id', i) as string}/branches`;
				}

				if (resource === "customize" && operation === "browsegitrepositoryfiles") {
					method = "GET";
					endpoint = `/customize/git-repositories/${this.getNodeParameter('id', i) as string}/files`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "customize" && operation === "testgitrepository") {
					method = "POST";
					endpoint = `/customize/git-repositories/${this.getNodeParameter('id', i) as string}/test`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "customize" && operation === "searchCustomize") {
					method = "POST";
					endpoint = "/customize/search";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         Environments
				// ----------------------------------
				if (resource === "environments" && operation === "listenvironments") {
					method = "GET";
					endpoint = "/environments";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "environments" && operation === "createenvironment") {
					method = "POST";
					endpoint = "/environments";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "environments" && operation === "pairenvironment") {
					method = "POST";
					endpoint = "/environments/pair";
				}

				if (resource === "environments" && operation === "deleteenvironment") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "environments" && operation === "getenvironment") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "environments" && operation === "updateenvironment") {
					method = "PUT";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "environments" && operation === "pairagent") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/agent/pair`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "environments" && operation === "getdeploymentsnippets") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/deployment`;
				}

				if (resource === "environments" && operation === "updateheartbeat") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/heartbeat`;
				}

				if (resource === "environments" && operation === "syncenvironment") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/sync`;
				}

				if (resource === "environments" && operation === "testconnection") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/test`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "environments" && operation === "getenvironmentversion") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/version`;
				}

				// ----------------------------------
				//         Events
				// ----------------------------------
				if (resource === "events" && operation === "listevents") {
					method = "GET";
					endpoint = "/events";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "events" && operation === "createevent") {
					method = "POST";
					endpoint = "/events";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "events" && operation === "geteventsbyenvironment") {
					method = "GET";
					endpoint = `/events/environment/${this.getNodeParameter('environmentId', i) as string}`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "events" && operation === "deleteevent") {
					method = "DELETE";
					endpoint = `/events/${this.getNodeParameter('eventId', i) as string}`;
				}

				// ----------------------------------
				//         Fonts
				// ----------------------------------
				if (resource === "fonts" && operation === "getMonoFont") {
					method = "GET";
					endpoint = "/fonts/mono";
				}

				if (resource === "fonts" && operation === "getSansFont") {
					method = "GET";
					endpoint = "/fonts/sans";
				}

				if (resource === "fonts" && operation === "getSerifFont") {
					method = "GET";
					endpoint = "/fonts/serif";
				}

				// ----------------------------------
				//         Git Repositories
				// ----------------------------------
				if (resource === "gitRepositories" && operation === "syncgitrepositories") {
					method = "POST";
					endpoint = "/git-repositories/sync";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         GitOps Syncs
				// ----------------------------------
				if (resource === "gitopsSyncs" && operation === "listgitopssyncs") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "gitopsSyncs" && operation === "creategitopssync") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "gitopsSyncs" && operation === "importgitopssyncs") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs/import`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "gitopsSyncs" && operation === "deletegitopssync") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs/${this.getNodeParameter('syncId', i) as string}`;
				}

				if (resource === "gitopsSyncs" && operation === "getgitopssync") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs/${this.getNodeParameter('syncId', i) as string}`;
				}

				if (resource === "gitopsSyncs" && operation === "updategitopssync") {
					method = "PUT";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs/${this.getNodeParameter('syncId', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "gitopsSyncs" && operation === "browsegitopssyncfiles") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs/${this.getNodeParameter('syncId', i) as string}/files`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "gitopsSyncs" && operation === "getgitopssyncstatus") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs/${this.getNodeParameter('syncId', i) as string}/status`;
				}

				if (resource === "gitopsSyncs" && operation === "performgitopssync") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/gitops-syncs/${this.getNodeParameter('syncId', i) as string}/sync`;
				}

				// ----------------------------------
				//         Health
				// ----------------------------------
				if (resource === "health" && operation === "healthCheck") {
					method = "GET";
					endpoint = "/health";
				}

				if (resource === "health" && operation === "healthCheckHead") {
					method = "HEAD";
					endpoint = "/health";
				}

				// ----------------------------------
				//         Image Updates
				// ----------------------------------
				if (resource === "imageUpdates" && operation === "checkImageUpdate") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/image-updates/check`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "imageUpdates" && operation === "checkAllImages") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/image-updates/check-all`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "imageUpdates" && operation === "checkMultipleImages") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/image-updates/check-batch`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "imageUpdates" && operation === "checkImageUpdateById") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/image-updates/check/${this.getNodeParameter('imageId', i) as string}`;
				}

				if (resource === "imageUpdates" && operation === "checkImageUpdateByIdPost") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/image-updates/check/${this.getNodeParameter('imageId', i) as string}`;
				}

				if (resource === "imageUpdates" && operation === "getUpdateSummary") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/image-updates/summary`;
				}

				// ----------------------------------
				//         Images
				// ----------------------------------
				if (resource === "images" && operation === "listImages") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "images" && operation === "getImageUsageCounts") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/counts`;
				}

				if (resource === "images" && operation === "pruneImages") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/prune`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "images" && operation === "pullImage") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/pull`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "images" && operation === "uploadImage") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/upload`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "images" && operation === "removeImage") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/${this.getNodeParameter('imageId', i) as string}`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "images" && operation === "getImage") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/${this.getNodeParameter('imageId', i) as string}`;
				}

				// ----------------------------------
				//         JobSchedules
				// ----------------------------------
				if (resource === "jobschedules" && operation === "getJobSchedules") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/job-schedules`;
				}

				if (resource === "jobschedules" && operation === "updateJobSchedules") {
					method = "PUT";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/job-schedules`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "jobschedules" && operation === "listJobs") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/jobs`;
				}

				if (resource === "jobschedules" && operation === "runJob") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/jobs/${this.getNodeParameter('jobId', i) as string}/run`;
				}

				// ----------------------------------
				//         Networks
				// ----------------------------------
				if (resource === "networks" && operation === "listNetworks") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/networks`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "networks" && operation === "createNetwork") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/networks`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "networks" && operation === "networkCounts") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/networks/counts`;
				}

				if (resource === "networks" && operation === "pruneNetworks") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/networks/prune`;
				}

				if (resource === "networks" && operation === "deleteNetwork") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/networks/${this.getNodeParameter('networkId', i) as string}`;
				}

				if (resource === "networks" && operation === "getNetwork") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/networks/${this.getNodeParameter('networkId', i) as string}`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				// ----------------------------------
				//         Notifications
				// ----------------------------------
				if (resource === "notifications" && operation === "getAppriseSettings") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/apprise`;
				}

				if (resource === "notifications" && operation === "createOrUpdateAppriseSettings") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/apprise`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "notifications" && operation === "testAppriseNotification") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/apprise/test`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "notifications" && operation === "getAllNotificationSettings") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/settings`;
				}

				if (resource === "notifications" && operation === "createOrUpdateNotificationSettings") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/settings`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "notifications" && operation === "deleteNotificationSettings") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/settings/${this.getNodeParameter('provider', i) as string}`;
				}

				if (resource === "notifications" && operation === "getNotificationSettings") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/settings/${this.getNodeParameter('provider', i) as string}`;
				}

				if (resource === "notifications" && operation === "testNotification") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/notifications/test/${this.getNodeParameter('provider', i) as string}`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				// ----------------------------------
				//         OIDC
				// ----------------------------------
				if (resource === "oidc" && operation === "handleOidcCallback") {
					method = "POST";
					endpoint = "/oidc/callback";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "oidc" && operation === "getOidcConfig") {
					method = "GET";
					endpoint = "/oidc/config";
				}

				if (resource === "oidc" && operation === "initiateOidcDeviceAuth") {
					method = "POST";
					endpoint = "/oidc/device/code";
				}

				if (resource === "oidc" && operation === "exchangeOidcDeviceToken") {
					method = "POST";
					endpoint = "/oidc/device/token";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "oidc" && operation === "getOidcStatus") {
					method = "GET";
					endpoint = "/oidc/status";
				}

				if (resource === "oidc" && operation === "getOidcAuthUrl") {
					method = "POST";
					endpoint = "/oidc/url";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         Projects
				// ----------------------------------
				if (resource === "projects" && operation === "listProjects") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "projects" && operation === "createProject") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "projects" && operation === "getProjectStatusCounts") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/counts`;
				}

				if (resource === "projects" && operation === "getProject") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}`;
				}

				if (resource === "projects" && operation === "updateProject") {
					method = "PUT";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "projects" && operation === "destroyProject") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}/destroy`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "projects" && operation === "downProject") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}/down`;
				}

				if (resource === "projects" && operation === "updateProjectInclude") {
					method = "PUT";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}/includes`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "projects" && operation === "pullProjectImages") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}/pull`;
				}

				if (resource === "projects" && operation === "redeployProject") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}/redeploy`;
				}

				if (resource === "projects" && operation === "restartProject") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}/restart`;
				}

				if (resource === "projects" && operation === "deployProject") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/projects/${this.getNodeParameter('projectId', i) as string}/up`;
				}

				// ----------------------------------
				//         Settings
				// ----------------------------------
				if (resource === "settings" && operation === "getSettings") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/settings`;
				}

				if (resource === "settings" && operation === "updateSettings") {
					method = "PUT";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/settings`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "settings" && operation === "getPublicSettings") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/settings/public`;
				}

				if (resource === "settings" && operation === "getSettingsCategories") {
					method = "GET";
					endpoint = "/settings/categories";
				}

				if (resource === "settings" && operation === "searchSettings") {
					method = "POST";
					endpoint = "/settings/search";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         System
				// ----------------------------------
				if (resource === "system" && operation === "startAllContainers") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/containers/start-all`;
				}

				if (resource === "system" && operation === "startAllStoppedContainers") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/containers/start-stopped`;
				}

				if (resource === "system" && operation === "stopAllContainers") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/containers/stop-all`;
				}

				if (resource === "system" && operation === "convertDockerRun") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/convert`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "system" && operation === "getDockerInfo") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/docker/info`;
				}

				if (resource === "system" && operation === "systemHealth") {
					method = "HEAD";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/health`;
				}

				if (resource === "system" && operation === "pruneAll") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/prune`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "system" && operation === "triggerUpgrade") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/upgrade`;
				}

				if (resource === "system" && operation === "checkUpgrade") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/system/upgrade/check`;
				}

				// ----------------------------------
				//         Templates
				// ----------------------------------
				if (resource === "templates" && operation === "listtemplatespaginated") {
					method = "GET";
					endpoint = "/templates";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "templates" && operation === "createtemplate") {
					method = "POST";
					endpoint = "/templates";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "templates" && operation === "getalltemplates") {
					method = "GET";
					endpoint = "/templates/all";
				}

				if (resource === "templates" && operation === "getdefaulttemplates") {
					method = "GET";
					endpoint = "/templates/default";
				}

				if (resource === "templates" && operation === "savedefaulttemplates") {
					method = "POST";
					endpoint = "/templates/default";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "templates" && operation === "fetchtemplateregistry") {
					method = "GET";
					endpoint = "/templates/fetch";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "templates" && operation === "gettemplateregistries") {
					method = "GET";
					endpoint = "/templates/registries";
				}

				if (resource === "templates" && operation === "createtemplateregistry") {
					method = "POST";
					endpoint = "/templates/registries";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "templates" && operation === "deletetemplateregistry") {
					method = "DELETE";
					endpoint = `/templates/registries/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "templates" && operation === "updatetemplateregistry") {
					method = "PUT";
					endpoint = `/templates/registries/${this.getNodeParameter('id', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "templates" && operation === "getglobalvariables") {
					method = "GET";
					endpoint = "/templates/variables";
				}

				if (resource === "templates" && operation === "updateglobalvariables") {
					method = "PUT";
					endpoint = "/templates/variables";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "templates" && operation === "deletetemplate") {
					method = "DELETE";
					endpoint = `/templates/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "templates" && operation === "gettemplate") {
					method = "GET";
					endpoint = `/templates/${this.getNodeParameter('id', i) as string}`;
				}

				if (resource === "templates" && operation === "updatetemplate") {
					method = "PUT";
					endpoint = `/templates/${this.getNodeParameter('id', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "templates" && operation === "gettemplatecontent") {
					method = "GET";
					endpoint = `/templates/${this.getNodeParameter('id', i) as string}/content`;
				}

				if (resource === "templates" && operation === "downloadtemplate") {
					method = "POST";
					endpoint = `/templates/${this.getNodeParameter('id', i) as string}/download`;
				}

				// ----------------------------------
				//         Updater
				// ----------------------------------
				if (resource === "updater" && operation === "updateContainer") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/containers/${this.getNodeParameter('containerId', i) as string}/update`;
				}

				if (resource === "updater" && operation === "getUpdaterHistory") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/updater/history`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "updater" && operation === "runUpdater") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/updater/run`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "updater" && operation === "getUpdaterStatus") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/updater/status`;
				}

				// ----------------------------------
				//         Users
				// ----------------------------------
				if (resource === "users" && operation === "listusers") {
					method = "GET";
					endpoint = "/users";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "users" && operation === "createuser") {
					method = "POST";
					endpoint = "/users";
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "users" && operation === "deleteuser") {
					method = "DELETE";
					endpoint = `/users/${this.getNodeParameter('userId', i) as string}`;
				}

				if (resource === "users" && operation === "getuser") {
					method = "GET";
					endpoint = `/users/${this.getNodeParameter('userId', i) as string}`;
				}

				if (resource === "users" && operation === "updateuser") {
					method = "PUT";
					endpoint = `/users/${this.getNodeParameter('userId', i) as string}`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         Version
				// ----------------------------------
				if (resource === "version" && operation === "getappversion") {
					method = "GET";
					endpoint = "/app-version";
				}

				if (resource === "version" && operation === "getversion") {
					method = "GET";
					endpoint = "/version";
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				// ----------------------------------
				//         Volume Backup
				// ----------------------------------
				if (resource === "volumeBackup" && operation === "deleteVolumeBackup") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/backups/${this.getNodeParameter('backupId', i) as string}`;
				}

				if (resource === "volumeBackup" && operation === "downloadVolumeBackup") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/backups/${this.getNodeParameter('backupId', i) as string}/download`;
				}

				if (resource === "volumeBackup" && operation === "listBackupFiles") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/backups/${this.getNodeParameter('backupId', i) as string}/files`;
				}

				if (resource === "volumeBackup" && operation === "backupHasPath") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/backups/${this.getNodeParameter('backupId', i) as string}/has-path`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumeBackup" && operation === "listVolumeBackups") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/backups`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumeBackup" && operation === "createVolumeBackup") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/backups`;
				}

				if (resource === "volumeBackup" && operation === "uploadVolumeBackup") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/backups/upload`;
				}

				if (resource === "volumeBackup" && operation === "restoreVolumeBackup") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/backups/${this.getNodeParameter('backupId', i) as string}/restore`;
				}

				if (resource === "volumeBackup" && operation === "restoreVolumeBackupFiles") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/backups/${this.getNodeParameter('backupId', i) as string}/restore-files`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				// ----------------------------------
				//         Volume Browser
				// ----------------------------------
				if (resource === "volumeBrowser" && operation === "deleteVolumeFile") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/browse`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumeBrowser" && operation === "browseVolumeDirectory") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/browse`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumeBrowser" && operation === "getVolumeFileContent") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/browse/content`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumeBrowser" && operation === "downloadVolumeFile") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/browse/download`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumeBrowser" && operation === "createVolumeDirectory") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/browse/mkdir`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumeBrowser" && operation === "uploadVolumeFile") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/browse/upload`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				// ----------------------------------
				//         Volumes
				// ----------------------------------
				if (resource === "volumes" && operation === "listVolumes") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumes" && operation === "createVolume") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "volumes" && operation === "getVolumeUsageCounts") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/counts`;
				}

				if (resource === "volumes" && operation === "pruneVolumes") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/prune`;
				}

				if (resource === "volumes" && operation === "getVolumeSizes") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/sizes`;
				}

				if (resource === "volumes" && operation === "removeVolume") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "volumes" && operation === "getVolume") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}`;
				}

				if (resource === "volumes" && operation === "getVolumeUsage") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/volumes/${this.getNodeParameter('volumeName', i) as string}/usage`;
				}

				// ----------------------------------
				//         Vulnerabilities
				// ----------------------------------
				if (resource === "vulnerabilities" && operation === "getImageVulnerabilitySummaries") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/vulnerabilities/summaries`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "vulnerabilities" && operation === "getImageVulnerabilities") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/${this.getNodeParameter('imageId', i) as string}/vulnerabilities`;
				}

				if (resource === "vulnerabilities" && operation === "listImageVulnerabilities") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/${this.getNodeParameter('imageId', i) as string}/vulnerabilities/list`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "vulnerabilities" && operation === "scanImageVulnerabilities") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/${this.getNodeParameter('imageId', i) as string}/vulnerabilities/scan`;
				}

				if (resource === "vulnerabilities" && operation === "getImageVulnerabilitySummary") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/images/${this.getNodeParameter('imageId', i) as string}/vulnerabilities/summary`;
				}

				if (resource === "vulnerabilities" && operation === "listEnvironmentVulnerabilities") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/vulnerabilities/all`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "vulnerabilities" && operation === "ignoreVulnerability") {
					method = "POST";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/vulnerabilities/ignore`;
					const bodyParam = this.getNodeParameter('body', i, '{}') as string;
					body = typeof bodyParam === 'string' ? JSON.parse(bodyParam) : bodyParam;
				}

				if (resource === "vulnerabilities" && operation === "unignoreVulnerability") {
					method = "DELETE";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/vulnerabilities/ignore/${this.getNodeParameter('ignoreId', i) as string}`;
				}

				if (resource === "vulnerabilities" && operation === "listIgnoredVulnerabilities") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/vulnerabilities/ignored`;
					const additionalFields = this.getNodeParameter('additionalFields', i, {}) as Record<string, string | number | boolean>;
					Object.assign(qs, additionalFields);
				}

				if (resource === "vulnerabilities" && operation === "getVulnerabilityScannerStatus") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/vulnerabilities/scanner-status`;
				}

				if (resource === "vulnerabilities" && operation === "getEnvironmentVulnerabilitySummary") {
					method = "GET";
					endpoint = `/environments/${this.getNodeParameter('id', i) as string}/vulnerabilities/summary`;
				}

				const credentials = await this.getCredentials('arcaneApi');
				const baseUrl = (credentials.baseUrl as string).replace(/\/$/, '');

				const options: IHttpRequestOptions = {
					method: method as IHttpRequestMethods,
					url: `${baseUrl}/api${endpoint}`,
					qs,
					json: true,
					headers: {
						'X-API-Key': credentials.apiKey as string,
					},
				};

				if (body !== undefined && Object.keys(body).length > 0) {
					options.body = body;
				}

				const response = await this.helpers.httpRequest(options);

				if (Array.isArray(response)) {
					for (const item of response) {
						returnData.push({ json: item as IDataObject });
					}
				} else if (typeof response === 'object' && response !== null) {
					returnData.push({ json: response as IDataObject });
				} else {
					returnData.push({ json: { result: response } as IDataObject });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
