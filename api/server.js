const express = require('express');
const server = express();

const userRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');
const orderRouter = require('./orders/orders-router');
const malzemeRouter = require('./malzemeler/malzemeler-router');
const pizzaRouter = require('./pizzas/pizzas-router');

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);
server.use('/api/order', orderRouter);
server.use('/api/malzeme', malzemeRouter);
server.use('/api/pizza', pizzaRouter);

module.exports = server;