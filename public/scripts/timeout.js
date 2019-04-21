
function idleTimer() {
  var timoutWarning = 540000; // Display warning at 9 minutes
	var timoutNow = 600000; // Timeout in 10 minutes
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
	}

	// Show idle timeout warning dialog.
	function IdleWarning() {
		alert("Warning, you will soon be logged out due to inactivity.");
	//});
	}

	// Logout the user.
	function IdleTimeout() {
		window.location = logoutUrl;
	}
}

idleTimer();
