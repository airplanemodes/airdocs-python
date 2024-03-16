# if

The `if` statement is used for conditional execution.

It selects exactly one of the suites by evaluating the expressions one by one until one is found to be `True`. If all expressions are false, the suite of the `else` clause, if present, is executed.

### Syntax

```python
if expression:
    suite
elif expression:
    suite
else:
    suite
```

### Examples

```python
x = int(input("Please enter an integer: "))

if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')
```
