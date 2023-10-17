import React from 'react';
import styled from 'styled-components';
import OsciloIcon from '../../components/common/svgicons/OsciloIcon';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';

const BandwidthCommit = () => {
  return (
    <ContentDiv>
      <ContentBorderDiv>
        <BandwidthCommitContent>
          <BandwidthInfo>
            <IconDiv>
              <OsciloIcon stroke={Color.$white} />
              <h5>Bandwidth Commit</h5>
            </IconDiv>
            <div className='band_middle'>
              <input type='range' id='vol' name='vol' min='0' max='80' />
              <div className='band_range'>
                <label>5 Gbps</label>
                <label>50 Gbps</label>
              </div>
            </div>
          </BandwidthInfo>
          <div className='band_right'>
            <p>Amount</p>
            <p>$ 60</p>
          </div>
        </BandwidthCommitContent>
      </ContentBorderDiv>
    </ContentDiv>
  );
};
export default BandwidthCommit;

const ContentDiv = styled.div`
  background-image: linear-gradient(
    to bottom,
    #7f56d9,
    rgba(42, 108, 236, 0.88),
    rgba(0, 42, 255, 0.78)
  );
  /* border: 1px solid ; */
  border-radius: 16px;
`;
const ContentBorderDiv = styled.div`
  background-color: ${Color.$dark_card};
  margin: 1px;
  border-radius: 15px;
  padding: ${Space.l} ${Space.l};
`;

const BandwidthCommitContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BandwidthInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.xxl};
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
