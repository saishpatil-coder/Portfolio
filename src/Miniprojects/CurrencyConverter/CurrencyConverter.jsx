import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Popular currencies with their symbols and names
  const currencies = {
    USD: { symbol: '$', name: 'US Dollar' },
    EUR: { symbol: '€', name: 'Euro' },
    GBP: { symbol: '£', name: 'British Pound' },
    JPY: { symbol: '¥', name: 'Japanese Yen' },
    CAD: { symbol: 'C$', name: 'Canadian Dollar' },
    AUD: { symbol: 'A$', name: 'Australian Dollar' },
    CHF: { symbol: 'CHF', name: 'Swiss Franc' },
    CNY: { symbol: '¥', name: 'Chinese Yuan' },
    INR: { symbol: '₹', name: 'Indian Rupee' },
    BRL: { symbol: 'R$', name: 'Brazilian Real' },
    RUB: { symbol: '₽', name: 'Russian Ruble' },
    KRW: { symbol: '₩', name: 'South Korean Won' },
    MXN: { symbol: '$', name: 'Mexican Peso' },
    SGD: { symbol: 'S$', name: 'Singapore Dollar' },
    NZD: { symbol: 'NZ$', name: 'New Zealand Dollar' },
    SEK: { symbol: 'kr', name: 'Swedish Krona' },
    NOK: { symbol: 'kr', name: 'Norwegian Krone' },
    DKK: { symbol: 'kr', name: 'Danish Krone' },
    PLN: { symbol: 'zł', name: 'Polish Złoty' },
    TRY: { symbol: '₺', name: 'Turkish Lira' }
  };

  // Fetch exchange rate from API
  const fetchExchangeRate = async () => {
    if (fromCurrency === toCurrency) {
      setExchangeRate(1);
      setConvertedAmount(amount);
      setLastUpdated(new Date());
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Using ExchangeRate-API (free tier)
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate');
      }

      const data = await response.json();
      const rate = data.rates[toCurrency];
      
      if (!rate) {
        throw new Error('Exchange rate not available');
      }

      setExchangeRate(rate);
      setConvertedAmount(amount * rate);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Failed to fetch exchange rate. Please try again.');
      console.error('Exchange rate error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch exchange rate when currencies change
  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  // Update converted amount when input amount changes
  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [amount, exchangeRate]);

  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Format amount with proper decimal places
  const formatAmount = (value) => {
    if (value === null || value === undefined) return '0';
    return parseFloat(value).toFixed(2);
  };

  // Format last updated time
  const formatLastUpdated = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString();
  };

  return (
    <div className="currency-converter-container">
      {/* Header */}
      <div className="converter-header">
        <h1 className="converter-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Currency Converter
          </span>
        </h1>
        <p className="converter-subtitle">Real-time exchange rates with live API data</p>
      </div>

      {/* Converter Body */}
      <div className="converter">
        {/* Amount Input */}
        <div className="input-section">
          <label className="input-label">Amount</label>
          <div className="amount-input-container">
            <span className="currency-symbol">
              {currencies[fromCurrency]?.symbol}
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="amount-input"
              placeholder="Enter amount"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Currency Selection */}
        <div className="currency-selection">
          <div className="currency-group">
            <label className="currency-label">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="currency-select"
            >
              {Object.entries(currencies).map(([code, currency]) => (
                <option key={code} value={code}>
                  {code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <button 
            onClick={swapCurrencies}
            className="swap-btn"
            title="Swap currencies"
          >
            ⇄
          </button>

          <div className="currency-group">
            <label className="currency-label">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="currency-select"
            >
              {Object.entries(currencies).map(([code, currency]) => (
                <option key={code} value={code}>
                  {code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result Section */}
        <div className="result-section">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Fetching exchange rate...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p>{error}</p>
              <button onClick={fetchExchangeRate} className="retry-btn">
                Try Again
              </button>
            </div>
          ) : (
            <>
              <div className="conversion-result">
                <div className="result-amount">
                  <span className="result-symbol">
                    {currencies[toCurrency]?.symbol}
                  </span>
                  <span className="result-value">
                    {formatAmount(convertedAmount)}
                  </span>
                </div>
                <div className="result-details">
                  <p className="exchange-rate">
                    1 {fromCurrency} = {formatAmount(exchangeRate)} {toCurrency}
                  </p>
                  <p className="last-updated">
                    Last updated: {formatLastUpdated(lastUpdated)}
                  </p>
                </div>
              </div>

              {/* Quick Conversions */}
              <div className="quick-conversions">
                <h3>Quick Conversions</h3>
                <div className="quick-grid">
                  {[1, 10, 100, 1000].map((value) => (
                    <button
                      key={value}
                      onClick={() => setAmount(value)}
                      className={`quick-btn ${amount === value ? 'active' : ''}`}
                    >
                      {currencies[fromCurrency]?.symbol}{value}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Popular Currency Pairs */}
        <div className="popular-pairs">
          <h3>Popular Pairs</h3>
          <div className="pairs-grid">
            {[
              { from: 'USD', to: 'EUR' },
              { from: 'EUR', to: 'USD' },
              { from: 'USD', to: 'GBP' },
              { from: 'GBP', to: 'USD' },
              { from: 'USD', to: 'JPY' },
              { from: 'EUR', to: 'GBP' }
            ].map((pair) => (
              <button
                key={`${pair.from}-${pair.to}`}
                onClick={() => {
                  setFromCurrency(pair.from);
                  setToCurrency(pair.to);
                }}
                className={`pair-btn ${fromCurrency === pair.from && toCurrency === pair.to ? 'active' : ''}`}
              >
                {pair.from} → {pair.to}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 