---
aliases:
---
> [!info] Reminder Flow Diagram: CAPM → WACC → DCF
> 
> ```mermaid
> flowchart TD
> A[CAPM: Calculate Cost of Equity] --> B[Combine with Cost of Debt]
> B --> C[Compute WACC]
> C --> D[Use WACC as Discount Rate in DCF]
> ```
> 

---
## *Step 1: Calculate Cost of Equity using CAPM*

The *Capital Asset Pricing Model (CAPM)* formula:

$$
\text{Cost of Equity (}R_e\text{)} = R_f + \beta \times (R_m - R_f)
$$

Assumptions:
•⁠  ⁠Risk-free rate $R_f$ = *3%*
•⁠  ⁠Market return $R_m$ = *8%*
•⁠  ⁠Beta $\beta$ = *1.2*

$$
R_e = 3\% + 1.2 \times (8\% - 3\%) = 3\% + 1.2 \times 5\% = 3\% + 6\% = \mathbf{9\%}
$$

---

## *Step 2: Calculate WACC (Weighted Average Cost of Capital)*
$$
\text{WACC} = \frac{E}{V} \times R_e + \frac{D}{V} \times R_d \times (1 - T)
$$

Assumptions:
•⁠  ⁠Equity $E$ = \$60M
•⁠  ⁠Debt $D$ = \$40M
•⁠  ⁠Total Value $V$ = \$100M
•⁠  ⁠Cost of Debt $R_d$ = *5%*
•⁠  ⁠Tax rate $T$ = *25%*

$$
\text{WACC} = \frac{60}{100} \times 9\% + \frac{40}{100} \times 5\% \times (1 - 0.25)
$$
$$
\text{WACC} = 0.6 \times 9\% + 0.4 \times 5\% \times 0.75
$$
$$
\text{WACC} = 5.4\% + 1.5\% = \mathbf{6.9\%}
$$

---

## *Step 3: Discount Future Cash Flows (DCF)*
Assume projected *Free Cash Flows (FCF)*:
•⁠  ⁠Year 1: \$10M
•⁠  ⁠Year 2: \$12M
•⁠  ⁠Year 3: \$14M
•⁠  ⁠Terminal Growth Rate: *2%*
•⁠  ⁠WACC: *6.9%*

### *Present Value of FCFs*
$$
PV = \frac{10}{(1+0.069)^1} + \frac{12}{(1+0.069)^2} + \frac{14}{(1+0.069)^3}

$$
$$
PV = 9.35 + 10.50 + 11.61 = \mathbf{\$31.46M}
$$

### *Terminal Value*
$$
TV = \frac{\text{FCF}_3 \times (1+g)}{\text{WACC} - g} = \frac{14 \times (1+0.02)}{0.069 - 0.02} = \frac{14.28}{0.049} \approx \mathbf{\$291.43M}
$$

Discount Terminal Value:
$$
PV_{TV} = \frac{291.43}{(1+0.069)^3} \approx 291.43 / 1.221 = \mathbf{\$238.7M}
$$

### *Enterprise Value*
$$
EV = PV_{FCF} + PV_{TV} = 31.46 + 238.7 = \mathbf{\$270.16M}
$$

---

## *Summary*
•⁠  ⁠*Cost of Equity (CAPM)*: 9%
•⁠  ⁠*WACC*: 6.9%
•⁠  ⁠*Enterprise Value (DCF)*: \$270.16M