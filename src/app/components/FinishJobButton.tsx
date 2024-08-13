"use client";

import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/config";
import { usePathname, useRouter } from "next/navigation";

export default function FinishJobButton({ status, id, authId }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        updateDoc(doc(db, "users", authId, "invoices", id), {
          status: !status,
        });
      }}
      className="fixed bg-black text-white text-sm px-6 rounded-xl py-3 mr-4 mb-4 bottom-0 right-0"
    >
      {status ? "Rollback Job" : "Finish Job"}
    </button>
  );
}
