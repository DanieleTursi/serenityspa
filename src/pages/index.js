import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

// ===== Services Section =====
const ServicesSection = styled.section`
  padding: 80px 20px;
  background: #f4f8f7;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #1b4d4a;
  font-family: "Playfair Display", serif;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;

  /* On small screens stack cards and allow internal vertical scrolling */
  @media (max-width: 700px) {
    display: block;
    max-height: 60vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-right: 8px; /* avoid content behind scrollbar */
  }
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 700px) {
    margin-bottom: 18px;
  }

  h3 {
    font-size: 1.3rem;
    color: #a8895c;
    margin-bottom: 10px;
  }

  p {
    color: #355b57;
    margin-bottom: 12px;
  }

  span {
    font-weight: bold;
    color: #1b4d4a;
  }
`;

// ===== Gallery Section =====
const GallerySection = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: #fff;
`;

const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #1b4d4a;
  font-family: "Playfair Display", serif;
`;

const GalleryGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding-bottom: 15px;
  max-width: 1100px;
  margin: 0 auto;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a8895c;
    border-radius: 4px;
  }

  img {
    width: 280px;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

// ===== Reviews Section =====
const ReviewsSection = styled.section`
  padding: 80px 20px;
  background: #f4f8f7;
  text-align: center;
`;

const ReviewsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #1b4d4a;
  font-family: "Playfair Display", serif;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
`;

const ReviewCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  font-style: italic;

  p {
    color: #355b57;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  h4 {
    font-weight: bold;
    color: #a8895c;
    text-align: right;
  }
`;

export default function Home() {
  const services = [
    {
      name: "Swedish Massage",
      desc: "Relaxing full-body massage to relieve tension.",
      price: "£65 / session",
    },
    {
      name: "Hot Stone Massage",
      desc: "Warm stones for deep muscle relaxation.",
      price: "£80 / session",
    },
    {
      name: "Aromatherapy Facial",
      desc: "Gentle facial with essential oils for glowing skin.",
      price: "£70 / session",
    },
    {
      name: "Body Scrub",
      desc: "Exfoliating treatment leaving your skin silky smooth.",
      price: "£55 / session",
    },
    {
      name: "Manicure",
      desc: "Classic manicure with moisturizing treatment.",
      price: "£35",
    },
    {
      name: "Pedicure",
      desc: "Relaxing pedicure leaving feet soft and refreshed.",
      price: "£45",
    },
    {
      name: "Deep Tissue Massage",
      desc: "Therapeutic massage focusing on deeper layers of muscle to relieve chronic tension.",
      price: "£75 / session",
    },
    {
      name: "Couples Massage",
      desc: "Side-by-side relaxing treatments for two in a private room.",
      price: "£130 / session",
    },
    {
      name: "Reflexology",
      desc: "Pressure point therapy for feet to promote whole-body relaxation and balance.",
      price: "£50 / session",
    },
    {
      name: "Hot Oil Therapy",
      desc: "Nourishing warm oil treatment to soothe muscles and hydrate the skin.",
      price: "£85 / session",
    },
    {
      name: "Luxury Facial",
      desc: "Advanced facial using premium products and techniques for radiant skin.",
      price: "£90 / session",
    },
    {
      name: "Scalp & Neck Massage",
      desc: "Focused treatment to relieve tension and improve circulation in the head and neck.",
      price: "£40 / session",
    },
  ];

  const gallery = [
    "/images/spa1.jpg",
    "/images/spa2.jpg",
    "/images/spa3.jpg",
    "/images/spa4.jpg",
    "/images/spa5.jpg",
  ];

  const reviews = [
    {
      text: "Serenity Spa is my personal oasis. Every visit leaves me feeling completely rejuvenated and stress-free. The staff is incredibly attentive and the treatments are heavenly.",
      author: "– Laura M.",
    },
    {
      text: "I experienced the hot stone massage and aromatherapy facial. The ambiance is so calm and luxurious; it truly feels like a 5-star spa experience.",
      author: "– Sophie L.",
    },
    {
      text: "From the moment I walked in, I felt welcomed and cared for. The treatments are exquisite, and I always leave glowing and relaxed.",
      author: "– Emma T.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* Services */}
      <ServicesSection id="services">
        <ServicesTitle>Our Treatments</ServicesTitle>
        <ServicesGrid>
          {services.map((s, i) => (
            <ServiceCard key={i}>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span>{s.price}</span>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      {/* Gallery */}
      <GallerySection id="gallery">
        <GalleryTitle>Our Spa Gallery</GalleryTitle>
        <GalleryGrid>
          {gallery.map((src, i) => (
            <img key={i} src={src} alt={`Spa ${i + 1}`} />
          ))}
        </GalleryGrid>
      </GallerySection>

      {/* Reviews */}
      <ReviewsSection id="reviews">
        <ReviewsTitle>Client Testimonials</ReviewsTitle>
        <ReviewsGrid>
          {reviews.map((r, i) => (
            <ReviewCard key={i}>
              <p>{r.text}</p>
              <h4>{r.author}</h4>
            </ReviewCard>
          ))}
        </ReviewsGrid>
      </ReviewsSection>

      {/* Footer */}
      <Footer />
    </>
  );
}
