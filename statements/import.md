# import
The basic `import` statement (no `from` clause) is executed in two steps:
- Find a module, loading and initializing it if necessary.
- Define a name or names in the local namespace for the scope where the `import` statement occurs.

When the statement contains multiple clauses (separated by commas) the two steps are carried out separately for each clause, just as though the clauses had been separated out into individual import statements.

If the requested module is retrieved successfully, it will be made available in the local namespace in one of three ways:
- If the module name is followed by `as`, then the name following `as` is bound directly to the imported module.
- If no other name is specified, and the module being imported is a top level module, the module’s name is bound in the local namespace as a reference to the imported module.
- If the module being imported is not a top level module, then the name of the top level package that contains the module is bound in the local namespace as a reference to the top level package. The imported module must be accessed using its full qualified name rather than directly.