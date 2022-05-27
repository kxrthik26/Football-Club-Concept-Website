//redirected
var confirmQuery ='<h2 class="query_head">Confirm your Query</h2><div class="form_con"><label for="name">Name:</label><span id="name"></span></div><div class="form_con"><label for="email">Email:</label><span id="email"></span>	</div><div class="form_con"><label for="subject">Subject:</label><span id="subject"></span></div><div class="form_con"><label for="details">Details:</label>	<span id="details"></span><div class="form_con"><input type="button" value="Edit" id="edit" onclick="editForm();"><input type="submit" value="Send" id="send"></div>';

//initial
var userQuery = '<h2 class="query_head">Contact us</h2><div class="field"><label for="name">Name:</label><input type="text" name="name" id="name"></div><br><div class="field"><label for="email">Email:</label><input type="text" name="email" id="email"></div><br><div class="field"><label for="subject">Subject:</label><select name="subject" id="subject"><option value="direct_user">Please select a subject for your inquiry</option><option value="shipping">Delivery &amp; Shipping</option><option value="orders">Orders</option><option value="returns">Returns</option><option value="subscription">Subscription &amp; Membership</option><option value="other">Other</option></select></div><br><div class="field"><label for="details">Query:<textarea name="details" id="details" rows="5" cols="30" placeholder="Please describe your inquiry"></textarea></label></div><div><input type="button" value="View Query" onclick="validateForm();" id="view_button"></div>';

document.getElementById("display1").innerHTML = userQuery;

var name = document.query_form.name.value;
var email = document.query_form.email.value;
var subject = document.query_form.subject.value;
var query = document.query_form.details.value;
	
function validateForm() {
	name = document.query_form.name.value;
	email = document.query_form.email.value;
	subject = document.query_form.subject.value;
	query = document.query_form.details.value;
	
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if (name == "" || name == null) {
		alert("Name is required!");
		return false;
	} else if (email == "" || email == null) {
		alert("Email is required!");
		return false;
	} else if (!mailformat.test(email)) {
		alert("Invalid email!");
		return false;	   
   	} else if (subject !== "shipping" && subject !== "orders" && subject != "returns" && subject != "subscription" && subject != "other") {
		alert("Subject is required!");
		return false;
	} else if (query == "" || query == null) {
		alert("Description is required!");
		return false;
	} else if (query.length < 10) {
		alert("Description is too short!");
		return false;
	} else {
		document.getElementById("display1").innerHTML = confirmQuery;
		document.getElementById("name").innerHTML = name;
		document.getElementById("email").innerHTML = email;
		document.getElementById("subject").innerHTML = subject;
		document.getElementById("details").innerHTML = query;
	}
}

function editForm(){
	
	document.getElementById("display1").innerHTML = userQuery;
	
	document.query_form.name.value = name;
	document.query_form.email.value = email;
	document.query_form.subject.value = subject;
	document.query_form.details.value = query;
	
}
