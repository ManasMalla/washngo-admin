"use client";

import { Invoice } from "./interfaces";

const saveInvoices = (invoices: Invoice[]) => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
}

function getInvoices() {
    const invoices = JSON.parse(localStorage.getItem("invoices"));
    return invoices as Invoice[];
}

export { saveInvoices, getInvoices };