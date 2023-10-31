
import React from 'react';
import { styled } from 'styled-components';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';
import LogoImage from '../../../assets/images/footer-logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContent>
        <ProductInfos>
          <ProductDetail>
            <label>Products</label>
            <label>Overview</label>
            <label>Features</label>
            <label>Solutions</label>
            <label>Tutorials</label>
            <label>Pricing</label>
            <label>Releases</label>
          </ProductDetail>
          <ProductDetail>
            <label>Servers</label>
            <label>About us</label>
            <label>Careers</label>
            <label>Press</label>
            <label>News</label>
            <label>Media kit</label>
            <label>Contact</label>
          </ProductDetail>
          <ProductDetail>
            <label>Resources</label>
            <label>Blog</label>
            <label>Newsletter</label>
            <label>Events</label>
            <label>Help centre</label>
            <label>Tutorials</label>
            <label>Support</label>
          </ProductDetail>
          <ProductDetail>
            <label>Use cases</label>
            <label>Startups</label>
            <label>Enterprise</label>
            <label>Government</label>
            <label>Saas</label>
            <label>Marketplaces</label>
            <label>Ecommerce</label>
          </ProductDetail>
          <ProductDetail>
            <label>Social</label>
            <label>Twitter</label>
            <label>Linkedin</label>
            <label>Facebook</label>
            <label>GitHub</label>
            <label>AngelList</label>
            <label>Dribble</label>
          </ProductDetail>
          <ProductDetail>
            <label>Legal</label>
            <label>Terms</label>
            <label>Privacy</label>
            <label>Cookies</label>
            <label>Licenses</label>
            <label>Settings</label>
            <label>Contact</label>
          </ProductDetail>
        </ProductInfos>
        <hr />
        <LogoContent>
          <Image src={LogoImage} alt='logo-image' />
          <label>Copyright @ 2023 Pulsar</label>
        </LogoContent>
      </FooterContent>
    </FooterDiv>
  );
};
export default Footer;

const FooterDiv = styled.div`
  width: 100%;
  background-color: #1f2128;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${Space.xl};
  padding: ${Space.xxxl} ${Space.xl};
  hr {
    padding-top: ${Space.xl};
    border-color: ${Color.$netural_700};
  }
`;

const ProductInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${Space.s};

  label {
    font-size: 16px;
    color: ${Color.$white};
    flex: 1;
    &:first-child {
      color: ${Color.$netural_700};
    }
  }
`;

const LogoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    color: #8a8a98;
  }
`;
