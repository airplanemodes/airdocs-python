# `function`

### Special attributes

### `__globals__`
A reference to the dictionary that holds the function’s global variables — the global namespace of the module in which the function was defined. Read-only.

### `__closure__`
`None` or a tuple of cells that contain bindings for the function’s free variables. See below for information on the `cell_contents` attribute. Read-only.

?> Most of the attributes labelled “Writable” check the type of the assigned value.

Function objects also support getting and setting arbitrary attributes, which can be used, for example, to attach metadata to functions. Regular attribute dot-notation is used to get and set such attributes.

?> The current implementation only supports function attributes on user-defined functions. Function attributes on built-in functions may be supported in the future.