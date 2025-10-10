import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import adminRoutes from './routes/admin/routes';
import aliadoRoutes from './routes/aliado/routes';
import categoriaRoutes from './routes/category/routes';
import productoRoutes from './routes/producto/routes';
import paydatesRoutes from './routes/paydates/routes';
import deliveryRoutes from './routes/delivery/routes';
import paymentsRoutes from './routes/payment/route';
import orderRoutes from './routes/order/routes';
import orderItemRoutes from './routes/orderItem/routes';

dotenv.config();

const app = express();

// 🔹 Permitir acceso desde cualquier origen
const corsOptions = {
  origin: '*', // 👈 Permite cualquier dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  exposedHeaders: ['token'], // Headers que el frontend puede leer
};

// Habilitar CORS con opciones definidas
app.use(cors(corsOptions));

// Permitir JSON en las solicitudes
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ---- Rutas ---- //
app.use('/admin', adminRoutes);
app.use('/aliado', aliadoRoutes);
app.use('/category', categoriaRoutes);
app.use('/producto', productoRoutes);
app.use('/paydates', paydatesRoutes);
app.use('/delivery', deliveryRoutes);
app.use('/payment', paymentsRoutes);
app.use('/order', orderRoutes);
app.use('/orderItem', orderItemRoutes);

export default app;
