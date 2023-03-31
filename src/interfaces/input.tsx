import { SelectChangeEvent } from '@mui/material/Select';

export interface CurrencyInputProps {
  currency: string;
  currencies: string[];
  currencyAmount: number;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCurrencyChange: (e: SelectChangeEvent<string>) => void;
}
