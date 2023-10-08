# type

The `type` statement declares a type alias, which is an instance of [`typing.TypeAliasType`](/modules/typing/TypeAliasType.md).

Type aliases may be made generic by adding a type parameter list after the name.

`type` is a soft keyword.

### Syntax

```python
type identifier [type_params] = expression
```

### Examples

For example, the following statement creates a type alias:

```python
type Point = tuple[float, float]
```

This code is roughly equivalent to:

```python
annotation-def VALUE_OF_Point():
    return tuple[float, float]
Point = typing.TypeAliasType("Point", VALUE_OF_Point())
```

`annotation-def` indicates an annotation scope, which behaves mostly like a function, but with several small differences.

The value of the type alias is evaluated in the annotation scope. It is not evaluated when the type alias is created, but only when the value is accessed through the type alias’s `__value__` attribute. This allows the type alias to refer to names that are not yet defined.