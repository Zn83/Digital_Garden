
## 🧩 Definition
**Volatility** measures the magnitude and frequency of price fluctuations of an asset.  
It is a core indicator of **risk** in finance: the higher the volatility, the greater the uncertainty and price variation.

Volatility can apply to:
- a single asset (stock, bond, commodity, crypto)
- a portfolio
- an index (e.g., S&P 500)
- a risk factor (interest rates, FX, credit spreads)

---

## 📐 Two Types of Volatility

### **1. Historical Volatility**
Calculated from past price data.

#### **Formula (standard deviation of returns)**

For returns $r_1, r_2, ..., r_n$:

$$
\sigma = \sqrt{\frac{1}{n - 1} \sum_{i=1}^{n} (r_i - \bar{r})^2}
$$

Where:  
$\bar{r}$ = mean return.

#### **Annualization (for daily returns)**

$$
\sigma_{\text{annual}} = \sigma_{\text{daily}} \times \sqrt{252}
$$

---

### **2. Implied Volatility**
Derived from **option prices**, typically using Black–Scholes or other models.

It reflects **the market’s expectation** of future volatility.

> Implied volatility is not backward-looking; it is embedded in the price investors are willing to pay for options (hedging demand).

---

## 🔧 Volatility in Black–Scholes
In the Black–Scholes model, volatility $\sigma$ is the only **unobservable** parameter — it must be inferred from market prices.

Price dynamics follow:

$$
dS_t = \mu S_t \, dt + \sigma S_t \, dW_t
$$

where $dW_t$ is a Wiener process (Brownian motion).

---

## 🌪 The VIX (Volatility Index)

The **VIX**, often called the *“fear index,”* measures the **implied volatility** of the **S&P 500** over the next 30 days, based on option prices.

- Expressed as an annualized percentage.
- High VIX → market stress, uncertainty.
- Low VIX → calm markets.

Typical ranges:
- VIX ≈ 10–15 → stable market  
- VIX > 25 → elevated uncertainty  
- VIX > 40 → crisis levels  

The VIX is produced by the CBOE using a wide set of **out-of-the-money options** to capture the full implied volatility curve (the volatility smile/skew).

---

## 🧠 Related Concepts
- **Volatility clustering:** periods of high volatility tend to cluster.
- **GARCH models:** used to model time-varying volatility.
- **Realized volatility:** computed from high-frequency (intraday) data.
- **Implied vs. realized volatility:** widely used in options trading and risk management.

---

## 📌 Summary
- Volatility measures the **dispersion of returns** (standard deviation).  
- It can be **historical** (observed) or **implied** (expected by the market).  
- The **VIX** is the global benchmark for market-implied volatility.  
- Volatility is fundamental to risk management, portfolio construction, and the pricing of derivatives.