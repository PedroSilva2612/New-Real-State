# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static build), deployed on Netlify. Chosen by the owner. The finished site goes to a new private GitHub repository the owner creates in their own account.

## Users

People looking for a home to buy or rent, and owners who want to sell or rent out a property. They arrive curious, often on a phone, comparing agencies before they contact one. Their job: understand quickly how the agency works and book a first conversation or a visit.

## Product Purpose

New Real State is a fictional real estate agency used as a portfolio piece by its designer and developer, Pedro Silva. The one-page site has to read as a professional, elegant agency site: it explains what the agency does (buy, rent, sell, neighbourhood guidance), walks the visitor through how buying a home works, presents a time-limited discount on sales fees and collects contact requests. Success: a visitor understands the process and sends the contact form.

## Positioning

An agency that guides the client through the whole process, from the first conversation to handing over the keys, room by room. The site itself demonstrates that guidance as a tour through a house.

## Operating Context

Single landing page in Spanish. Sections the owner asked for: hero, about us (Sobre nosotros), services (Servicios), discount (Descuento), contact (Contacto) and footer, plus a scroll tour through a house that explains the real estate process. The contact form sends through Netlify Forms.

## Capabilities and Constraints

- Language: Spanish (neutral; no specific country, currency or city).
- Fictional brand: contact details are example stand-ins (`.example` addresses, no real phone format).
- Discount (confirmed): 50% off sales fees for sales signed before 31 December 2026, with a copyable code.
- No listings database, no search backend: the footer search is a link to the contact form, not a real search.

## Brand Commitments

- The logo (`src/img/logo.svg`, a blue #0069FF crossed mark) must stay exactly as it is. It is the only element the owner asked to keep.
- Name: "New Real State" (owner's spelling, kept).
- Everything else from the 2023 version (Poppins, layout, copy) is evidence only and may be replaced.

## Evidence on Hand

- Owner's photographs in the repo: `src/img/casa1.jpg` (white house with pool), `casa2.jpg` (curved glass house by the sea), `casa3.jpg` (wood and glass house with a person walking a dog), `img1.jpg` (black and white apartment block). Exterior views only.
- Original copy: buy a home, rent a home, see neighbourhoods, sell or rent your property, three-step process (search, choose, book).
- No testimonials, client list, figures, awards or press. None may be invented as fact.

## Product Principles

1. Explain the process plainly; the visitor should leave knowing what happens next.
2. Every section ends in a clear way to contact the agency.
3. Show homes, not abstractions: real photographs of houses and rooms lead.
4. The tour through the house is the signature moment; everything around it stays calm.

## Accessibility & Inclusion

WCAG 2.1 AA: keyboard reachable, visible focus, reduced motion respected (the tour must read as plain content without animation), readable contrast on photographs.
