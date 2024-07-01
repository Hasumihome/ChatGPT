import { io } from 'socket.io-client';

let socket;

export const connectWithSocketServer = () => {
    socket = io('http://localhost:5500');

    socket.on('connect', () => {
        console.log('Connected with socket.io server');
        console.log(socket.id);
    })
}