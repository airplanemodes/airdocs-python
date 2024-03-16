# while

The `while` statement is used for repeated execution as long as an expression is true.

?> A  `while` loop can include an else clause.

### Syntax

```python
while expression:
    suite
```

### Examples

Using a loop counter:

```python
i = 1
while i < 5:
    print(i, end=' ')
    i+=1

# Output: 1 2 3 4
```

The Collatz conjecture, using optional `else` clause:

```python
from random import randint
number = randint(1000, 10000)

while number != 1:
    if number % 2 == 0:
        print("Number is even: " + str(number) + ", dividing.")
        number = int(number / 2)
    else:
        print("Number is odd: " + str(number) + ", multiplying.")
        number = number * 3 + 1
else:
    print("Number is 1.")
```
