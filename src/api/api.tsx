import { RequestOptionsType } from '../interfaces/api';

export const getCurrencies = async () => {
  const myHeaders = new Headers();
  myHeaders.append('apikey', '0UIOKdjfTgL0pjic8SzFR5nAHVsMId7F');
  const requestOptions: RequestOptionsType = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  const response = await fetch(
    'https://api.apilayer.com/fixer/latest?symbols=EUR,UAH,USD,JPY,PLN&base=UAH',
    requestOptions
  );
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  const data = await response.json();
  return data.rates;
};
