"use client";
import { redirect, useSearchParams } from "next/navigation";
import { Center } from "../../../util/centers_enum";
import { Invoice, SignedInvoice } from "../../../util/interfaces";
import Link from "next/link";
import UserImage from "../../components/UserImage";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../../lib/firebase/config";
import { invoices } from "../../../util/invoices";
import { saveInvoices } from "../../../util/save_invoices";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function getInvoices(authId: string, setInvoices: any) {
  var invoices: SignedInvoice[] = [];
  console.log(authId.replace("=", ""));
  if (authId === "J9CNcDddLpOcNBMTYzrXcRaA5k32") {
    getDocs(collection(db, "users")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDocs(collection(doc.ref, "invoices")).then((querySnapshot) => {
          querySnapshot.forEach((doc1) => {
            console.log(doc1.id);
            invoices.push({
              invoice: doc1.data() as Invoice,
              authId: doc.id,
            } as SignedInvoice);
            setInvoices(invoices);
          });
        });
      });
    });
  } else {
    getDocs(collection(db, "users", authId.replace("=", ""), "invoices")).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id);
          invoices.push({
            invoice: doc.data() as Invoice,
            authId: authId,
          } as SignedInvoice);
          setInvoices(invoices);
        });
      }
    );
  }

  // saveInvoices(invoices);
  console.log(invoices);
  return invoices;
}

export default function DashboardPage({ searchParams }) {
  const [invoices, setInvoices] = useState<SignedInvoice[]>([]);
  const router = useRouter();
  useEffect(() => {
    getInvoices(searchParams.authId, setInvoices);
  }, []);
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center shadow-md w-full md:px-8 px-4">
        <img src="/full-width-logo.svg" className="h-9" />
        <button
          className="bg-white text-black px-4 py-2 text-sm rounded-full"
          onClick={() => {
            auth.signOut().then(() => {
              router.push("/admin");
            });
          }}
        >
          sign out
        </button>
        {/* <p>Wash & Go</p> */}
        {/* <UserImage /> */}
      </div>
      <div className="px-4 md:px-8 py-6">
        <p className="text-4xl font-bold">
          hello,
          <br />{" "}
          {searchParams.authId === "J9CNcDddLpOcNBMTYzrXcRaA5k32"
            ? "soujanya"
            : invoices[0]?.invoice.servicePerson.name.toLowerCase()}
          !
        </p>
        <Link
          href={"/receipt/new?authId=" + searchParams.authId}
          className="absolute bottom-0 right-0 m-4 "
        >
          <button className="size-16 bg-white text-black rounded-xl shadow-lg">
            +
          </button>
        </Link>
        <p className="text-xl mt-4 mb-4 opacity-45">your report</p>
        {/* <p className="mb-4 text-sm mt-1">Lorem ipsum dolor amet sit</p> */}
        <div className="flex flex-col gap-4  md:grid md:grid-cols-2 lg:grid-cols-3">
          {invoices.map(({ invoice, authId }) => {
            return (
              <Link
                key={invoice.id}
                href={"/receipt/" + invoice.id + "?authId=" + authId}
              >
                <div className="shadow-md px-6 py-6 rounded-xl flex justify-between bg-white/10">
                  <div>
                    <p className="text-sm text-neutral-300">{invoice.id}</p>
                    <p>{invoice.license}</p>
                    <p className="text-lg font-medium">
                      {invoice.carDetails.model}
                    </p>
                    <p>{invoice.servicePerson.name}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">{invoice.package}</p>
                    <p>
                      <span className="font-medium">Due:</span>{" "}
                      {invoice.dueDate}
                    </p>
                    <button className="bg-black text-white px-3 py-1 text-sm rounded-full mt-auto">
                      View Details
                    </button>
                    {/* <p>{invoice.notes}</p> */}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
