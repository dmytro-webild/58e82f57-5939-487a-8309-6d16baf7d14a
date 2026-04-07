"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
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
      title="Transformez vos performances en visibilité, en impact et en résultats. "
      description="Photographe sportif professionnel spécialisé en portrait et photos d'action. Raphael Lavoie transforme vos performances en art. Contactez-moi au 514-965-2753 ou par email à raphael@formaxagency.net."
      buttons={[
        {
          text: "Voir mon travail",          href: "#features"},
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
          title: "Visibilité ",          description: "Des images optimisées pour performer, attirer plus de vues et donner plus de portée à ton contenu. ",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775516040181-ipdzbozo.jpg"},
        {
          title: "Contenu vendeur ",          description: "Chaque photo est pensée pour capter l’attention, engager et renforcer ton image sur les réseaux.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775516040181-x5bckio3.jpg"},
        {
          title: "Adaptation ",          description: "Je m’ajuste à ton style, ton équipe et ton environnement pour créer du contenu parfaitement aligné avec ton image. ",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775516040181-nyg8mfj3.png"},
        {
          title: "Livraison rapide et efficace ",          description: "Des images livrées sans délai pour garder ton contenu toujours à jour.\n ",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775515880017-z4en3lf5.jpg"},
        {
          title: "Qualité professionnelle ",          description: "Capture cinétique du geste technique, soulignant la puissance et la maîtrise de l'athlète.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775515880017-6olxce3d.jpg"},
      ]}
      title="Mon Portfolio "
      description="Ce que je vous apporte concrètement "
      tag="Notre savoir-faire"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Contact"
      title="Travaillons ensemble"
      description="Pour toute demande, contactez-moi au 514-965-2753 ou envoyez-moi un e-mail à raphael@formaxagency.net. Je vous répondrai dans les plus brefs délais."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C04CJHGaHzi07kJ6BAiFVaLf2A/uploaded-1775515880018-bvbdg053.jpg"
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
              label: "514-965-2753",              href: "tel:5149652753"},
            {
              label: "raphael@formaxagency.net",              href: "mailto:raphael@formaxagency.net"},
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