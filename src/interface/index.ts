export interface InputProps {
  defaultValue: string;
  className: string;
  maxLength: number;
  onChange: (value: string) => void;
  onClear: () => void;
}