import { Paper, Link, Button, TextField, faArrowRight, FontAwesomeIcon } from '@cats-cradle/design-system/dist/main';

export default function LoginPage() {
  return (
    <main className="container">
      <Paper elevation="1">
        <h1>Log In</h1>
        Email Address
        <TextField/>
        Password
        <Link to="/forgot-password">Forgot Password</Link>
        <TextField/>
        <Button onClick={()=>{}} color="primary">Log In <FontAwesomeIcon icon={faArrowRight}/></Button>
      </Paper>
    </main>
  );
}
