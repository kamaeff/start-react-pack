export type LoaderProps = {
  size?: number | 20;
  title: string;
  sub?: boolean;
};

export type SwitchProps = {
  /* On/Off */
  isOn: boolean;
  /* Toggle */
  toggleTheme: () => void;
  /* Range */
  items: { start: string; end: string };
  /* Select style */
  style?: 'toggle' | 'radio';
}

