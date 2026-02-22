import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ArcaneApi implements ICredentialType {
	name = 'arcaneApi';
	displayName = 'Arcane API';
	icon: Icon = 'file:../icons/arcane.svg';
	documentationUrl = 'https://github.com/LilTrublMakr/n8n-nodes-arcane';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://arcane.example.tld',
			description: 'The base URL of your Arcane instance (without /api/)',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
				validation: [
					{
						type: 'regex',
						properties: {
							regex: '^arc_[0-9a-f]{64}$',
							errorMessage:
								'API key must start with "arc_" followed by exactly 64 lowercase hexadecimal characters (e.g. arc_0123456789abcdef...).',
						},
					},
				],
			},
			default: '',
			required: true,
			placeholder: 'arc_0123456789abcdef...',
			description:
				'The API key for authenticating with the Arcane API. Must start with "arc_" followed by 64 lowercase hexadecimal characters.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl.replace(/\\/$/, "")}}/api',
			url: '/auth/me',
			method: 'GET',
		},
	};
}
