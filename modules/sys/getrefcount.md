# sys.getrefcount()

Return the reference count of the **object**.

The count returned is generally one higher than you might expect, because it includes the (temporary) reference as an argument to `getrefcount()`.

### Syntax

```python
sys.getrefcount(object)
```