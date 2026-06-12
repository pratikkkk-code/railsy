let socket: WebSocket | null = null;
export function connectSocket(): WebSocket {
  if (socket && socket.readyState < 2) return socket;
  socket = new WebSocket(process.env.NEXT_PUBLIC_SOCKET_URL!);
  socket.onopen = () => console.log("Railsy WS connected");
  socket.onerror = (e) => console.error("WS error", e);
  socket.onclose = () => { socket = null; };
  return socket;
}
