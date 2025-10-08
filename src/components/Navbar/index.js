import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255,255,255,0.95)" : "transparent"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none"};
  backdrop-filter: blur(10px);
  transition: background 0.3s, box-shadow 0.3s;
  z-index: 1000;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: #1b4d4a;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    height: 100vh;
    width: 60%;
    background: #e7f3f1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: 56px;
    transition: right 0.4s ease;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
    z-index: 1001;
    overflow-y: auto;
  }
`;

const MobileOverlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: opacity 0.3s ease;
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    z-index: 1000;
  }
`;

const CloseInMenu = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 14px;
    right: 14px;
    background: transparent;
    border: none;
    font-size: 1.4rem;
    color: #1b4d4a;
    cursor: pointer;
  }
`;

const MenuItem = styled.li`
  a {
    color: #1b4d4a;
    font-weight: 500;
    text-decoration: none;
    font-size: 1.05rem;
    transition: color 0.3s;
    &:hover {
      color: #a8895c;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  color: #1b4d4a;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when the URL hash changes (anchors) or history changes
  useEffect(() => {
    const closeOnHash = () => setOpen(false);
    const closeOnPop = () => setOpen(false);
    window.addEventListener("hashchange", closeOnHash);
    window.addEventListener("popstate", closeOnPop);

    return () => {
      window.removeEventListener("hashchange", closeOnHash);
      window.removeEventListener("popstate", closeOnPop);
    };
  }, []);

  // Close menu when resizing to desktop to avoid stuck open state
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Touch handlers for swipe-to-close (swipe right)
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return undefined;

    const onTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchCurrentX.current = touchStartX.current;
    };

    const onTouchMove = (e) => {
      touchCurrentX.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
      const delta = touchCurrentX.current - touchStartX.current;
      // if user swiped right more than 60px, close
      if (delta > 60) setOpen(false);
      touchStartX.current = 0;
      touchCurrentX.current = 0;
    };

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove);
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [menuRef, open]);

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavInner>
        <Logo href="#">Serenity Spa</Logo>
        <Hamburger onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <MobileOverlay open={open} onClick={() => setOpen(false)} />
        <Menu open={open} ref={menuRef}>
          <CloseInMenu onClick={() => setOpen(false)} aria-label="Close menu">
            <FaTimes />
          </CloseInMenu>
          <MenuItem>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#reviews" onClick={() => setOpen(false)}>
              Reviews
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </MenuItem>
        </Menu>
      </NavInner>
    </NavbarContainer>
  );
}
