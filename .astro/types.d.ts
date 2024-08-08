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
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
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

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
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
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
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
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"notes": {
"6k_plus_minus_1_optimization.md": {
	id: "6k_plus_minus_1_optimization.md";
  slug: "6k_plus_minus_1_optimization";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"a_way_to_find_the_data_type_of_a_variable_in_rust.md": {
	id: "a_way_to_find_the_data_type_of_a_variable_in_rust.md";
  slug: "a_way_to_find_the_data_type_of_a_variable_in_rust";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"access_the_icloud_folder_from_the_terminal.md": {
	id: "access_the_icloud_folder_from_the_terminal.md";
  slug: "access_the_icloud_folder_from_the_terminal";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"andy_matuschak.md": {
	id: "andy_matuschak.md";
  slug: "andy_matuschak";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"arrays.md": {
	id: "arrays.md";
  slug: "arrays";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"bubble_sort.md": {
	id: "bubble_sort.md";
  slug: "bubble_sort";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"bulk_modify_text_files_using_ruby.md": {
	id: "bulk_modify_text_files_using_ruby.md";
  slug: "bulk_modify_text_files_using_ruby";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"bypass_entering_a_password_for_cloning_ssh_repositories_in_github.md": {
	id: "bypass_entering_a_password_for_cloning_ssh_repositories_in_github.md";
  slug: "bypass_entering_a_password_for_cloning_ssh_repositories_in_github";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"change_the_computer_name_that_displays_it_in_macos_terminal.md": {
	id: "change_the_computer_name_that_displays_it_in_macos_terminal.md";
  slug: "change_the_computer_name_that_displays_it_in_macos_terminal";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"chat_gpt_ruined_my_confidence_in_english.md": {
	id: "chat_gpt_ruined_my_confidence_in_english.md";
  slug: "chat_gpt_ruined_my_confidence_in_english";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"check_for_existing_gpg_keys.md": {
	id: "check_for_existing_gpg_keys.md";
  slug: "check_for_existing_gpg_keys";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"class_in_ruby.md": {
	id: "class_in_ruby.md";
  slug: "class_in_ruby";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"clone_all_repositories_using_github_cli.md": {
	id: "clone_all_repositories_using_github_cli.md";
  slug: "clone_all_repositories_using_github_cli";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"command_pattern.md": {
	id: "command_pattern.md";
  slug: "command_pattern";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"common_ansi_codes.md": {
	id: "common_ansi_codes.md";
  slug: "common_ansi_codes";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"configure_aliases_in_the_fish_shell.md": {
	id: "configure_aliases_in_the_fish_shell.md";
  slug: "configure_aliases_in_the_fish_shell";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"configure_fish_shells_greeting_message.md": {
	id: "configure_fish_shells_greeting_message.md";
  slug: "configure_fish_shells_greeting_message";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"configure_tmux_to_start_with_a_fish_shell.md": {
	id: "configure_tmux_to_start_with_a_fish_shell.md";
  slug: "configure_tmux_to_start_with_a_fish_shell";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"convert_an_uppercase_to_a_lowercase_using_ascii_values.md": {
	id: "convert_an_uppercase_to_a_lowercase_using_ascii_values.md";
  slug: "convert_an_uppercase_to_a_lowercase_using_ascii_values";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"convert_roman_numerals_to_integer.md": {
	id: "convert_roman_numerals_to_integer.md";
  slug: "convert_roman_numerals_to_integer";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"counting_sort.md": {
	id: "counting_sort.md";
  slug: "counting_sort";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"create_the_ssh_configuration_file.md": {
	id: "create_the_ssh_configuration_file.md";
  slug: "create_the_ssh_configuration_file";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"data_structure.md": {
	id: "data_structure.md";
  slug: "data_structure";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"difference_between_function.call_and_function.apply.md": {
	id: "difference_between_function.call_and_function.apply.md";
  slug: "difference_between_functioncall_and_functionapply";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"differences_between_array.filter_and_array.map.md": {
	id: "differences_between_array.filter_and_array.map.md";
  slug: "differences_between_arrayfilter_and_arraymap";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"different_linked_lists_have_different_node_structures.md": {
	id: "different_linked_lists_have_different_node_structures.md";
  slug: "different_linked_lists_have_different_node_structures";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"different_types_of_an_array.md": {
	id: "different_types_of_an_array.md";
  slug: "different_types_of_an_array";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"don't_use_fileopen_when_distributing_your_app.md": {
	id: "don't_use_fileopen_when_distributing_your_app.md";
  slug: "dont_use_fileopen_when_distributing_your_app";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"don't_use_println_in_competitive_programming.md": {
	id: "don't_use_println_in_competitive_programming.md";
  slug: "dont_use_println_in_competitive_programming";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"dont_be_afraid_of_asking_for_help.md": {
	id: "dont_be_afraid_of_asking_for_help.md";
  slug: "dont_be_afraid_of_asking_for_help";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"dynamically_generate_open_graph_images_using_cloudinary.md": {
	id: "dynamically_generate_open_graph_images_using_cloudinary.md";
  slug: "dynamically_generate_open_graph_images_using_cloudinary";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"evergreen_notes.md": {
	id: "evergreen_notes.md";
  slug: "evergreen_notes";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"factory_pattern.md": {
	id: "factory_pattern.md";
  slug: "factory_pattern";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"fast_input_and_output.md": {
	id: "fast_input_and_output.md";
  slug: "fast_input_and_output";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"find_the_total_sum_in_a_given_range_using_prefix_sum.md": {
	id: "find_the_total_sum_in_a_given_range_using_prefix_sum.md";
  slug: "find_the_total_sum_in_a_given_range_using_prefix_sum";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"fish_shell.md": {
	id: "fish_shell.md";
  slug: "fish_shell";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"formatting_-_fill_and_alignment.md": {
	id: "formatting_-_fill_and_alignment.md";
  slug: "formatting_-_fill_and_alignment";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"generate_a_new_gpg_key.md": {
	id: "generate_a_new_gpg_key.md";
  slug: "generate_a_new_gpg_key";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"generate_a_new_ssh_key.md": {
	id: "generate_a_new_ssh_key.md";
  slug: "generate_a_new_ssh_key";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"getting_inputs_using_io_scanner_for_competitive_programming.md": {
	id: "getting_inputs_using_io_scanner_for_competitive_programming.md";
  slug: "getting_inputs_using_io_scanner_for_competitive_programming";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"git_aliases.md": {
	id: "git_aliases.md";
  slug: "git_aliases";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"git_filter_repo.md": {
	id: "git_filter_repo.md";
  slug: "git_filter_repo";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"group_by_data_types.md": {
	id: "group_by_data_types.md";
  slug: "group_by_data_types";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"gui_and_cli_applications_i_install_when_first_setting_up_macos.md": {
	id: "gui_and_cli_applications_i_install_when_first_setting_up_macos.md";
  slug: "gui_and_cli_applications_i_install_when_first_setting_up_macos";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"help_is_not_an_obligation_its_just_an_act_of_kindness.md": {
	id: "help_is_not_an_obligation_its_just_an_act_of_kindness.md";
  slug: "help_is_not_an_obligation_its_just_an_act_of_kindness";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"homebrew.md": {
	id: "homebrew.md";
  slug: "homebrew";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"how_to_batch_sign_previous_commits.md": {
	id: "how_to_batch_sign_previous_commits.md";
  slug: "how_to_batch_sign_previous_commits";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"how_to_sign_previous_commits.md": {
	id: "how_to_sign_previous_commits.md";
  slug: "how_to_sign_previous_commits";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"how_to_update_the_email_associated_with_existing_gpg_key.md": {
	id: "how_to_update_the_email_associated_with_existing_gpg_key.md";
  slug: "how_to_update_the_email_associated_with_existing_gpg_key";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"html2canvas_fails_to_render_images.md": {
	id: "html2canvas_fails_to_render_images.md";
  slug: "html2canvas_fails_to_render_images";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"html2canvas_generates_blurry_images.md": {
	id: "html2canvas_generates_blurry_images.md";
  slug: "html2canvas_generates_blurry_images";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"implementing_a_vector_using_c++.md": {
	id: "implementing_a_vector_using_c++.md";
  slug: "implementing_a_vector_using_c";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"implementing_a_vector_using_ruby.md": {
	id: "implementing_a_vector_using_ruby.md";
  slug: "implementing_a_vector_using_ruby";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"implementing_pkce_authorization_code_flow.md": {
	id: "implementing_pkce_authorization_code_flow.md";
  slug: "implementing_pkce_authorization_code_flow";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"including_other_files_in_ruby.md": {
	id: "including_other_files_in_ruby.md";
  slug: "including_other_files_in_ruby";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"insertion_sort.md": {
	id: "insertion_sort.md";
  slug: "insertion_sort";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"lazyvim.md": {
	id: "lazyvim.md";
  slug: "lazyvim";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"let_the_default_shell_start_up_with_tmux.md": {
	id: "let_the_default_shell_start_up_with_tmux.md";
  slug: "let_the_default_shell_start_up_with_tmux";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"linked_list_is_better_if_lots_of_insertions_and_deletions_are_required.md": {
	id: "linked_list_is_better_if_lots_of_insertions_and_deletions_are_required.md";
  slug: "linked_list_is_better_if_lots_of_insertions_and_deletions_are_required";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"linked_list_is_slow_in_look_up.md": {
	id: "linked_list_is_slow_in_look_up.md";
  slug: "linked_list_is_slow_in_look_up";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"linked_lists.md": {
	id: "linked_lists.md";
  slug: "linked_lists";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"mac_setup_for_web_development.md": {
	id: "mac_setup_for_web_development.md";
  slug: "mac_setup_for_web_development";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"map_vs._weak_map.md": {
	id: "map_vs._weak_map.md";
  slug: "map_vs_weak_map";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"mapping_2d_array_indices_onto_1d_array.md": {
	id: "mapping_2d_array_indices_onto_1d_array.md";
  slug: "mapping_2d_array_indices_onto_1d_array";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"mbti.md": {
	id: "mbti.md";
  slug: "mbti";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"night_owls_can_benefit_from_miracle_morning.md": {
	id: "night_owls_can_benefit_from_miracle_morning.md";
  slug: "night_owls_can_benefit_from_miracle_morning";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"oh_my_fish.md": {
	id: "oh_my_fish.md";
  slug: "oh_my_fish";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"parse_command_line_arguments_using_clap.md": {
	id: "parse_command_line_arguments_using_clap.md";
  slug: "parse_command_line_arguments_using_clap";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"permanent_note_is_not_permanent.md": {
	id: "permanent_note_is_not_permanent.md";
  slug: "permanent_note_is_not_permanent";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"playing_audio_file_in_rust.md": {
	id: "playing_audio_file_in_rust.md";
  slug: "playing_audio_file_in_rust";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"primality_test.md": {
	id: "primality_test.md";
  slug: "primality_test";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"prime_numbers.md": {
	id: "prime_numbers.md";
  slug: "prime_numbers";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"publish_your_rust_project_on_homebrew_using_github_releases.md": {
	id: "publish_your_rust_project_on_homebrew_using_github_releases.md";
  slug: "publish_your_rust_project_on_homebrew_using_github_releases";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"quickest_way_to_pad_zeroes.md": {
	id: "quickest_way_to_pad_zeroes.md";
  slug: "quickest_way_to_pad_zeroes";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"rename_the_master_branch_to_main.md": {
	id: "rename_the_master_branch_to_main.md";
  slug: "rename_the_master_branch_to_main";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"resolving_404_error_on_vercel.md": {
	id: "resolving_404_error_on_vercel.md";
  slug: "resolving_404_error_on_vercel";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"reverse_a_linked_list.md": {
	id: "reverse_a_linked_list.md";
  slug: "reverse_a_linked_list";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"roman_numerals.md": {
	id: "roman_numerals.md";
  slug: "roman_numerals";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"selecting_a_module_class_in_react.md": {
	id: "selecting_a_module_class_in_react.md";
  slug: "selecting_a_module_class_in_react";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"selection_sort.md": {
	id: "selection_sort.md";
  slug: "selection_sort";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"setting_up_cmake_for_c++.md": {
	id: "setting_up_cmake_for_c++.md";
  slug: "setting_up_cmake_for_c";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"setting_up_nvm_on_oh-my-fish.md": {
	id: "setting_up_nvm_on_oh-my-fish.md";
  slug: "setting_up_nvm_on_oh-my-fish";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"should_note-taking_be_frictionless.md": {
	id: "should_note-taking_be_frictionless.md";
  slug: "should_note-taking_be_frictionless";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"side_project_-_command_line_pomodoro_timer.md": {
	id: "side_project_-_command_line_pomodoro_timer.md";
  slug: "side_project_-_command_line_pomodoro_timer";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"side_project_-_things_i_want.md": {
	id: "side_project_-_things_i_want.md";
  slug: "side_project_-_things_i_want";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"side_project_-_yourtrack.md": {
	id: "side_project_-_yourtrack.md";
  slug: "side_project_-_yourtrack";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"sieve_of_eratosthenes.md": {
	id: "sieve_of_eratosthenes.md";
  slug: "sieve_of_eratosthenes";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"signing_git_commits.md": {
	id: "signing_git_commits.md";
  slug: "signing_git_commits";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"social_media_handle.md": {
	id: "social_media_handle.md";
  slug: "social_media_handle";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"sort_alphabetically.md": {
	id: "sort_alphabetically.md";
  slug: "sort_alphabetically";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"sort_by를_사용해서_2차원_평면상의_점들을_정렬하는_방법.md": {
	id: "sort_by를_사용해서_2차원_평면상의_점들을_정렬하는_방법.md";
  slug: "sort_by를_사용해서_2차원_평면상의_점들을_정렬하는_방법";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"sort_string_numbers_using_sort_by.md": {
	id: "sort_string_numbers_using_sort_by.md";
  slug: "sort_string_numbers_using_sort_by";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"square_root_optimization.md": {
	id: "square_root_optimization.md";
  slug: "square_root_optimization";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"static_array.md": {
	id: "static_array.md";
  slug: "static_array";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"styling_webkit-scroll-value_in_safari.md": {
	id: "styling_webkit-scroll-value_in_safari.md";
  slug: "styling_webkit-scroll-value_in_safari";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"the_key_to_improve_the_language_is_the_confidence.md": {
	id: "the_key_to_improve_the_language_is_the_confidence.md";
  slug: "the_key_to_improve_the_language_is_the_confidence";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"unarchive_all_repositories_using_github_cli.md": {
	id: "unarchive_all_repositories_using_github_cli.md";
  slug: "unarchive_all_repositories_using_github_cli";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"unit_testing_in_ruby.md": {
	id: "unit_testing_in_ruby.md";
  slug: "unit_testing_in_ruby";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"use_ansi_codes_to_clear_the_terminal_screen.md": {
	id: "use_ansi_codes_to_clear_the_terminal_screen.md";
  slug: "use_ansi_codes_to_clear_the_terminal_screen";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"use_git-filter-repo_to_rewrite_commit_authors.md": {
	id: "use_git-filter-repo_to_rewrite_commit_authors.md";
  slug: "use_git-filter-repo_to_rewrite_commit_authors";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"wake_up_with_the_intention_to_start_your_day.md": {
	id: "wake_up_with_the_intention_to_start_your_day.md";
  slug: "wake_up_with_the_intention_to_start_your_day";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"writing_notes_in_your_native_language_can_help_you_retain_information_better.md": {
	id: "writing_notes_in_your_native_language_can_help_you_retain_information_better.md";
  slug: "writing_notes_in_your_native_language_can_help_you_retain_information_better";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"you_can_add_properties_in_javascript_arrays.md": {
	id: "you_can_add_properties_in_javascript_arrays.md";
  slug: "you_can_add_properties_in_javascript_arrays";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"you_can_be_more_proactive_by_being_the_first_one_to_act_with_genuine_kindness..md": {
	id: "you_can_be_more_proactive_by_being_the_first_one_to_act_with_genuine_kindness..md";
  slug: "you_can_be_more_proactive_by_being_the_first_one_to_act_with_genuine_kindness";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"you_have_to_be_willing_to_be_a_fool_to_advance..md": {
	id: "you_have_to_be_willing_to_be_a_fool_to_advance..md";
  slug: "you_have_to_be_willing_to_be_a_fool_to_advance";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
