import RegisterForm from "@/components/page/register-page/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <div className="hero custom-min-h bg-[url('/assets/images/register-bg.jpg')]">
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-base-100 ">
            <h1 className="lg:text-5xl text-4xl font-bold">
              Create your new account
            </h1>
            <p className="py-6 text-sm md:text-base">
              Your gateway to seamless travel experiences! Join our community of
              travelers and unlock exclusive deals on accommodations worldwide.
              Sign up now to start exploring and booking your next unforgettable
              stay with ease and convenience. Adventure awaits!
            </p>
            <p>
              You are already registered? Then please{" "}
              <Link href={`/login`} className="underline underline-offset-2">
                log in
              </Link>
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
