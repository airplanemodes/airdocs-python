# for

The `for` statement is used to iterate over the elements of a sequence (such as a [`str`](/built-in-types/str/), [`tuple`](/built-in-types/tuple/) or [`list`](/built-in-types/list/)) or other iterable object.

?> A `for` loop can include an else clause.

### Syntax

```python
for element in iterable:
    suite
```

### Examples

```python
>>> fruits = ["apple", "kiwi", "melon", "banana"]
>>> for fruit in fruits:
...     print(fruit + " is tasty!")
...
# apple is tasty!
# kiwi is tasty!
# melon is tasty!
# banana is tasty!
```
