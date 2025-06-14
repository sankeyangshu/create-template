/**
 * Options for create-lemon.
 */
export interface Options {
  /**
   * The name of the project.
   * @default 'my-project'
   */
  name?: string;
  /**
   * The template to use.
   * @default 'default'
   */
  template?: 'default' | 'vscode' | 'lemon-react' | 'lemon-vue' | 'lemon-uniapp';
  /**
   * Whether to force initialize the project.
   * @default false
   */
  force?: boolean;
  /**
   * Whether to suppress non-error logs.
   * @default false
   */
  silent?: boolean;
  /**
   * Whether to print debug messages to the console.
   * @default false
   */
  debug?: boolean;
}
