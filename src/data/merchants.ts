import { Merchant } from "../types/Merchant";

export const merchantsMock: Merchant[] = [
  {
    id: 1,
    razonSocial: "Tech Solutions SAS",
    nit: "123456789",
    email: "contacto@tech.com",
    telefono: "3001234567",
    representante: "Carlos Pérez",
    estado: "ACTIVO",
  },
  {
    id: 2,
    razonSocial: "Market Pro",
    nit: "987654321",
    email: "info@market.com",
    representante: "Laura Gómez",
    estado: "PENDIENTE_VALIDACION",
  },
  {
    id: 3,
    razonSocial: "Constructora XYZ",
    nit: "456789123",
    email: "ventas@constructora.com",
    telefono: "3159876543",
    representante: "Pedro Rodríguez",
    estado: "INACTIVO",
  },
];