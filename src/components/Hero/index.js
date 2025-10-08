import React from "react";
import styled, { keyframes } from "styled-components";

// ===== Animations =====
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const particleFloat = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.5; }
  50% { transform: translateY(-40px) scale(1.2); opacity: 0.85; }
  100% { transform: translateY(0) scale(1); opacity: 0.5; }
`;

// ===== Styled Components =====
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url("/images/serenity-hero.jpg") center/cover no-repeat;
  background-size: cover;
  filter: brightness(0.8) saturate(0.95);
  z-index: 1;
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(27, 77, 74, 0.5),
    rgba(255, 245, 247, 0.3)
  );
  z-index: 2;
`;

const Particle = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${particleFloat} ${({ duration }) => duration}s ease-in-out
    infinite alternate;
  z-index: 3;
`;

const Content = styled.div`
  position: relative;
  z-index: 4;
  max-width: 750px;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 3.2rem;
  color: #f7f5f1;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${fadeUp} 700ms forwards;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #e3f2ef;
  margin-bottom: 40px;
  line-height: 1.6;
  opacity: 0;
  animation: ${fadeUp} 700ms forwards;
  animation-delay: 200ms;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #a8895c;
  color: #fff;
  padding: 14px 36px;
  border-radius: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
  animation: ${fadeUp} 700ms forwards;
  animation-delay: 400ms;

  &:hover {
    background: #1b4d4a;
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(27, 77, 74, 0.35);
  }
`;

export default function Hero() {
  // Create more visible particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    size: Math.random() * 30 + 20, // bigger size
    top: Math.random() * 80 + 10,
    left: Math.random() * 90 + 5,
    duration: Math.random() * 5 + 3, // slightly faster
  }));

  return (
    <HeroSection id="hero">
      <Background />
      <GradientOverlay />
      {particles.map((p, i) => (
        <Particle
          key={i}
          size={p.size}
          top={p.top}
          left={p.left}
          duration={p.duration}
        />
      ))}
      <Content>
        <Title>Welcome to Serenity Spa</Title>
        <Subtitle>
          Discover a haven of peace where mind, body, and spirit align.
          Rejuvenate your senses through holistic treatments designed to restore
          your glow.
        </Subtitle>
        <CTAButton href="#services">Explore Treatments</CTAButton>
      </Content>
    </HeroSection>
  );
}
