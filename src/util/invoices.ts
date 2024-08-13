import { Center } from "./centers_enum";
import { Invoice } from "./interfaces";

export const invoices: Invoice[] = [
    {
        id: "WG-120239232",
        invoiceData: "12|08|24",
        isGSTBill: true,
        name: "John Doe",
        address: "123 Main St",
        phone: "123-456-7890",
        email: "manasmalla.dev@gmail.com",
        invoiceNumber: "100",
        invoiceDate: "12|08|24",
        dueDate: "12|08|24",
        services: [
            {
                name: "Car Wash",
                description: "Car Wash",
                quantity: 1,
                price: 10,
            },
            {
                name: "Car Polish",
                description: "Car Polish",
                quantity: 1,
                price: 20,
            },
        ],
        license: "123456",
        carDetails: {
            make: "Toyota",
            model: "Corolla",
            year: "2020",
            color: "Red",
        },
        notes: "Thank you for your business!",
        paymentDetails: {
            type: "Card",
            paymentMethodDetails: "Visa (XX 4433)",
            total: 30,
            paid: 30,
        },
        servicePerson: {
            name: "John Doe",
            phone: "123-456-7890",
        },
        center: Center.HYDERABAD,
        package: "Basic",
        status: false,
    },
    {
        id: "WG-120239222",
        invoiceData: "12|08|24",
        isGSTBill: true,
        name: "Manas Malla",
        address: "123 Main St",
        phone: "123-456-7890",
        email: "manasmalla.dev@gmail.com",
        invoiceNumber: "100",
        invoiceDate: "12|08|24",
        dueDate: "12|08|24",
        status: false,
        services: [
            {
                name: "Car Wash",
                description: "Car Wash",
                quantity: 1,
                price: 10,
            },
            {
                name: "Car Polish",
                description: "Car Polish",
                quantity: 1,
                price: 20,
            },
        ],
        license: "123456",
        carDetails: {
            make: "Toyota",
            model: "Corolla",
            year: "2020",
            color: "Red",
        },
        notes: "Thank you for your business!",
        paymentDetails: {
            type: "Card",
            paymentMethodDetails: "Visa (XX 4433)",
            total: 30,
            paid: 30,
        },
        servicePerson: {
            name: "John Doe",
            phone: "123-456-7890",
        },
        center: Center.HYDERABAD,
        package: "Basic",
    },
];