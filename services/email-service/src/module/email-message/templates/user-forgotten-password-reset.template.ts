export const UserForgottenPasswordResetTemplate = `<html>
<head>User Forgotten Password Reset</head>
<body>
  <h1>User Forgotten Password Reset</h1>
  <p>Someone has requested a password reset for the following account</p>
  <p>Username: {{ username }}</p>
  <p>Click the link below to reset the password</p>
  <p><href="{{link}}">{{link}}</a></p>
  <p>If this was a mistake, just ignore this email and nothing will happen.</p>
</body>
</html><html>`;
