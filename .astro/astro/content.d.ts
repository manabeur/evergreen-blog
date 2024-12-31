declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"note": {
"a-key-could-be-of-any-type-in-a-hash-table.md": {
	id: "a-key-could-be-of-any-type-in-a-hash-table.md";
  slug: "a-key-could-be-of-any-type-in-a-hash-table";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"confidence-is-the-key-in-improving-the-language-skill.md": {
	id: "confidence-is-the-key-in-improving-the-language-skill.md";
  slug: "confidence-is-the-key-in-improving-the-language-skill";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"data-structure.md": {
	id: "data-structure.md";
  slug: "data-structure";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"different-types-of-an-array.md": {
	id: "different-types-of-an-array.md";
  slug: "different-types-of-an-array";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"hash-code-is-always-an-integer.md": {
	id: "hash-code-is-always-an-integer.md";
  slug: "hash-code-is-always-an-integer";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"how-do-you-avoid-collision-in-a-hash-table.md": {
	id: "how-do-you-avoid-collision-in-a-hash-table.md";
  slug: "how-do-you-avoid-collision-in-a-hash-table";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"my-macbook-setup.md": {
	id: "my-macbook-setup.md";
  slug: "my-macbook-setup";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"now.md": {
	id: "now.md";
  slug: "now";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"passing-a-block-as-an-argument.md": {
	id: "passing-a-block-as-an-argument.md";
  slug: "passing-a-block-as-an-argument";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"static-array.md": {
	id: "static-array.md";
  slug: "static-array";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node.md": {
	id: "the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node.md";
  slug: "the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-binary-tree.md": {
	id: "what-is-a-binary-tree.md";
  slug: "what-is-a-binary-tree";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-circular-linked-list.md": {
	id: "what-is-a-circular-linked-list.md";
  slug: "what-is-a-circular-linked-list";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-doubly-linked-list.md": {
	id: "what-is-a-doubly-linked-list.md";
  slug: "what-is-a-doubly-linked-list";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-hash-table.md": {
	id: "what-is-a-hash-table.md";
  slug: "what-is-a-hash-table";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-linked-list.md": {
	id: "what-is-a-linked-list.md";
  slug: "what-is-a-linked-list";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-queue.md": {
	id: "what-is-a-queue.md";
  slug: "what-is-a-queue";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-singly-linked-list.md": {
	id: "what-is-a-singly-linked-list.md";
  slug: "what-is-a-singly-linked-list";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-a-stack.md": {
	id: "what-is-a-stack.md";
  slug: "what-is-a-stack";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"what-is-an-array.md": {
	id: "what-is-an-array.md";
  slug: "what-is-an-array";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"you-can-add-properties-in-array-in-javascript.md": {
	id: "you-can-add-properties-in-array-in-javascript.md";
  slug: "you-can-add-properties-in-array-in-javascript";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"더-하고-싶을-때-멈춰야-한다.md": {
	id: "더-하고-싶을-때-멈춰야-한다.md";
  slug: "더-하고-싶을-때-멈춰야-한다";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"메모는-외부의-정보가-아닌-내부의-정보를-적는_것.md": {
	id: "메모는-외부의-정보가-아닌-내부의-정보를-적는_것.md";
  slug: "메모는-외부의-정보가-아닌-내부의-정보를-적는_것";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"습관이-되려면-며칠-걸리는지-아무도-모른다.md": {
	id: "습관이-되려면-며칠-걸리는지-아무도-모른다.md";
  slug: "습관이-되려면-며칠-걸리는지-아무도-모른다";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"의식하지-않고-하는-행동에-습관이-완성되는-것.md": {
	id: "의식하지-않고-하는-행동에-습관이-완성되는-것.md";
  slug: "의식하지-않고-하는-행동에-습관이-완성되는-것";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
"한-번-멈춰버린-습관을-되돌리기란-쉽지-않다.md": {
	id: "한-번-멈춰버린-습관을-되돌리기란-쉽지-않다.md";
  slug: "한-번-멈춰버린-습관을-되돌리기란-쉽지-않다";
  body: string;
  collection: "note";
  data: InferEntrySchema<"note">
} & { render(): Render[".md"] };
};
"writing": {
"2개월-차-신입은-할-줄-아는-게-없는-게-당연한-걸까.md": {
	id: "2개월-차-신입은-할-줄-아는-게-없는-게-당연한-걸까.md";
  slug: "2개월-차-신입은-할-줄-아는-게-없는-게-당연한-걸까";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"chat-gpt-ruined-my-confidence-in-english.md": {
	id: "chat-gpt-ruined-my-confidence-in-english.md";
  slug: "chat-gpt-ruined-my-confidence-in-english";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"i-migrated-from-bear-app-to-obsidian.md": {
	id: "i-migrated-from-bear-app-to-obsidian.md";
  slug: "i-migrated-from-bear-app-to-obsidian";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"나는-왜-한-시간-일찍-출근을-하는걸까.md": {
	id: "나는-왜-한-시간-일찍-출근을-하는걸까.md";
  slug: "나는-왜-한-시간-일찍-출근을-하는걸까";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"내-일에-대한-원동력-찾기.md": {
	id: "내-일에-대한-원동력-찾기.md";
  slug: "내-일에-대한-원동력-찾기";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"모니터에서-가상현실로.md": {
	id: "모니터에서-가상현실로.md";
  slug: "모니터에서-가상현실로";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"미용실.md": {
	id: "미용실.md";
  slug: "미용실";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"우연히-일본어를-할-줄-알게-되었다.md": {
	id: "우연히-일본어를-할-줄-알게-되었다.md";
  slug: "우연히-일본어를-할-줄-알게-되었다";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"일찍-출근해야-하는-이유를-찾았다.md": {
	id: "일찍-출근해야-하는-이유를-찾았다.md";
  slug: "일찍-출근해야-하는-이유를-찾았다";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
"집중력-도둑이-내-손목에-있었구나.md": {
	id: "집중력-도둑이-내-손목에-있었구나.md";
  slug: "집중력-도둑이-내-손목에-있었구나";
  body: string;
  collection: "writing";
  data: InferEntrySchema<"writing">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
