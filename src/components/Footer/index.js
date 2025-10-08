import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #f4f8f7;
  color: #1b4d4a;
  padding: 60px 20px 30px;
  border-top: 1px solid #dce6e4;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h4`
  font-size: 1.3rem;
  color: #a8895c;
  margin-bottom: 15px;
  font-family: "Playfair Display", serif;
`;

const Item = styled.p`
  font-size: 1rem;
  color: #355b57;
  margin: 4px 0;
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;

  a {
    color: #1b4d4a;
    font-size: 1.6rem;
    transition: color 0.3s;
  }

  a:hover {
    color: #a8895c;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #54706c;
  border-top: 1px solid #dce6e4;
  padding-top: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <Column>
          <Title>Contact Us</Title>
          <Item>110 King's Cross Road, WC1X 9DT, London, UK</Item>
          <Item>+44 20 1234 5678</Item>
          <Item>info@serenityspa.co.uk</Item>
        </Column>

        <Column>
          <Title>Opening Hours</Title>
          <Item>Mon - Fri: 9:00 AM – 7:00 PM</Item>
          <Item>Saturday: 9:00 AM – 6:00 PM</Item>
          <Item>Sunday: Closed</Item>
        </Column>

        <Column>
          <Title>Follow Us</Title>
          <Socials>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </Socials>
        </Column>
      </FooterContent>

      <FooterBottom>
        © {new Date().getFullYear()} Serenity Spa — All Rights Reserved.
      </FooterBottom>
    </FooterContainer>
  );
}
