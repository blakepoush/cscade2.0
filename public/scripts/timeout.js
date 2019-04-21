
function idleTimer() {
  var timoutWarning = 30000; // Display warning in 14 Mins.
	var timoutNow = 45000; // Timeout in 15 mins would be 900000.
	var logoutUrl = '/logout'; // URL to logout page.
	var body = document.getElementById("body");

	// Add event listners for clicking the page or moving the mouse over the page
	body.addEventListener("click", ResetTimers);
	body.addEventListener("mousemove", ResetTimers);

	var warningTimer;
	var timeoutTimer;

	// Start the Timers
	StartTimers();

	// Start Timers Method
	function StartTimers() {
		warningTimer = setTimeout(IdleWarning, timoutWarning);
		timeoutTimer = setTimeout(IdleTimeout, timoutNow);
	}

	// Reset timers.
	function ResetTimers() {
		console.log("reset");
		clearTimeout(warningTimer);
		clearTimeout(timeoutTimer);
		StartTimers();
		//$("#timeout").dialog('close');
	}

	// Show idle timeout warning dialog.
	function IdleWarning() {
	  //	$("#timeout").dialog({
		//modal: true
		alert("Warning, you will be logged out in 1 min unless . Due to not move your mouse within the page in 15 minutes.");
	//});
	}

	// Logout the user.
	function IdleTimeout() {
		window.location = logoutUrl;
	}
}

idleTimer();
