import { Paper } from '@galaxyops/design-system/dist/main';
import { SignupForm } from '../components/SignupForm';

export default function SignupPage() {
  return (
    <main className="container mt-5">
      <div className="row gy-5 align-items-stretch">
        <div className="col-lg-6 col-sm-12">
          <Paper elevation="1" className="bgBrandDark p-5">
            <h1 className="text-white">Signup</h1>
            <p className="text-white">
              Signing up for a new personal account. Follow the prompts to
              create your personal account.
            </p>
          </Paper>
        </div>
        <div className="col-lg-6 col-sm-12 order-last">
          <Paper elevation="1" className="p-5">
            <SignupForm />
          </Paper>
        </div>
      </div>
    </main>
  );
}
