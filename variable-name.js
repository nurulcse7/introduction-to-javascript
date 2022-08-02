// Variable declare need five (5) things:
// 01. Variable (var, let, const)
// 02. Variable name (without keyword/reserved word, not number/string, no space/dash )
// 03. = (equal sign)
// 04. Variable value (number, string, boolean, array, object)
// 05. ; (Semi colon sign) (not mandatory)


// Variable // var, let, const
var price = 29; // ok

// variable declare not ok
vaR price = 29;
Var price = 29;
VAR price = 29;

// 1. variable name can not be any keywords /reserved word
var false = 96; // variable declare not ok
var return = true;  // variable declare not ok

// 2. variable name can not starts with a number but can ends with a number
var 99Club = 1964;  // variable declare not ok
var club25 = 2025;  // variable declare ok

// 3. variable name can not have quotation/string
var "name" = "Tom Hanks"; // variable declare not ok
var name = "Tom Hanks"  // variable declare ok

// 4. variable name has to be in one work. No space
var my home address = "New California";

// 5. variable name can not use dash
var user-name = "raj bappa"; // variable declare not ok
var user_name = "bappa raj"; // variable declare ok

// 6. How to use long names
var usercurrenthomeaddress = "andor killa bandor ban"; // variable declare not ok
var user_home_address = "andor killa bandor ban"; // snake case
var userHomeAddress = "andor killa bandor ban"; // camel case: we will use this one
var UserHomeAddress = "andor killa bandor ban"; // pascal case

// 7. variable name is case sensitive (keyword same but different variable name)
var person = 25;
var Person = 35;
