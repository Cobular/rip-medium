/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare module "svelte-collapse" {

  declare interface Params {
    open?: boolean;
    duration?: number;
    easing?: string;
  }
  declare function Collapse(node: any, params: Params): { update, destroy };
  export = Collapse;
}
