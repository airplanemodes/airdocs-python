# math

**Mathematical functions.**

This module provides access to the mathematical functions defined by the C standard.

These functions cannot be used with complex numbers. Use the functions of the same name from the [`cmath`](/modules/cmath/) module if you require support for complex numbers. The distinction between functions which support complex numbers and those which don’t is made since most users do not want to learn quite as much mathematics as required to understand complex numbers. Receiving an exception instead of a complex result allows earlier detection of the unexpected complex number used as a parameter, so that the programmer can determine how and why it was generated in the first place.