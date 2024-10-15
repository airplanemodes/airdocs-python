# marshal.dump()

Write the **value** on the open **file**.

The **value** must be a supported type.

The **file** must be a writeable binary file.

If the **value** has (or contains an object that has) an unsupported type, a [`ValueError`](/exceptions/ValueError.md) exception is raised — but garbage data will also be written to the **file**. The object will not be properly read back by [`load()`](/modules/marshal/load.md). Code objects are only supported if **allow_code** is true.

The **version** argument indicates the data format that [`dump`](/modules/marshal/dump.md) should use.

Raises an auditing event `marshal.dumps` with arguments `value`, `version`.

### Syntax

```python
marshal.dump(value, file, version=version, /, *, allow_code=True)
```
