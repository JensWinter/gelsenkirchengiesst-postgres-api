interface Envs {
	// [key: string]: string;
	SUPABASE_URL: string;
	SUPABASE_ANON_KEY: string;
	SUPABASE_SERVICE_ROLE_KEY: string;

	JWKS_URI: string;
	AUDIENCE: string;
	ISSUER: string;

	// auth0ClientIdManagementApi: string;
	// auth0ClientSecretManagementApi: string;
	// auth0ManagementApiAudience: string;
	// auth0TokenApiUrlManagementApi: string;
	// auth0ManagementApiUrl: string;
}
export function getEnvs(): Envs {
	const SUPABASE_URL = process.env.SUPABASE_URL;
	const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
	const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

	const JWKS_URI = process.env.jwksuri;
	const AUDIENCE = process.env.audience;
	const ISSUER = process.env.issuer;

	if (SUPABASE_URL === undefined) throw new Error("SUPABASE_URL is undefined");
	if (SUPABASE_ANON_KEY === undefined)
		throw new Error("SUPABASE_ANON_KEY is undefined");
	if (SUPABASE_SERVICE_ROLE_KEY === undefined)
		throw new Error("SUPABASE_SERVICE_ROLE_KEY is undefined");

	if (JWKS_URI === undefined) throw new Error("jwksuri is undefined");

	if (AUDIENCE === undefined) throw new Error("audience is undefined");

	if (ISSUER === undefined) throw new Error("issuer is undefined");

	return {
		SUPABASE_URL,
		SUPABASE_ANON_KEY,
		SUPABASE_SERVICE_ROLE_KEY,
		AUDIENCE,
		ISSUER,
		JWKS_URI,
	};
}
