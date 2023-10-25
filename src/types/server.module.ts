type IpAddress = {
    ip: number;
}

export type Server = {
    id: number;
    type: string;
    status: 'ON' | 'OFF';
    ipAddresses: Array<IpAddress>;
    location: string;
    os: string;
    cpuUtilization: string;
    ramUtilization: string;
    diskUtilization: string;
    bandwidth: string;
    incomingTraffic: string;
    outcomingTraffic: string;
    date: string;
}
