# while

The `while` statement is used for repeated execution as long as an expression is true.

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
number = 87298

while number != 1:
    if number % 2 == 0:
        print("Number is even: " + str(int(number)) + ", dividing.")
        number = number / 2
    else:
        print("Number is odd: " + str(int(number)) + ", multiplying.")
        number = number * 3 + 1
else:
    print("Number is 1.")
```