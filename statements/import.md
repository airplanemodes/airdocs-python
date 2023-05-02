# import

The basic `import` statement (no `from` clause) is executed in two steps:
- Find a module, loading and initializing it if necessary.
- Define a name or names in the local namespace for the scope where the `import` statement occurs.

When the statement contains multiple clauses (separated by commas) the two steps are carried out separately for each clause, just as though the clauses had been separated out into individual import statements.

If the requested module is retrieved successfully, it will be made available in the local namespace in one of three ways:
- If the module name is followed by `as`, then the name following `as` is bound directly to the imported module.
- If no other name is specified, and the module being imported is a top level module, the module’s name is bound in the local namespace as a reference to the imported module.
- If the module being imported is not a top level module, then the name of the top level package that contains the module is bound in the local namespace as a reference to the top level package. The imported module must be accessed using its full qualified name rather than directly.

The `from` form uses a slightly more complex process:

1. Find the module specified in the from clause, loading and initializing it if necessary.
2. For each of the identifiers specified in the import clauses:
    - check if the imported module has an attribute by that name.
    - if not, attempt to import a submodule with that name and then check the imported module again for that attribute.
    - if the attribute is not found, [`ImportError`](/exceptions/ImportError.md) is raised.
    - otherwise, a reference to that value is stored in the local namespace, using the name in the as clause if it is present, otherwise using the attribute name.

If the list of identifiers is replaced by a star (`'*'`), all public names defined in the module are bound in the local namespace for the scope where the import statement occurs.

The *public names* defined by a module are determined by checking the module’s namespace for a variable named `__all__`. If defined, it must be a sequence of strings which are names defined or imported by that module. The names given in `__all__` are all considered public and are required to exist. If `__all__` is not defined, the set of public names includes all names found in the module’s namespace which do not begin with an underscore character (`'_'`). `__all__` should contain the entire public API. It is intended to avoid accidentally exporting items that are not part of the API (such as library modules which were imported and used within the module).

The wild card form of import — `from module import *` — is only allowed at the module level. Attempting to use it in class or function definitions will raise a [`SyntaxError`](/exceptions/SyntaxError.md).

### Syntax

```python
import module
from module import identifier
from module import identifier, identifier
from module import identifier as identifier
```

### Examples

Import [`math`](/modules/math/) module:

```python
import math
```

Import [`choice`](/modules/random/choice.md) function from [`random`](/modules/random/) module:

```python
from random import choice
```