# sys.intern()

Enter **string** in the table of “interned” strings and return the interned string – which is **string** itself or a copy.

Interning strings is useful to gain a little performance on dictionary lookup – if the keys in a dictionary are interned, and the lookup key is interned, the key comparisons (after hashing) can be done by a pointer compare instead of a string compare. Normally, the names used in Python programs are automatically interned, and the dictionaries used to hold module, class or instance attributes have interned keys.

Interned strings are not immortal. You must keep a reference to the return value of `intern()` around to benefit from it.

### Syntax

```python
sys.intern(string)
```