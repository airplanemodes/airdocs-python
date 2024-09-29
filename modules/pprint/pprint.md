# pprint.pprint()

Return the formatted representation of **object** as a string.

**indent**, **width**, **depth**, **compact**, **sort_dicts** and **underscore_numbers** are passed to the [`PrettyPrinter`](/modules/pprint/PrettyPrinter/) constructor as formatting parameters and their meanings are as described in the documentation above.

### Syntax

```python
pprint.pformat(
    object, indent=1, width=80, depth=None, *, 
    compact=False, sort_dicts=True, underscore_numbers=False
)
```
