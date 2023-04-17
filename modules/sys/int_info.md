# sys.int_info

A named tuple that holds information about Python’s internal representation of integers. The attributes are read only.

| Attribute                  | Explanation                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| bits_per_digit             | number of bits held in each digit. Python integers are stored internally in base `2**int_info.bits_per_digit` |
| sizeof_digit               | size in bytes of the C type used to represent a digit |
| default_max_str_digits     | default value for [`sys.get_int_max_str_digits()`](/modules/sys/get_int_max_str_digits.md) when it is not otherwise explicitly configured. |
| str_digits_check_threshold | minimum non-zero value for [`sys.set_int_max_str_digits()`](/modules/sys/set_int_max_str_digits.md), `PYTHONINTMAXSTRDIGITS`, or `-X int_max_str_digits.` |

### Syntax

```python
sys.int_info
```