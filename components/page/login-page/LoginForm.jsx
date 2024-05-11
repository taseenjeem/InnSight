import SocialAuthBtn from "@/components/global/social-auth-button/SocialAuthBtn";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className="card-body">
        <form>
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="user@example.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                href="/reset-password"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-secondary text-white">
              Login
            </button>
          </div>
          <div className="divider">OR</div>
        </form>
        <SocialAuthBtn />
      </div>
    </>
  );
};

export default LoginForm;
