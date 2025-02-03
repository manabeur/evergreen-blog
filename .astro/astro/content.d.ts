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
		"archives": {
"a-key-could-be-of-any-type-in-a-hash-table.md": {
	id: "a-key-could-be-of-any-type-in-a-hash-table.md";
  slug: "a-key-could-be-of-any-type-in-a-hash-table";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"confidence-is-the-key-in-improving-the-language-skill.md": {
	id: "confidence-is-the-key-in-improving-the-language-skill.md";
  slug: "confidence-is-the-key-in-improving-the-language-skill";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"data-structure.md": {
	id: "data-structure.md";
  slug: "data-structure";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"depth-first-search.md": {
	id: "depth-first-search.md";
  slug: "depth-first-search";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"dynamic-array.md": {
	id: "dynamic-array.md";
  slug: "dynamic-array";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"hash-code-is-always-an-integer.md": {
	id: "hash-code-is-always-an-integer.md";
  slug: "hash-code-is-always-an-integer";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"how-do-you-avoid-collision-in-a-hash-table.md": {
	id: "how-do-you-avoid-collision-in-a-hash-table.md";
  slug: "how-do-you-avoid-collision-in-a-hash-table";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"jagged-array.md": {
	id: "jagged-array.md";
  slug: "jagged-array";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"my-macbook-setup.md": {
	id: "my-macbook-setup.md";
  slug: "my-macbook-setup";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"now.md": {
	id: "now.md";
  slug: "now";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"passing-a-block-as-an-argument.md": {
	id: "passing-a-block-as-an-argument.md";
  slug: "passing-a-block-as-an-argument";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node.md": {
	id: "the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node.md";
  slug: "the-type-of-a-linked-list-is-determined-by-the-structure-of-a-node";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-binary-tree.md": {
	id: "what-is-a-binary-tree.md";
  slug: "what-is-a-binary-tree";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-circular-linked-list.md": {
	id: "what-is-a-circular-linked-list.md";
  slug: "what-is-a-circular-linked-list";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-doubly-linked-list.md": {
	id: "what-is-a-doubly-linked-list.md";
  slug: "what-is-a-doubly-linked-list";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-hash-table.md": {
	id: "what-is-a-hash-table.md";
  slug: "what-is-a-hash-table";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-linked-list.md": {
	id: "what-is-a-linked-list.md";
  slug: "what-is-a-linked-list";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-queue.md": {
	id: "what-is-a-queue.md";
  slug: "what-is-a-queue";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-singly-linked-list.md": {
	id: "what-is-a-singly-linked-list.md";
  slug: "what-is-a-singly-linked-list";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-a-stack.md": {
	id: "what-is-a-stack.md";
  slug: "what-is-a-stack";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"what-is-an-array.md": {
	id: "what-is-an-array.md";
  slug: "what-is-an-array";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"you-can-add-properties-in-array-in-javascript.md": {
	id: "you-can-add-properties-in-array-in-javascript.md";
  slug: "you-can-add-properties-in-array-in-javascript";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"더-하고-싶을-때-멈춰야-한다.md": {
	id: "더-하고-싶을-때-멈춰야-한다.md";
  slug: "더-하고-싶을-때-멈춰야-한다";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"메모는-외부의-정보가-아닌-내부의-정보를-적는_것.md": {
	id: "메모는-외부의-정보가-아닌-내부의-정보를-적는_것.md";
  slug: "메모는-외부의-정보가-아닌-내부의-정보를-적는_것";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"습관이-되려면-며칠-걸리는지-아무도-모른다.md": {
	id: "습관이-되려면-며칠-걸리는지-아무도-모른다.md";
  slug: "습관이-되려면-며칠-걸리는지-아무도-모른다";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"의식하지-않고-하는-행동에-습관이-완성되는-것.md": {
	id: "의식하지-않고-하는-행동에-습관이-완성되는-것.md";
  slug: "의식하지-않고-하는-행동에-습관이-완성되는-것";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
"한-번-멈춰버린-습관을-되돌리기란-쉽지-않다.md": {
	id: "한-번-멈춰버린-습관을-되돌리기란-쉽지-않다.md";
  slug: "한-번-멈춰버린-습관을-되돌리기란-쉽지-않다";
  body: string;
  collection: "archives";
  data: any
} & { render(): Render[".md"] };
};
"note": {
"240610152201.md": {
	id: "240610152201.md";
  slug: "240610152201";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"240610164501.md": {
	id: "240610164501.md";
  slug: "240610164501";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"240611100301.md": {
	id: "240611100301.md";
  slug: "240611100301";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"240611103553.md": {
	id: "240611103553.md";
  slug: "240611103553";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250101052312.md": {
	id: "250101052312.md";
  slug: "250101052312";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250101173519.md": {
	id: "250101173519.md";
  slug: "250101173519";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250130073757.md": {
	id: "250130073757.md";
  slug: "250130073757";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250130081822.md": {
	id: "250130081822.md";
  slug: "250130081822";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250131121405.md": {
	id: "250131121405.md";
  slug: "250131121405";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250201111442.md": {
	id: "250201111442.md";
  slug: "250201111442";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250201115105.md": {
	id: "250201115105.md";
  slug: "250201115105";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
"250203120334.md": {
	id: "250203120334.md";
  slug: "250203120334";
  body: string;
  collection: "note";
  data: any
} & { render(): Render[".md"] };
};
"writing": {
"1.md": {
	id: "1.md";
  slug: "1";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"10.md": {
	id: "10.md";
  slug: "10";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"11.md": {
	id: "11.md";
  slug: "11";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"12.md": {
	id: "12.md";
  slug: "12";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"2.md": {
	id: "2.md";
  slug: "2";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"3.md": {
	id: "3.md";
  slug: "3";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"4.md": {
	id: "4.md";
  slug: "4";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"5.md": {
	id: "5.md";
  slug: "5";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"6.md": {
	id: "6.md";
  slug: "6";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"7.md": {
	id: "7.md";
  slug: "7";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"8.md": {
	id: "8.md";
  slug: "8";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
"9.md": {
	id: "9.md";
  slug: "9";
  body: string;
  collection: "writing";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
