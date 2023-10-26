type IpAddress = {
    ip: string;
}

export type ServerType = {
    id: number;
    type: string;
    status: boolean;
    ipAddresses?: Array<IpAddress>;
    location: string;
    os: string;
    cpuUtilization?: number;
    ramUtilization?: number;
    diskUtilization?: number;
    bandwidth?: number;
    incomingTraffic?: number;
    outcomingTraffic?: number;
    date?: string;
}
