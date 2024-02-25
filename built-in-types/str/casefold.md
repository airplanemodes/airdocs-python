# str.casefold()

Return a casefolded copy of the string. Casefolded strings may be used for caseless matching.

Casefolding is similar to lowercasing but more aggressive because it is intended to remove all case distinctions in a string. For example, the German lowercase letter `'ß'` is equivalent to `"ss"`. Since it is already lowercase, [`lower()`](/built-in-types/str/lower.md) would do nothing to `'ß'`. `casefold()` converts it to `"ss"`.

The casefolding algorithm is described in section 3.13 ‘Default Case Folding’ of the [Unicode Standard](https://www.unicode.org/versions/Unicode15.0.0/ch03.pdf).

### Syntax

```python
str.casefold()
```

### Examples

```python

```
