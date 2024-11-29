import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth endpoints
export const authService = {
  login: (credentials: { email: string; password: string }) => 
    api.post('/auth/login', credentials),
  register: (userData: { email: string; password: string; name: string }) => 
    api.post('/auth/register', userData),
};

// Booking endpoints
export const bookingService = {
  searchFlights: (params: { from: string; to: string; date: string }) =>
    api.get('/flights/search', { params }),
  createBooking: (bookingData: any) => 
    api.post('/bookings', bookingData),
  getBookingHistory: () => 
    api.get('/bookings/history'),
};

// Token endpoints
export const tokenService = {
  getBalance: (address: string) => 
    api.get(`/token/balance/${address}`),
  getTransactionHistory: (address: string) => 
    api.get(`/token/transactions/${address}`),
};

// Smart contract interactions
export const contractService = {
  deployBooking: (bookingData: any) => 
    api.post('/contracts/deploy-booking', bookingData),
  verifyTransaction: (txHash: string) => 
    api.get(`/contracts/verify/${txHash}`),
};