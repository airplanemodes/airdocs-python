# dict.fromkeys()

Create a new dictionary with keys from **iterable** and values set to **value**.

`fromkeys()` is a class method that returns a new dictionary. **value** defaults to `None`. All of the values refer to just a single instance, so it generally doesn’t make sense for **value** to be a mutable object such as an empty list. To get distinct values, use a dict comprehension instead.

### Syntax

```python
dict.fromkeys(iterable)
dict.fromkeys(iterable, value)
```
