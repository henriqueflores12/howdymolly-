/* for the moment concentrate on the first line of javascript code.
two varibles are declered (userName and message),end they are used to hold strings(the user's name and a message for that user) */
var userName;
var message;
userName = "Molly";
message = "See our upcoming range";

/*the code to update the page (shown in the last for lines) this code selects to elements using the values stored in this variables. */
var elName = document.getElementById("name");
elName.textContent = userName;
var elNote = document.getElementById("note");
elNote.textContent = message;
