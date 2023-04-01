# int()
Return an integer object constructed from a number or string **x**, or return `0` if no arguments are given.

- If **x** defines `__int__()`, `int(x)` returns `x.__int__()`.
- If **x** defines `__index__()`, it returns `x.__index__()`.
- If **x** defines `__trunc__()`, it returns `x.__trunc__()`.

For floating point numbers, this truncates towards zero.

If **x** is not a number or if **base** is given, then **x** must be a string, bytes, or bytearray instance representing an integer in radix **base**. Optionally, the string can be preceded by `+` or `-` (with no space in between), have leading zeros, be surrounded by whitespace, and have single underscores interspersed between digits.

A base-n integer string contains digits, each representing a value from 0 to n-1. The values 0–9 can be represented by any Unicode decimal digit. The values 10–35 can be represented by `a` to `z` (or `A` to `Z`). The default **base** is 10. The allowed bases are 0 and 2–36. Base-2, -8, and -16 strings can be optionally prefixed with `0b`/`0B`, `0o`/`0O`, or `0x`/`0X`, as with integer literals in code. For base 0, the string is interpreted in a similar way to an integer literal in code, in that the actual base is 2, 8, 10, or 16 as determined by the prefix. Base 0 also disallows leading zeros: `int('010', 0)` is not legal, while `int('010')` and `int('010', 8)` are.

### Syntax
```python
int()
int(x=0)
int(x, base=10)
```

### Examples
```python
int() # 0
int("100") # 100
int("010") # 10
int("4_0_4") # 404
int(0b11) # 3
int(0xAA) # 170
```