import { FC } from 'react';
import { CurrencyInputProps } from '../../interfaces/input';
import { FormControl, Box, MenuItem } from '@mui/material';
import { useFlagImage } from '../../hooks/useFlagImage';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

const CurrencyInput: FC<CurrencyInputProps> = ({
  currency,
  currencies,
  currencyAmount,
  onAmountChange,
  onCurrencyChange,
}) => {
  const options = currencies.map((option) => {
    const { flagImageUrl } = useFlagImage(option);
    return (
      <MenuItem key={option} value={option}>
        <img alt='flag' src={flagImageUrl} className='flag' />
        {option}
      </MenuItem>
    );
  });

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
          InputLabelProps={{ style: { color: '#000', fontSize: 20 } }}
          id='outlined-basic'
          variant='outlined'
          color='secondary'
          type='number'
          label={currency}
          sx={{ backgroundColor: '#dfd5d5' }}
          value={currencyAmount === 0 ? '' : currencyAmount}
          onChange={onAmountChange}
        />
      </FormControl>
      <FormControl sx={{ width: { xs: '100%', sm: '30%' } }}>
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: '#bdabab',
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: '#dfd5d5',
                },
              },
            },
          }}
          value={currency}
          onChange={onCurrencyChange}
          variant='outlined'
          color='secondary'
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
