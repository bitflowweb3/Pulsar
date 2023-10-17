import React from 'react';
import {
  ConfigureBody,
  ConfigureInfo,
  ConfigureName,
  IconDiv,
  ServerConfigureBorderContent,
  ServerConfigureContent,
  SubHeader,
} from './styled';
import LocationIcon from '../../components/common/svgicons/LocationIcon';
import ProcessorIcon from '../../components/common/svgicons/ProcessorIcon';
import StorageIcon from '../../components/common/svgicons/StorageIcon';
import MemoryIcon from '../../components/common/svgicons/MemoryIcon';
import IpAddressesIcon from '../../components/common/svgicons/IpAddressesIcon';

const ServerConfigure = () => {
  return (
    <ServerConfigureContent>
      <ServerConfigureBorderContent>
        <SubHeader>
          <h3>Server Configuration</h3>
          <p style={{fontSize: '16px'}}>{`Customize your server\'s specifications to ensure optimal performance and reliability`}</p>
        </SubHeader>
        <ConfigureBody>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <LocationIcon stroke='white' />
              </IconDiv>
              <label>Location</label>
            </ConfigureName>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <ProcessorIcon stroke='white' />
              </IconDiv>
              <label>Processor</label>
            </ConfigureName>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <StorageIcon stroke='white' />
              </IconDiv>
              <label>Storage</label>
            </ConfigureName>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <MemoryIcon stroke='white' />
              </IconDiv>
              <label>Memory</label>
            </ConfigureName>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <IpAddressesIcon stroke='white' width={30} height={27} />
              </IconDiv>
              <label>Ip Addresses</label>
            </ConfigureName>
          </ConfigureInfo>
        </ConfigureBody>
      </ServerConfigureBorderContent>
    </ServerConfigureContent>
  );
};
export default ServerConfigure;
