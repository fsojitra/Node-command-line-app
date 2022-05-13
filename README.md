## Installation

Install the dependencies:

```
npm i
```

Install the package globally on your machine:

```
npm i -g
```

## Usage

1. To view all the command and it's detail:

```
node index.js
```

2. To get balance: bydefault it will be 0

```
node index.js balance
```

3. To add balance: only number can be add else it will give err

```
node index.js addBalance <balance>
```

For example:

```
node index.js addBalance 10
```

4. To Get List of chennel that is in you package : bydefault 3 basic chennel will be there 

```
node index.js tariff-package
```

5. To get list of chennel of the category : category could be entertainment/ sports/ education/ regional

```
node index.js get-tarrif-package-channel-list <category>
```
For example:

```
node index.js get-tarrif-package-channel-list entertainment
```

6. To add chennel : it will give err if chennel is already there or your balance is less than chennel price

```
node index.js add-chennel <chennel>
```
For example:

```
node index.js add-chennel entertainmentChanel1
```

7. To remove chennel : it will give err if chennel is not in you plan

```
node index.js remove-chennel <chennel>
```
For example:

```
node index.js remove-chennel entertainmentChanel1
```
