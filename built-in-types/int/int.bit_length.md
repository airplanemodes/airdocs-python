# int.bit_length()

Return the number of bits necessary to represent an integer in binary, excluding the sign and leading zeros:
```python
n = -37
bin(n) # '-0b100101'
n.bit_length() # 6
```