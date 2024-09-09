"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase/config";
import { FirebaseError } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";

const login = async (formData) => {
    // "use server";
    if (!formData.get("password")) {
        alert("Password is required");
        return;
    }
    //Show toast
    const username = formData.get("username").replaceAll(" ", "");
    const password = formData.get("password").replaceAll(" ", "");
    await signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            getDoc(doc(db, "users", userCredential.user.uid)).then((doc) => {
                if (doc.exists()) {
                    localStorage.setItem("user", JSON.stringify(doc.data()));
                    // redirect("/dashboard");
                    alert("Login successful");
                } else {
                    alert("User does not exist");
                }
            });
        })
        .catch((e) => {
            if (e instanceof FirebaseError) {
                if (
                    e.code === "auth/invalid-credential" ||
                    e.code === "invalid-credential"
                ) {
                    alert("Invalid credentials, error: " + e.message);
                }
            }
        });
    if (auth.currentUser) {
        if (auth.currentUser.uid === "J9CNcDddLpOcNBMTYzrXcRaA5k32") {
            localStorage.setItem("isAdmin", "true");
        }
        redirect("/admin/dashboard?authId=" + auth.currentUser.uid);
    }
};

const isUserLoggedIn = async () => {

    if (localStorage.getItem("user") && auth.currentUser) {
        return true;
    }
    return false;
};

export { login, isUserLoggedIn };