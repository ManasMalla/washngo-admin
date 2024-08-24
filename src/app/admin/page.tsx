import Image from "next/image";
import { Center } from "../../util/centers_enum";
import { redirect } from "next/navigation";
import { auth } from "../../lib/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { isUserLoggedIn, login } from "../../lib/login-validation";
import RedirectWidget from "../components/RedirectWidget";

export default async function Home() {
  const forgotPassword = async (formData) => {
    "use server";
    //call the server to forgot password
    redirect("/forgot-password");
  };

  return (
    <main className="h-screen w-screen flex">
      <RedirectWidget />
      <div className="w-max h-max my-auto mx-auto">
        <img src="/Logo.svg" className="w-48 mx-auto" />

        <form className="p-8 flex flex-col gap-2">
          <h2>Login</h2>
          <input
            name="username"
            placeholder="username"
            required={true}
            type="email"
            className="border border-black px-6 py-2 rounded-lg"
          />
          <input
            name="password"
            placeholder="password"
            className="border border-black px-6 py-2 rounded-lg"
          />
          <div className="flex flex-row-reverse">
            <button
              formAction={login}
              className="bg-black text-white w-max px-6 py-2 rounded-xl"
            >
              Login
            </button>
            <button
              formAction={forgotPassword}
              className="w-max px-6 py-2 rounded-xl"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
