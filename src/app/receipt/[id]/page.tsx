import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Center } from "../../../util/centers_enum";
import { Invoice } from "../../../util/interfaces";
import { db, getInvoiceDoc } from "../../../lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import FinishJobButton from "../../components/FinishJobButton";
import Link from "next/link";
import UpdatePaymentButton from "../../components/UpdatePaymentButton";

export const revalidate = 60; // revalidate the data at most every hour

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getInvoice(id: string, authId: string) {
  // Fetch data from external API
  // const id: string = context.params.id as string;
  //call firebase firestore to get the invoice
  const invoices = await getDocs(
    query(
      collection(db, "users", authId, "invoices"),
      where("id", "==", id),
      limit(1)
    )
  );
  const invoiceDoc = invoices.docs[0];
  const docId = invoiceDoc.id;
  const invoice = invoiceDoc.data() as Invoice;
  // const invoice = await getInvoiceDoc(id, userId);
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const invoice: Invoice = await res.json();
  // Pass data to the page via props
  // return { props: {  } }
  return { invoice, docId };
}

export default async function Receipt({ params, searchParams }) {
  console.log(params.id);
  console.log(searchParams.authId);
  const { invoice, docId } = await getInvoice(params.id, searchParams.authId);
  const data = invoice;
  const subtotal = data.services
    .map((e) => {
      return e.price * e.quantity;
    })
    .reduce((a, b) => a + b);
  const isGSTBill = data.isGSTBill;
  const isIGSTBill = Center.HYDERABAD === data.center;
  const id = data.id;
  return (
    <main className=" h-full font-['Poppins'] pb-8">
      <FinishJobButton
        status={data.status}
        id={docId}
        authId={searchParams.authId}
      />
      <UpdatePaymentButton
        amount={data.paymentDetails.paid}
        authId={searchParams.authId}
        docId={docId}
      />
      <div className="flex justify-between items-center shadow-md w-full px-4">
        <img src="/Logo.svg" className="size-16" />
        <p>Invoice</p>
        <div></div>
        {/* <Link href={""} className="bg-black px-3 py-1 rounded-full text-white text-sm">
          back
        </Link> */}
      </div>
      <div className="h-full px-2">
        <div className="outline grow my-4 md:mx-auto bg-white p-6">
          <p className="absolute uppercase text-sm">Car Detailing Receipt</p>
          <div className="flex text-center text-sm mt-2 shrink-0 whitespace-nowrap">
            <p className="shrink-0 pt-8 grow text-start">
              <span className="font-medium">
                Date:
                <br />
              </span>
              <span className="underline decoration-dotted underline-offset-4">
                {data.invoiceDate}
              </span>
            </p>
            <div>
              <img src="/Logo.svg" className="max-h-20 mx-auto pt-4 px-6" />
              <p className="mt-2 text-[0.7rem] font-medium">
                HYDERABAD | NELLORE | VIJAYAWADA
              </p>
              <a href="tel:9959555577" className="text-blue-600">
                9959555577
              </a>
            </div>
            <p className="shrink-0 pt-8 grow text-end">
              <span className="font-medium">
                No:
                <br />
              </span>
              <span className="underline decoration-dotted underline-offset-4">
                {data.id}
              </span>
            </p>
          </div>
          <div className="text-sm flex flex-col gap-3">
            <div className="w-full flex space-x-2">
              <p> Name: </p>
              <p className="field-underline">{data.name}</p>
            </div>
            <div className="w-full flex space-x-2">
              <p> Address: </p>
              <p className="field-underline">{data.address}</p>
            </div>
            <div className="w-full flex space-x-2">
              <p className="shrink-0"> Email Address: </p>
              <p className="field-underline">{data.email}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-full flex space-x-2">
                <p> Phone: </p>
                <p className="field-underline">{data.phone}</p>
              </div>
              <div className="w-full flex space-x-2">
                <p> License: </p>
                <p className="field-underline">{data.license}</p>
              </div>
            </div>
            <div className="w-full flex space-x-2">
              <p> Status: </p>
              <p className="field-underline">
                {data.status ? "Complete" : "In Progress"}
              </p>
            </div>
            <p className="font-medium text-base">Car Details</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full flex space-x-2">
                <p> Year: </p>
                <p className="field-underline">{data.carDetails.year}</p>
              </div>

              <div className="w-full flex space-x-2">
                <p> Model: </p>
                <p className="field-underline">{data.carDetails.model}</p>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>QTY</th>
                  <th className="text-center">Services Rendered</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.services.map((service) => (
                  <tr key={service.name}>
                    <td>{service.quantity}</td>
                    <td>{service.name}</td>
                    <td className="text-end">₹{service.price}</td>
                    <td className="text-end">
                      ₹{service.price * service.quantity}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={2}
                    rowSpan={isGSTBill ? (isIGSTBill ? 6 : 5) : 3}
                    className="h-full"
                  >
                    Note: {data.notes}
                  </td>
                  <td className="uppercase font-medium">SubTotal</td>
                  <td className="text-end">₹{subtotal}</td>
                </tr>
                {isGSTBill && (
                  <>
                    <tr>
                      <td>SGST</td>
                      <td className="text-end">
                        ₹{(subtotal * 0.09).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td>CGST</td>
                      <td className="text-end">
                        ₹{(subtotal * 0.09).toFixed(2)}
                      </td>
                    </tr>
                    {isIGSTBill && (
                      <tr>
                        <td>IGST</td>
                        <td className="text-end">
                          ₹{(subtotal * 0.18).toFixed(2)}
                        </td>
                      </tr>
                    )}
                  </>
                )}

                {
                  <tr>
                    <td>
                      {subtotal -
                        data.paymentDetails.paid +
                        (isGSTBill
                          ? isIGSTBill
                            ? subtotal * 0.36
                            : subtotal * 0.18
                          : 0) ==
                      0
                        ? "Amount Paid"
                        : "Advance"}
                    </td>
                    <td className="text-end">-₹{data.paymentDetails.paid}</td>
                  </tr>
                }

                <tr className="shrink-0">
                  <td className="uppercase font-bold bg-neutral-200">
                    BALANCE
                  </td>
                  <td className="pl-2 text-end bg-neutral-100 font-bold">
                    {subtotal -
                      data.paymentDetails.paid +
                      (isGSTBill
                        ? isIGSTBill
                          ? subtotal * 0.36
                          : subtotal * 0.18
                        : 0) ==
                    0
                      ? "PAID"
                      : "₹" +
                        (
                          subtotal -
                          data.paymentDetails.paid +
                          (isGSTBill
                            ? isIGSTBill
                              ? subtotal * 0.36
                              : subtotal * 0.18
                            : 0)
                        ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    Pay by:{" "}
                    {data.paymentDetails["paymentMethodDetails"]
                      ? ` ${data.paymentDetails["paymentMethodDetails"]}`
                      : ""}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                <p className="shrink-0">Type of package: </p>
                <p className="field-underline">{data.package}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="shrink-0">Service person: </p>
                <div>
                  <p className="field-underline">{data.servicePerson.name}</p>
                  <a
                    href={"tel:" + data.servicePerson.phone}
                    className="text-blue-600"
                  >
                    {data.servicePerson.phone}
                  </a>
                </div>
              </div>
              <img src="" className="size-16 ml-auto" alt="Genuine invoice" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
