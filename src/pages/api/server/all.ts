// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ServerType } from '../../../types/server.module';

type ServerList = {
  serverList: ServerType[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerList>
) {
    const data: ServerList = {
        serverList: [
            {
              id: 1,
              type: 'd1.c1.large',
              status: true,
              ipAddresses: [{ ip: '192.168.1.24' }, { ip: '192.168.1.23' }],
              location: 'Phoenix',
              os: 'Ubuntu',
              cpuUtilization: 10,
              diskUtilization: 80,
              ramUtilization: 70,
              bandwidth: 60,
              incomingTraffic: 40,
              outcomingTraffic: 50,
              date: '17 Oct, 2022',
            },
          ],
    }
  res.status(200).json(data);
}
