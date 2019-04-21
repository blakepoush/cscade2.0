/*
function idleTimer() {
  var timoutWarning = 30000; // Display warning in 14 Mins.
	var timoutNow = 45000; // Timeout in 15 mins would be 900000.
	var logoutUrl = '/usefulLinks'; // URL to logout page.

	var warningTimer;
	var timeoutTimer;

	// Start timers.
	function StartTimers() {
		warningTimer = setTimeout("IdleWarning()", timoutWarning);
		timeoutTimer = setTimeout("IdleTimeout()", timoutNow);
	}

	// Reset timers.
	function ResetTimers() {
		clearTimeout(warningTimer);
		clearTimeout(timeoutTimer);
		StartTimers();
		$("#timeout").dialog('close');
	}

	// Show idle timeout warning dialog.
	function IdleWarning() {
	  //	$("#timeout").dialog({
		//modal: true
		alert("Warning, your page will redirected to login page. Due to not move your mouse within the page in 15 minutes.");
	//});
	}

	// Logout the user.
	function IdleTimeout() {
		window.location = logoutUrl;
	}
}
idleTimer();
*/