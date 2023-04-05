# AttributeError

Raised when an attribute reference or assignment fails. 

?> When an object does not support attribute references or attribute assignments at all, [`TypeError`](/exceptions/TypeError.md) is raised.

The **name** and **obj** attributes can be set using keyword-only arguments to the constructor. When set they represent the name of the attribute that was attempted to be accessed and the object that was accessed for said attribute, respectively.