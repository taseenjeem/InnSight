import LoginForm from "@/components/page/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-[url('/assets/images/login-bg.jpg')]">
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-base-100">
            <h1 className="lg:text-5xl text-4xl font-bold">Welcome Back!</h1>
            <p className="py-6">
              It&apos;s wonderful to see you return to InnSight. Rediscover the
              comfort and convenience you love with exclusive deals and seamless
              booking experiences awaiting you.
            </p>
            <p>
              If you are new here, the please{" "}
              <Link href={`/register`} className="underline underline-offset-2">
                create new account
              </Link>
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
