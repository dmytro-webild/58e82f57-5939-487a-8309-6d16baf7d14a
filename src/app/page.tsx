"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Accueil",          id: "hero"},
        {
          name: "À propos",          id: "about"},
        {
          name: "Portfolio",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="RLshooting"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars"}}
      title="Capturez l'Action, Immortalisez l'Instant"
      description="Photographe sportif professionnel spécialisé en portrait et photos d'action. Raphael Lavoie transforme vos performances en art."
      buttons={[
        {
          text: "Voir mon travail",          href: "#features"},
        {
          text: "Contactez-moi",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-white-striped-pencil-black-white-blankets-leaf-shadow-beige-blank_23-2148296265.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Raphael Lavoie, photographe RLshooting"
      buttons={[
        {
          text: "En savoir plus",          href: "#"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Action Sportive",          description: "Figer l'intensité et le mouvement de vos compétitions.",          imageSrc: "http://img.b2bpic.net/free-photo/dancer-doing-elegant-performing-art_23-2149144298.jpg"},
        {
          title: "Portrait d'Athlète",          description: "Mettre en valeur votre personnalité au-delà du terrain.",          imageSrc: "http://img.b2bpic.net/free-photo/fit-young-woman-sportswear-posing_23-2148759026.jpg"},
        {
          title: "Photos d'Événements",          description: "Couverture complète de vos matchs et tournois.",          imageSrc: "http://img.b2bpic.net/free-photo/male-graphic-designers-showing-pictures-his-coworkers-camera_1170-983.jpg"},
      ]}
      title="Mon Expertise"
      description="Des clichés dynamiques et des portraits saisissants."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      description="Voici ce que nos clients pensent de nos services."
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Super service",          quote: "Des photos incroyables, Raphael sait exactement comment capturer le moment parfait.",          name: "Marc D.",          role: "Athlète",          imageSrc: "http://img.b2bpic.net/free-photo/young-sporty-man-wearing-sportswear-headband-doing-selfie-happy-positive-smiling-cheerfully_141793-37393.jpg"},
        {
          id: "2",          title: "Professionnalisme",          quote: "Raphael est très professionnel et le résultat est toujours à la hauteur de nos attentes.",          name: "Sophie M.",          role: "Entraîneure",          imageSrc: "http://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg"},
        {
          id: "3",          title: "Vitesse et qualité",          quote: "Il capture l'action avec une précision rare, un vrai plaisir de travailler avec lui.",          name: "Alex B.",          role: "Capitaine",          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-elegant-man-smiling_23-2148332976.jpg"},
        {
          id: "4",          title: "Artistique",          quote: "Ses portraits sont magnifiques et reflètent parfaitement mon identité.",          name: "Julie L.",          role: "Sportive",          imageSrc: "http://img.b2bpic.net/free-photo/young-sporty-man-wearing-sportswear-headband-looking-front-smiling-showing-thumbs-up-standing-white-wall_141793-96920.jpg"},
        {
          id: "5",          title: "Recommandé",          quote: "Le meilleur photographe sportif avec qui nous avons collaboré.",          name: "Kevin T.",          role: "Gérant",          imageSrc: "http://img.b2bpic.net/free-photo/impressed-young-pretty-sporty-girl-wearing-headband-wristbands-doing-ok-signs_141793-114979.jpg"},
      ]}
      title="Ce qu'ils disent"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Contact"
      title="Travaillons ensemble"
      description="Vous avez un projet de shooting photo? Écrivez-moi pour discuter de vos besoins."
      imageSrc="http://img.b2bpic.net/free-photo/black-spool-scissor-with-stacked-book-stacked-with-green-twig-against-white-background_23-2147924503.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "RLshooting",          items: [
            {
              label: "Accueil",              href: "#hero"},
            {
              label: "Portfolio",              href: "#features"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "raphael@rlshooting.com",              href: "mailto:raphael@rlshooting.com"},
          ],
        },
      ]}
      bottomLeftText="© 2024 RLshooting"
      bottomRightText="Tous droits réservés."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
