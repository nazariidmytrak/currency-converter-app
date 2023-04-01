import { ChangeEvent, FC, useEffect, useState } from 'react';
import { ResponseObject } from '../../interfaces/api';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { Box, SelectChangeEvent } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ConverterHeader from './ConverterHeader';
import { getCurrencies } from '../../api/api';

const Converter: FC = () => {
  const [isError, setIsError] = useState<Error>();
  const [currencyRates, setCurrencyRates] = useState<ResponseObject>({});
  const [firstCurrencyAmount, setFirstCurrencyAmount] = useState<number>(0);
  const [secondCurrencyAmount, setSecondCurrencyAmount] = useState<number>(0);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('UAH');

  useEffect(() => {
    const fetchCurrency = async () => {
      const rates = await getCurrencies();
      setCurrencyRates(rates);
    };
    fetchCurrency().catch((error) => setIsError(error));
  }, []);

  const calculateAmount = (
    value: number,
    fromCurrency: string,
    toCurrency: string,
    currencyRates: ResponseObject
  ) => {
    return Number(
      (
        value *
        (currencyRates[toCurrency] / currencyRates[fromCurrency])
      ).toFixed(2)
    );
  };

  const firstCurrencyAmountChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const value = +e.target.value;
    setFirstCurrencyAmount(value);
    setSecondCurrencyAmount(
      calculateAmount(value, firstCurrency, secondCurrency, currencyRates)
    );
  };

  const secondCurrencyAmountChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const value = +e.target.value;
    setSecondCurrencyAmount(value);
    setFirstCurrencyAmount(
      calculateAmount(value, secondCurrency, firstCurrency, currencyRates)
    );
  };

  const firstCurrencyChangeHandler = (e: SelectChangeEvent<string>) => {
    const newFirstCurrency = e.target.value;
    setFirstCurrency(newFirstCurrency);
    setSecondCurrencyAmount(
      calculateAmount(
        firstCurrencyAmount,
        newFirstCurrency,
        secondCurrency,
        currencyRates
      )
    );
  };

  const secondCurrencyChangeHandler = (e: SelectChangeEvent<string>) => {
    const newSecondCurrency = e.target.value;
    setSecondCurrency(newSecondCurrency);
    setFirstCurrencyAmount(
      calculateAmount(
        secondCurrencyAmount,
        newSecondCurrency,
        firstCurrency,
        currencyRates
      )
    );
  };

  return (
    <Box display='grid' alignItems='center' height='100vh'>
      <ConverterHeader currencyRates={currencyRates} />
      <Box
        display='flex'
        bgcolor='#dfd5d5'
        width={{ xs: '80%', md: '40%' }}
        margin='0 auto'
        padding={{ xs: '15px', sm: '40px', md: '100px' }}
        borderRadius={{ xs: '10px', sm: '30px' }}
        flexDirection='column'
        alignItems='center'
        gap={3}
        boxShadow='0px 20px 20px rgba(0,0, 0, 0.5);'
      >
        <CurrencyInput
          currencies={Object.keys(currencyRates)}
          onAmountChange={firstCurrencyAmountChangeHandler}
          currency={firstCurrency}
          onCurrencyChange={firstCurrencyChangeHandler}
          currencyAmount={firstCurrencyAmount}
        />
        <div className='animate'>
          <CurrencyExchangeIcon sx={{ color: '#240b36' }} />
        </div>
        <CurrencyInput
          currencies={Object.keys(currencyRates)}
          onAmountChange={secondCurrencyAmountChangeHandler}
          currency={secondCurrency}
          onCurrencyChange={secondCurrencyChangeHandler}
          currencyAmount={secondCurrencyAmount}
        />
        {isError && (
          <p style={{ fontSize: 20, color: 'red' }}>{isError.message}</p>
        )}
      </Box>
    </Box>
  );
};

export default Converter;
