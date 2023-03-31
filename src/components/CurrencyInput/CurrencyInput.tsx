import { FC } from 'react';
import { CurrencyInputProps } from '../../interfaces/input';
import { FormControl, Box, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

const CurrencyInput: FC<CurrencyInputProps> = ({
  currency,
  currencies,
  currencyAmount,
  onAmountChange,
  onCurrencyChange,
}) => {
  const options = currencies.map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  return (
    <Box
      display='flex'
      alignItems='center'
      flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
      gap={2}
      width='100%'
    >
      <FormControl sx={{ width: { xs: '100%', sm: '70%' } }}>
        <TextField
          id='outlined-basic'
          variant='outlined'
          color='info'
          type='number'
          label={currency}
          sx={{ backgroundColor: 'white' }}
          value={currencyAmount === 0 ? '' : currencyAmount}
          onChange={onAmountChange}
        />
      </FormControl>
      <FormControl sx={{ width: { xs: '100%', sm: '30%' } }}>
        <Select
          value={currency}
          onChange={onCurrencyChange}
          variant='outlined'
          sx={{
            fontSize: '20px',
          }}
        >
          {options}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CurrencyInput;
