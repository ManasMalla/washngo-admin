"use client";

import { doc, DocumentReference, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase/config";
import { useRouter } from "next/navigation";

export default function UpdatePaymentButton(props: {
  amount: number;
  docId: string;
  authId: string;
}) {
  const router = useRouter();
  return (
    <button
      className="fixed bg-black text-white text-sm px-6 rounded-xl py-3 mr-4 mb-4 bottom-0 right-[15%]"
      onClick={async () => {
        try {
          const paymentNow = parseFloat(prompt("How much payment now?"));
          const total = paymentNow + parseFloat(props.amount.toString());
          await updateDoc(
            doc(db, "users", props.authId, "invoices", props.docId),
            {
              paymentDetails: {
                paid: total,
              },
            }
          );
          alert("Updated.");
          router.refresh();
        } catch (e) {
          alert(e);
        }
      }}
    >
      Update payment
    </button>
  );
}
