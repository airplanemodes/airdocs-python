# def
A function definition defines a user-defined function object.

A function definition is an executable statement. Its execution binds the function name in the current local namespace to a function object (a wrapper around the executable code for the function). This function object contains a reference to the current global namespace as the global namespace to be used when the function is called.

?> The function definition does not execute the function body. This gets executed only when the function is called.

### Syntax
```python
def name(parameters):
    statements
```

### Examples
When one or more parameters have the form `parameter = expression`, the function is said to have “default parameter values.” For a parameter with a default value, the corresponding **argument** may be omitted from a call, in which case the parameter’s default value is substituted. If a parameter has a default value, all following parameters up until the “`*`” must also have a default value — this is a syntactic restriction that is not expressed by the grammar.
```python
# With two parameters and a default value
def multiply_by_two(a, b=2):
    return a * b

print(multiply_by_two(5)) # 10
```

**Default parameter values are evaluated from left to right when the function definition is executed.** This means that the expression is evaluated once, when the function is defined, and that the same “pre-computed” value is used for each call. This is especially important to understand when a default parameter value is a mutable object, such as a list or a dictionary: if the function modifies the object (e.g. by appending an item to a list), the default parameter value is in effect modified. This is generally not what was intended. A way around this is to use `None` as the default, and explicitly test for it in the body of the function, e.g.:
```python
def whats_on_the_telly(penguin=None):
    if penguin is None:
        penguin = []
    penguin.append("property of the zoo")
    return penguin
```