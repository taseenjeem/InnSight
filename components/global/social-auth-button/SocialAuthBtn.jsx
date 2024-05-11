import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SocialAuthBtn = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-2">
      <button className="btn btn-secondary btn-outline w-full">
        <FcGoogle className="size-8" /> Google
      </button>
      <button className="btn btn-secondary btn-outline w-full">
        <FaFacebook className="size-8 text-[#0866FF]" /> Facebook
      </button>
    </div>
  );
};

export default SocialAuthBtn;
