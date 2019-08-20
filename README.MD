# New Document

### Description

This is a simple project, which reads selected .json file that contains cash in, cash out by natural or juridical person, calculates the fee based on given config and prints the result to stdout.

### How to run

`node app.js input.json`

### Modules used
path: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html "https://nodejs.org/api/path.html")
fs: [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html "https://nodejs.org/api/fs.html")
request: [https://nodejs.org/api/http.html](https://nodejs.org/api/http.html "https://nodejs.org/api/http.html")

### Testing

Mocha and chai is used for testing. Testing code is located in `test` directory. `test` directory mimics the the main program directory.

`mocha test/*`
` mocha test/action/calcCashIn`

Mocha: [https://mochajs.org/](https://mochajs.org/ "https://mochajs.org/")
Chai: [https://www.chaijs.com/](https://www.chaijs.com/ "https://www.chaijs.com/")

### Example
**input:**

`[
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } },
     { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 2, "user_type": "juridical", "type": "cash_in", "operation": { "amount": 1000000.00, "currency": "EUR" } },
    { "date": "2016-01-10", "user_id": 3, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-02-15", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
]`

**output:**

0.06
0.90
87.00
3.00
0.30
0.30
5.00
0.00
0.00
### Commission fees
#### For Cash In
Commission fee - 0.03% from total amount, but no more than 5.00 EUR.

You can get configuration from API

#### For Cash Out
There are different commission fees for cash out for natural and legal persons.

##### Natural Persons
Default commission fee - 0.3% from cash out amount.

1000.00 EUR per week (from monday to sunday) is free of charge.

If total cash out amount is exceeded - commission is calculated only from exceeded amount (that is, for 1000.00 EUR there is still no commission fee).

You can get configuration from API

##### Legal persons
Commission fee - 0.3% from amount, but not less than 0.50 EUR for operation.

You can get configuration from API

#### Rounding
After calculating commission fee, it's rounded to the smallest currency item (for example, for EUR currency - cents) to upper bound (ceiled). For example, 0.023 EUR should be rounded to 3 Euro cents.

### Config requests
cash in: [http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in](http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in")

conversion rates: [http://private-38e18c-uzduotis.apiary-mock.com/rates](http://private-38e18c-uzduotis.apiary-mock.com/rates "http://private-38e18c-uzduotis.apiary-mock.com/rates")

juridical cash out: [http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical](http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical")

natural cash out: [http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural](http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural "http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural")

### Components

#### action

##### calcCashIn.js({amount, totalWeek, feeConfig})
calculates and returns cash in fee

##### calcJuridicalCashOut.js({amount, totalWeek, feeConfig})
calculates and returns juridicalCashOut fee

##### calcNaturalCashOut.js({amount, totalWeek, feeConfig})
calculates and returns naturalCashOut fee

##### index.js({operationsData, feeConfig})
the part which creates User instance, invokes user.operation method, stores and resolves result at the end.

#### config

##### getConfig.js
invokes requestCashInConfig, requestConversionRates, requestJuridicalUserCashOut, naturalUserCashOut, stores and returns returned result in an object.

##### requestCashInConfig.js
requests and resolves cash in config

##### requestConfig.js(type)
based on type, calls and resolves config request accordingly

##### requestConversionRates.js
requests and resolves conversion rates config

##### requestJuridicalUserCashOutConfig.js
requests and resolves juridical user cash out config

##### requestNaturalUserCashOutConfig.js
requests and resolves natural user cash out config

#### Operation

##### index.js({date, user_id, user_type, type, operation, totalWeek, feeConfig})
Operation class.

##### calculateAmount()
calculates and returns amount in EUR based on conversion rates config

##### calculateFee()
calculates and resolves fee

##### getAmount()
returns instance amount

##### getUserType()
returns instance user_type

##### getType()
returns instance type

#### tools

##### calcWeek(date)
calculates week number since unix beginning

##### getFileName(args)
returns third array element as parsed args are expected to be node parameters

##### readFile(fileName)
reads and returns file buffer based on file name in process.cwd() directory.

##### readJson(rawData)
fixes and returns json. rawData is expected to be invalid json string or buffer which would have some trailing commas, that will not work with JSON.parse

#### User

##### index.js({user_id})
User class

##### operation({operationData, feeConfig})
creates operation class, pushes it to corresponding instance operations variable, runs operations.calculateFee() and retuns the resuls

##### resetTotal()
resetTotal sets cash in or cash out of any user to 0. This method is called only if new week from previous operation occurs.

#### app.js
starting file, which runs task.js

#### task.js
all of the action happens here. task gets invokes getFileName, readFile, readJson functions, invokes config call, action function and finally prints retured result to stdout


# Readme.md

**Table of Contents**

[TOC]

