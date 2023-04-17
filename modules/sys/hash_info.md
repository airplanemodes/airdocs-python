# sys.hash_info

A named tuple giving parameters of the numeric hash implementation.

| attribute  | explanation                                                     |
| ---------- | --------------------------------------------------------------- |
| width      | width in bits used for hash values                              |
| modulus    | prime modulus P used for numeric hash scheme                    |
| inf        | hash value returned for a positive infinity                     |
| nan        | (this attribute is no longer used)                              |
| imag       | multiplier used for the imaginary part of a complex number      |
| algorithm  | name of the algorithm for hashing of str, bytes, and memoryview |
| hash_bits  | internal output size of the hash algorithm                      |
| seed_bits  | size of the seed key of the hash algorithm                      |

### Syntax

```python
sys.hash_info
```