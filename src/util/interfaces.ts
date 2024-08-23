import { Center } from "./centers_enum";

export interface Service {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export interface CarDetails {
  model: string;
  year: string;
}

export interface PaymentDetails {
  type: string;
  paymentMethodDetails: string;
  total: number;
  paid: number;
}

export interface ServicePerson {
  name: string;
  phone: string;
}

export interface Invoice {
  id: string;
  invoiceData: string;
  isGSTBill: boolean;
  status: boolean;
  name: string;
  address: string;
  phone: string;
  email: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  services: Service[];
  license: string;
  carDetails: CarDetails;
  notes: string;
  paymentDetails: PaymentDetails;
  servicePerson: ServicePerson;
  center: Center;
  package: string;
}
