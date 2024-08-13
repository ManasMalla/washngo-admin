"use client";

import { useEffect } from "react";
import { isUserLoggedIn } from "../../lib/login-validation";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default function RedirectWidget() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      isUserLoggedIn().then((isLoggedIn) => {
        if (isLoggedIn) {
          router.push("/dashboard?authId=" + user.uid);
        }
      });
    });
  });
  return <div></div>;
}
