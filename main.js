// give an alert whenever the signup button is clicked
var sign_up = document.getElementById('sign-up');

sign_up.onclick = function(){
  alert('Submitting Sucessfully');
}

// add a custom event handler whenever the feedback button is clicked
var feedback = document.getElementById('feedback');
feedback.addEventListener('click', getName);
function getName(){
  var name = prompt('Enter your name');
  alert('Hello '+name+', we are glad to get a feedback from you');
}

document.getElementById('search').onclick = function(){
	var search = comfirm('Press OK to search and Cancel to Exit');

	// Promise
	var checking = new Promise(
	    function (resolve, reject) {
	        if (search == true) {
	            var data = {
	                content: 'The searched content',
	                keyword: 'content'
	            };
	            resolve(search); // fulfilled
	        } else {
	            var reason = new Error('Not Searching');
	            reject(reason); // reject
	        }

	    }
	);
}