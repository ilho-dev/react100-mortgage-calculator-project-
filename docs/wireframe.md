# Mortgage Calculator Wireframe

Layout

---------------------------------
|      Mortgage Calculator      |
---------------------------------

Loan Balance: [ number input ]

Interest Rate (%): [ number input ]

Loan Term: [ 15 ▼ ]

[ Calculate ]

Output:
$XXXX.XX is your payment


Component Structure

App
 ├── h1
 ├── balance input
 ├── rate input
 ├── term select
 ├── calculate button
 └── output div

State in App:
- balance
- rate
- term
- output

Flow:
Input change → setState
Click calculate → calculate() → setOutput()
