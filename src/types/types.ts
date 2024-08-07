/* Basic types */

export type LoaderProps = {
  /* Loader size */
  size?: number | 20;
  /* Loader title */
  title: string;
  /* Need subtitle */
  sub?: boolean;
};

export type SwitchProps = {
  /* On/Off */
  isOn: boolean;
  /* Toggle */
  toggleTheme: () => void;
  /* Range items */
  items: {start: string; end: string};
  /* Select style */
  style?: 'toggle' | 'radio';
};
