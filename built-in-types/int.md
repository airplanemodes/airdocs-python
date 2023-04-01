# int
Integers represent numbers in an unlimited range, subject to available (virtual) memory only. For the purpose of shift and mask operations, a binary representation is assumed, and negative numbers are represented in a variant of 2’s complement which gives the illusion of an infinite string of sign bits extending to the left.

## int.bit_length()
Return the number of bits necessary to represent an integer in binary, excluding the sign and leading zeros:
```python
n = -37
bin(n) # '-0b100101'
n.bit_length() # 6
```

## int.bit_count()
Return the number of ones in the binary representation of the absolute value of the integer. This is also known as the population count. Example:
```python
n = 19
bin(n) # '0b10011'
n.bit_count() # 3
```

## int.to_bytes()

## int.from_bytes()

## int.as_integer_ratio()
Return a pair of integers whose ratio is exactly equal to the original integer and with a positive denominator. The integer ratio of integers (whole numbers) is always the integer as the numerator and `1` as the denominator.