export class HostSocket {
    constructor() {
        this.messageHandlers = new Map();
    }

    static readonly instance = new HostSocket();
    private socket: WebSocket|undefined;
    private messageHandlers: Map<string, (data: unknown) => void>
    host: string|undefined;

    setHost(host: string) {
        this.host = host;
    }

    connect() {
        if(!this.host) {
            console.error("Host is not set.");
            return;
        }

        if(this.socket && this.socket.readyState === WebSocket.OPEN) {
            console.error("Already connected to host.");
            return;
        }

        this.socket = new WebSocket(this.host);
        this.socket.onmessage = this.messageListner.bind(this);
        console.log(`Connected to host - ${this.host}`);
    }

    disconnect() {
        if(this.socket && this.socket.readyState == WebSocket.OPEN) {
            this.socket.close();
            this.socket = undefined;
        }
    }

    private messageListner(ev:MessageEvent<unknown>) {
        for(const listner of this.messageHandlers.values()) {
            listner(ev.data);
        }
    }

    registerMessageHandler(id: string, action: (data: unknown) => void) {
        this.messageHandlers.set(id, action);
    }

    sendMessage(message: string) {
        if(this.socket?.readyState === WebSocket.OPEN){
            this.socket.send(message);
        } else {
            console.error("Socket is not ready.");
        }
    }
}