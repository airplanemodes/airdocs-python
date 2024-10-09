# str.join()

Return a string which is the concatenation of the strings in **iterable**.

A [`TypeError`](/exceptions/TypeError.md) will be raised if there are any non-string values in **iterable**, including [`bytes`](/built-in-types/bytes/) objects.

The separator between elements is the string providing this method.

### Syntax

```python
str.join(iterable)
```

### Examples

```python
>>> "".join(["s", "u", "n"]) # 'sun'
>>> "-".join(["m", "o", "o", "n"]) # 'm-o-o-n'
```
