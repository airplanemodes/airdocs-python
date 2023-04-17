# sys.float_info

A named tuple holding information about the float type. It contains low level information about the precision and internal representation. The values correspond to the various floating-point constants defined in the standard header file `float.h` for the C programming language.

| attribute    | float.h macro    | explanation |
| ------------ | ---------------- | ----------- |
| `epsilon`    | `DBL_EPSILON`    | difference between 1.0 and the least value greater than 1.0 that is representable as a float |
| `dig`        | `DBL_DIG`        | maximum number of decimal digits that can be faithfully represented in a float |
| `mant_dig`   | `DBL_MANT_DIG`   | float precision: the number of base-`radix` digits in the significand of a float |
| `max`        | `DBL_MAX`        | maximum representable positive finite float |
| `max_exp`    | `DBL_MAX_EXP`    | maximum integer *e* such that `radix**(e-1)` is a representable finite float |
| `max_10_exp` | `DBL_MAX_10_EXP` | maximum integer *e* such that `10**e` is in the range of representable finite floats |
| `min`        | `DBL_MIN`        | minimum representable positive *normalized* float |
| `min_exp`    | `DBL_MIN_EXP`    | minimum integer *e* such that `radix**(e-1)` is a normalized float |
| `min_10_exp` | `DBL_MIN_10_EXP` | minimum integer *e* such that `10**e` is a normalized float |
| `radix`      | `FLT_RADIX`      | radix of exponent representation |
| `rounds`     | `FLT_ROUNDS`     | integer representing the rounding mode for floating-point arithmetic. This reflects the value of the system `FLT_ROUNDS` macro at interpreter startup time: `-1` indeterminable, `0` toward zero, `1` to nearest, `2` toward positive infinity, `3` toward negative infinity |

The attribute `sys.float_info.dig` needs further explanation. If `s` is any string representing a decimal number with at most `sys.float_info.dig` significant digits, then converting `s` to a float and back again will recover a string representing the same decimal value:

```python
>>> import sys
>>> sys.float_info.dig # 15
>>> s = '3.14159265358979'    # decimal string with 15 significant digits
>>> format(float(s), '.15g')  # convert to float and back -> same value
# '3.14159265358979'
```

But for strings with more than `sys.float_info.dig` significant digits, this isn’t always true:

```python
>>> s = '9876543211234567'    # 16 significant digits is too many!
>>> format(float(s), '.16g')  # conversion changes value
# '9876543211234568'
```

### Syntax

```python
sys.float_info
```