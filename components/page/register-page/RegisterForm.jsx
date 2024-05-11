import SocialAuthBtn from "@/components/global/social-auth-button/SocialAuthBtn";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <div className="card-body">
        <form>
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <div className="grid md:grid-cols-2 md:gap-2 items-center">
            <div className="form-control">
              <label className="label" htmlFor="firstName">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="lastName">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Duo"
                className="input input-bordered"
                required
              />
            </div>
          </div>
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
              placeholder="Enter new password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-secondary text-white">
              Create New Account
            </button>
          </div>
          <div className="divider">OR</div>
        </form>
        <SocialAuthBtn />
      </div>
    </>
  );
};

export default RegisterForm;
