import axios from 'axios';


let convertCurrency = async (from,to,amt) => {
    const API_KEY= `b688884ff57c3e17139e632b5f852755`;
    const convertUrl = `http://data.fixer.io/api/latest?
    access_key=${API_KEY}&base=${from}&symbols=${to}`
  try {
    const response = await axios.get(convertUrl);
    console.log(response);
    return response;
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}

export default convertCurrency;