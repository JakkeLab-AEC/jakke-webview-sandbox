export class HostSocket {
    constructor() {}

    private socket: WebSocket|undefined;
    host: string|undefined;

    setHost(host: string) {
        this.host = host;
    }

    connect() {
        if(!this.host) {
            console.error("Host is not set.");
            return;
        }

        this.socket = new WebSocket(this.host);
    }

    disconnect() {
        if(this.socket && this.socket.readyState == WebSocket.OPEN) {
            this.socket.close();
            this.socket = undefined;
        }
    }
}