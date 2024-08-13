"use client";
import { useState } from "react";
import { Center } from "../../../util/centers_enum";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { addInvoice, db } from "../../../lib/firebase/config";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

export default function GenerateReceipt({ searchParams }) {
  const router = useRouter();
  const authId = searchParams.authId;
  const user = JSON.parse(localStorage.getItem("user"));
  const timeId = "WG-" + Date.now();
  const [invoiceData, setInvoiceData] = useState({
    id: timeId, // You can generate this dynamically if needed
    invoiceData: "12|08|24",
    isGSTBill: false,
    name: "",
    address: "",
    phone: "",
    email: "",
    invoiceNumber: timeId,
    invoiceDate: "12|08|24",
    dueDate: "12|08|24",
    services: [],
    license: "",
    carDetails: {
      make: "",
      model: "",
      year: "",
      color: "",
    },
    notes: "",
    paymentDetails: {
      type: "Card",
      paymentMethodDetails: "",
      total: 0,
      paid: 0,
    },
    servicePerson: {
      name: user.name,
      phone: user.phone,
    },
    center: Center.HYDERABAD,
    package: "Basic",
  });

  // getUUID().then((uuid) => {
  //   setInvoiceData({ ...invoiceData, invoiceNumber: uuid });
  // });
  const ServiceOptions = [
    "Car Foam wash",
    "Interior deep cleaning",
    "Teflon polishing",
    "Wash and Wax",
    "Ceramic coating",
    "Graphene coating",
    "Ceramic maintenance",
    "Graphene Maintenance",
    "PPF",
    "Wrapping",
    "Sun films",
    "Head Light Restoration",
    "Alloy Wheels cleaning",
    "Yearly Package For Wash",
    "Annual Maintenance Package",
    "Denting",
    "Painting",
    "Car Accessories",
  ];

  const [newService, setNewService] = useState({
    name: "",
    description: "",
    quantity: 1,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "isGSTBill") {
      setInvoiceData({ ...invoiceData, [name]: e.target.checked });
    } else if (name.includes("car")) {
      setInvoiceData({
        ...invoiceData,
        carDetails: {
          ...invoiceData.carDetails,
          [name.split(".")[1]]: value,
        },
      });
    } else if (name.includes("paymentDetails")) {
      setInvoiceData({
        ...invoiceData,
        paymentDetails: {
          ...invoiceData.paymentDetails,
          [name.split(".")[1]]: value,
        },
      });
    } else {
      setInvoiceData({
        ...invoiceData,
        [name]: value,
      });
    }
  };

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleAddService = () => {
    setInvoiceData({
      ...invoiceData,
      services: [...invoiceData.services, { ...newService }],
    });
    setNewService({
      name: "",
      description: "",
      quantity: 1,
      price: 0,
    });
  };

  const handleRemoveService = (index) => {
    setInvoiceData({
      ...invoiceData,
      services: invoiceData.services.filter((_, i) => i !== index),
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center shadow-md w-full px-4">
        <img src="/logo.svg" className="size-16" />
        <p>New Invoice</p>
        <button className="bg-black px-3 py-1 rounded-full text-white text-sm">
          menu
        </button>
      </div>
      <div>
        <form
          action={() => {}}
          className="p-8 flex flex-col gap-2 max-w-[400px] mx-auto"
        >
          <h2>Invoice Form</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={invoiceData.name}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={invoiceData.address}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={invoiceData.phone}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={invoiceData.email}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="invoiceNumber">Invoice Number:</label>
            <input
              type="text"
              id="invoiceNumber"
              name="invoiceNumber"
              readOnly={true}
              value={invoiceData.invoiceNumber}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="license">License:</label>
            <input
              type="text"
              id="license"
              name="license"
              value={invoiceData.license}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="carMake">Car Make:</label>
            <input
              type="text"
              id="carMake"
              name="carDetails.make"
              value={invoiceData.carDetails.make}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="carModel">Car Model:</label>
            <input
              type="text"
              id="carModel"
              name="carDetails.model"
              value={invoiceData.carDetails.model}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="carYear">Car Year:</label>
            <input
              type="text"
              id="carYear"
              name="carDetails.year"
              value={invoiceData.carDetails.year}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="carColor">Car Color:</label>
            <input
              type="text"
              id="carColor"
              name="carDetails.color"
              value={invoiceData.carDetails.color}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={invoiceData.notes}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="paymentMethodDetails">
              Payment Method Details:
            </label>
            <input
              type="text"
              id="paymentMethodDetails"
              name="paymentDetails.paymentMethodDetails"
              value={invoiceData.paymentDetails.paymentMethodDetails}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <label htmlFor="total">Total:</label>
            <input
              type="number"
              id="total"
              name="paymentDetails.total"
              value={invoiceData.paymentDetails.total}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
              required={true}
            />
          </div> */}
          <div className="flex flex-col gap-2">
            <label htmlFor="paid">Paid:</label>
            <input
              type="number"
              id="paid"
              name="paymentDetails.paid"
              value={invoiceData.paymentDetails.paid}
              onChange={handleChange}
              className="border border-black px-6 py-2 rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            <p>GST Bill:</p>
            <input
              type="checkbox"
              id="isGSTBill"
              name="isGSTBill"
              checked={invoiceData.isGSTBill}
              onChange={handleChange}
            />
          </div>

          {/* Service Section */}
          <h3>Services</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <select
                name="name"
                value={newService.name}
                onChange={handleServiceChange}
                className="border mt-[0.7rem]  border-black px-6 py-2 rounded-lg"
              >
                <option value="">Select Service</option>
                {ServiceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <div className="flex flex-col">
                <label
                  className="text-[0.6rem]"
                  htmlFor="quantity"
                  title="Quantity"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={newService.quantity}
                  onChange={handleServiceChange}
                  className="border h-full border-black px-6 py-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="price" className="text-[0.6rem]" title="Price">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={newService.price}
                  onChange={handleServiceChange}
                  className="border h-full border-black px-6 py-2 rounded-lg"
                />
              </div>
              <button
                onClick={handleAddService}
                className="bg-green-500 mt-[0.72rem] text-white px-4 py-2 rounded-lg"
              >
                Add Service
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>QTY</th>
                <th className="text-center">Services Rendered</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.services.map((service, index) => (
                <tr key={service.name}>
                  <td>{service.quantity}</td>
                  <td>{service.name}</td>
                  <td className="text-end">₹{service.price}</td>
                  <td className="text-end">
                    ₹{service.price * service.quantity}
                  </td>
                  <td>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveService(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* ... Other input fields ... */}

          <button
            type="submit"
            onClick={() => {
              if (invoiceData.services.length === 0) {
                alert("Please add services to the invoice");
                return;
              }
              addInvoice(timeId, invoiceData, () => {
                router.push("/dashboard?authId=" + authId);
                alert("Invoice added successfully");
              });
            }}
            className="bg-black text-white w-max px-6 py-2 rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
