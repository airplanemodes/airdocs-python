# marshal.dumps()

Return the [`bytes`](/built-in-types/bytes/) object that would be written to a file by `dump(value, file)`.

The **value** must be a supported type. Raise a [`ValueError`](/exceptions/ValueError.md) exception if **value** has (or contains an object that has) an unsupported type.

Code objects are only supported if **allow_code** is true.

The **version** argument indicates the data format that `dumps` should use.

Raises an auditing event `marshal.dumps` with arguments `value`, `version`.

### Syntax

```python
marshal.dumps(value, version=version, /, *, allow_code=True)
```
