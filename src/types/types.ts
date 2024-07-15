export type LoaderProps = {
  size?: number | 20;
  title: string;
  sub?: boolean;
};

export type SwitchProps = {
  isOn: boolean;
  toggleTheme: () => void;
  items: { start: string; end: string };
  style?: 'toggle' | 'radio';
}

