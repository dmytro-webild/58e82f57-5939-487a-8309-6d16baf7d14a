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
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775515728572-nffvl0j9.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
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
          title: "Visibilité ",          description: "Un portrait serré capturé en lumière naturelle, révélant la concentration intense avant le départ.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775516040181-ipdzbozo.jpg"},
        {
          title: "Contenu vendeur ",          description: "Chaque photo est pensée pour capter l’attention, engager et renforcer ton image sur les réseaux.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775516040181-x5bckio3.jpg"},
        {
          title: "Focus Performance",          description: "Le regard déterminé du sportif vers la ligne d'arrivée lors d'une session de sprint matinal.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775516040181-nyg8mfj3.png"},
        {
          title: "Action Intense",          description: "Contraste saisissant entre la vitesse du mouvement et la netteté du visage en plein effort.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775515880017-z4en3lf5.jpg"},
        {
          title: "Dynamisme",          description: "Capture cinétique du geste technique, soulignant la puissance et la maîtrise de l'athlète.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775515880017-6olxce3d.jpg"},
      ]}
      title="Mon Portfolio Action"
      description="Une sélection des meilleurs clichés d'action sportive et portraits."
      tag="Notre savoir-faire"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      description="Voici ce que les sportifs et collaborateurs pensent de mon approche."
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Le souci du détail",          quote: "Raphaël possède ce talent rare de savoir anticiper le geste parfait. Un résultat toujours impressionnant.",          name: "Marc D.",          role: "Athlète",          imageSrc: "http://img.b2bpic.net/free-photo/young-sporty-man-wearing-sportswear-headband-doing-selfie-happy-positive-smiling-cheerfully_141793-37393.jpg"},
        {
          id: "2",          title: "Un œil d'expert",          quote: "Travailler avec Raphaël, c'est l'assurance d'une qualité artistique qui sublime la performance sportive.",          name: "Sophie M.",          role: "Entraîneure",          imageSrc: "http://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg"},
        {
          id: "3",          title: "Précision et vitesse",          quote: "Il capture l'action avec une fulgurance rare. Un vrai partenaire de choix pour immortaliser nos compétitions.",          name: "Alex B.",          role: "Capitaine",          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-elegant-man-smiling_23-2148332976.jpg"},
        {
          id: "4",          title: "Une identité visuelle forte",          quote: "Ses portraits ne sont pas seulement des photos, ce sont de véritables récits de détermination.",          name: "Julie L.",          role: "Sportive",          imageSrc: "http://img.b2bpic.net/free-photo/young-sporty-man-wearing-sportswear-headband-looking-front-smiling-showing-thumbs-up-standing-white-wall_141793-96920.jpg"},
        {
          id: "5",          title: "Un professionnel de confiance",          quote: "Raphaël allie la technique à l'émotion comme personne. Le partenaire idéal pour tout projet sportif.",          name: "Kevin T.",          role: "Gérant",          imageSrc: "http://img.b2bpic.net/free-photo/impressed-young-pretty-sporty-girl-wearing-headband-wristbands-doing-ok-signs_141793-114979.jpg"},
        {
          id: "6",          title: "Au-delà des attentes",          quote: "J'ai été bluffé par sa capacité à capter l'ambiance unique de notre événement. Un vrai pro.",          name: "Thomas V.",          role: "Organisateur",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-man-wearing-casual-clothing_158595-5303.jpg"},
        {
          id: "7",          title: "Magique",          quote: "Raphael a su immortaliser les meilleurs moments de ma carrière sportive avec un talent inégalable.",          name: "Elodie F.",          role: "Athlète",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman-with-long-hair_158595-5310.jpg"}
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
