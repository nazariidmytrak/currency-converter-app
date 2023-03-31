import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ResponseObject } from '../../interfaces/api';

interface ConverterHeaderProps {
  currencyRates: ResponseObject;
}

const ConverterHeader: FC<ConverterHeaderProps> = ({ currencyRates }) => {
  const { UAH, USD, EUR } = currencyRates;
  const usdToUah = UAH / USD;
  const eurToUah = UAH / EUR;

  return (
    <Box
      position='fixed'
      display='flex'
      justifyContent='center'
      gap={3}
      top={0}
      minWidth='100%'
      padding={{ xs: '10px', sm: '20px' }}
      zIndex={5}
      sx={{
        background: 'linear-gradient(to left, #240b36, #c31432)',
      }}
    >
      <Typography fontSize={{ xs: '18px', sm: '25px' }}>
        1 USD = {usdToUah.toFixed(2)}₴
      </Typography>
      <Typography fontSize={{ xs: '18px', sm: '25px' }}>
        1 EUR = {eurToUah.toFixed(2)}₴
      </Typography>
    </Box>
  );
};

export default ConverterHeader;
