<!doctype html>
<html>
	<head>
		<title>Login Form</title>
		<link rel="stylesheet" href="css/login.css">
	</head>
	
	<body>
		<div class="form">
			<div class="header">
				<h1>Login</h1>
			</div>
			<form action="" method="post">
				<div class="input-txt" id="email-parent">
					<input type="text" name="email" id="email" autocomplete="off" maxlength="30" required>
					<label>Email</label>
					<span class="underline"></span>
					<span class="email-counter">30</span>
					<span class="indicator"></span>
				</div>
				<div class="input-txt" id="pass-parent">
					<input type="password" name="password" id="password" autocomplete="off" maxlength="10" required>
					<label>Password</label>
					<span class="underline"></span>
						<span class="pass-counter">10</span>
							<span class="pass-indicator"></span>
				</div>
				<div class="input-chkbox">
					<input type="checkbox" name="remember">
					<label>Remember Me</label>
				</div>
				<div class="input-btn">
					<span class="span-btn">Login</span>
					<button name="login" class="btn">Login</button>
				</div>
			</form>
			<div class="link-sec">
				<p>Not a Member? <a href="">Register Here</a></p>
			</div>
		</div>
	<script src="js/login.js"></script>
	<script src="js/login-check.js"></script>
	<script src=""></script>
	</body>
</html>