
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string | undefined;
			MY_DO: DurableObjectNamespace;
		}
	}
}

export {};
