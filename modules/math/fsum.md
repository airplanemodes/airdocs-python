# math.fsum()

Return an accurate floating point sum of values in the **iterable**.

?> The algorithm’s accuracy depends on IEEE-754 arithmetic guarantees and the typical case where the rounding mode is half-even. On some non-Windows builds, the underlying C library uses extended precision addition and may occasionally double-round an intermediate sum causing it to be off in its least significant bit.

### Syntax

```python
math.fsum(iterable)
```

### Examples

Avoids loss of precision by tracking multiple intermediate partial sums:

```python
>>> sum([.1, .1, .1, .1, .1, .1, .1, .1, .1, .1])
# 0.9999999999999999

>>> fsum([.1, .1, .1, .1, .1, .1, .1, .1, .1, .1])
# 1.0
```