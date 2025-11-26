import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any; // Using any for the nested translation object structure
}

const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      gallery: "Gallery",
      reviews: "Reviews",
      book: "Book Now",
      bookAppt: "Book Appointment"
    },
    hero: {
      rated: "#1 Rated Mattress Cleaning Service",
      titleStart: "Fresh Sleep Mattress Care.",
      titleEnd: "Wake Up Refreshed.",
      subtitle: "Remove 99.9% of dust mites, allergens, and stubborn stains with our eco-friendly deep steam technology. Restore your mattress to showroom condition.",
      ctaQuote: "Get Your Free Quote",
      ctaWorks: "How It Works",
      eco: "100% Eco-Friendly",
      dry: "Dry in 2-4 Hours"
    },
    features: {
      title: "Professional Care for Your Mattress",
      subtitle: "We use hospital-grade equipment and non-toxic solutions to deliver the deepest clean possible.",
      f1_title: "Deep Steam Extraction",
      f1_desc: "High-pressure hot water extraction penetrates deep into fibers to remove dirt and dead skin cells.",
      f2_title: "Allergen Removal",
      f2_desc: "Eliminates dust mites, pet dander, and pollen, significantly improving sleep quality for allergy sufferers.",
      f3_title: "Stain Neutralization",
      f3_desc: "Specialized enzyme treatments specifically designed to break down biological stains and yellowing.",
      f4_title: "Odor Elimination",
      f4_desc: "We don't just mask odors; we destroy the bacteria causing them, leaving a neutral, fresh scent."
    },
    process: {
      badge: "Revolutionary 5-Step System",
      title: "Mattress Cleaning and Sanitization",
      description: "Fresh Sleep Mattress Care’s revolutionary mobile mattress cleaning and sanitization process comes to you! Our green, chemical-free 5-Step process has been proven by a third-party laboratory to eradicate 99.99% of viruses, bacteria, dust mites and other allergens. We also have a 100% kill rate against bed bugs.",
      s1_title: "UV-C Light",
      s1_desc: "We use high-intensity UV-C light to penetrate the mattress surface, neutralizing the DNA of dust mites, bacteria, and viruses on contact.",
      s2_title: "Dry Steam",
      s2_desc: "Chemical-free dry steam heated to 250°F+ sanitizes the mattress and breaks down dirt without soaking the inner layers.",
      s3_title: "Industrial Vacuum",
      s3_desc: "Our HEPA-filtered industrial vacuum extraction system removes dead skin, mite waste, and debris that standard vacuums miss.",
      s4_title: "Ozone (O3)",
      s4_desc: "Ozone treatment neutralizes biological odors and airborne pathogens, leaving your mattress smelling fresh and crisp.",
      s5_title: "Infrared Heating Chamber",
      s5_desc: "Safe infrared heat penetrates deep to ensure a 100% kill rate for bed bugs and eggs while ensuring the mattress is perfectly dry.",
      effectiveness: "Effectiveness",
      proven: "Proven removal of viruses, bacteria & allergens"
    },
    gallery: {
      badge: "Real Results",
      title: "See The Difference",
      description: "Our results speak for themselves. Slide through our recent restoration projects to see how effective our deep cleaning process is.",
      before: "Before",
      after: "After",
      hover: "Hover to reveal clean",
      c1_title: "Deep Stain Removal",
      c1_desc: "5-year-old memory foam mattress restoration.",
      c2_title: "Allergen Sanitization",
      c2_desc: "Full sanitation treatment for severe dust mite allergy."
    },
    testimonials: {
      title: "Trusted by 500+ Homes",
      rating: "Average 4.9/5 rating based on local reviews",
      t1: "I was about to throw away my expensive mattress because of a coffee stain. PureRest saved it! Looks brand new.",
      t2: "My allergies have improved significantly since the cleaning. The technicians were professional and on time.",
      t3: "Fast, efficient, and no chemical smell afterwards. Highly recommend for anyone with pets."
    },
    contact: {
      title: "Ready to Refresh?",
      subtitle: "Book your slot today or get a free estimate. We usually respond within 15 minutes during business hours.",
      call: "Call Us",
      area: "Service Area",
      areaDesc: "Greater Metropolitan Area & Suburbs",
      successTitle: "Request Received!",
      successDesc: "We'll be in touch shortly to confirm your appointment details.",
      sendAnother: "Send another request",
      labelName: "Full Name",
      labelPhone: "Phone Number",
      labelService: "Mattress Size / Service Type",
      labelMsg: "Message (Optional)",
      btnSubmit: "Request Free Quote",
      btnSending: "Sending...",
      opt1: "King Size Deep Clean",
      opt2: "Queen Size Deep Clean",
      opt3: "Full/Twin Size Deep Clean",
      opt4: "Stain Removal Only",
      opt5: "Other (Describe below)",
      placeholderName: "John Doe",
      placeholderPhone: "(555) 000-0000",
      placeholderMsg: "Any specific stains or concerns?"
    },
    footer: {
      rights: "Fresh Sleep Mattress Care. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      sitemap: "Sitemap"
    },
    chat: {
      header: "RestBot AI Advisor",
      subHeader: "Ask about stains & hygiene",
      inputPlaceholder: "Ask about stain removal...",
      toggle: "Ask an Expert",
      welcome: "Hi! I'm RestBot. Ask me anything about mattress stains, dust mites, or our cleaning process!"
    }
  },
  ro: {
    nav: {
      services: "Servicii",
      process: "Proces",
      gallery: "Galerie",
      reviews: "Recenzii",
      book: "Rezervă",
      bookAppt: "Programează Acum"
    },
    hero: {
      rated: "#1 Serviciu de Curățare Saltele",
      titleStart: "Fresh Sleep Îngrijire Saltele.",
      titleEnd: "Trezește-te Odihnit.",
      subtitle: "Elimină 99,9% din acarieni, alergeni și pete dificile cu tehnologia noastră ecologică pe bază de abur. Restaurează salteaua la condiția de nou.",
      ctaQuote: "Cere Ofertă Gratuită",
      ctaWorks: "Cum Funcționează",
      eco: "100% Ecologic",
      dry: "Uscare în 2-4 Ore"
    },
    features: {
      title: "Îngrijire Profesională pentru Salteaua Ta",
      subtitle: "Folosim echipamente de grad spitalicesc și soluții non-toxice pentru a oferi cea mai profundă curățare posibilă.",
      f1_title: "Extracție Profundă cu Abur",
      f1_desc: "Extracția cu apă fierbinte la presiune înaltă penetrează adânc în fibre pentru a îndepărta murdăria și celulele moarte.",
      f2_title: "Eliminare Alergeni",
      f2_desc: "Elimină acarienii, mătreața animalelor și polenul, îmbunătățind semnificativ calitatea somnului pentru persoanele alergice.",
      f3_title: "Neutralizare Pete",
      f3_desc: "Tratamente enzimatice specializate concepute special pentru a descompune petele biologice și îngălbenirea.",
      f4_title: "Eliminare Mirosuri",
      f4_desc: "Nu doar mascăm mirosurile; distrugem bacteriile care le provoacă, lăsând un miros neutru și proaspăt."
    },
    process: {
      badge: "Sistem Revoluționar în 5 Pași",
      title: "Curățare și Igienizare Saltele",
      description: "Procesul revoluționar mobil de curățare și igienizare a saltelelor Fresh Sleep vine la tine! Procesul nostru ecologic în 5 pași, fără chimicale, a fost dovedit de un laborator terț că elimină 99,99% din virusuri, bacterii, acarieni și alți alergeni. De asemenea, avem o rată de distrugere de 100% împotriva ploșnițelor.",
      s1_title: "Lumină UV-C",
      s1_desc: "Utilizăm lumină UV-C de înaltă intensitate pentru a penetra suprafața saltelei, neutralizând ADN-ul acarienilor, bacteriilor și virusurilor la contact.",
      s2_title: "Abur Uscat",
      s2_desc: "Aburul uscat fără chimicale, încălzit la peste 120°C, dezinfectează salteaua și descompune murdăria fără a uda straturile interioare.",
      s3_title: "Aspirator Industrial",
      s3_desc: "Sistemul nostru de extracție cu aspirator industrial și filtru HEPA elimină pielea moartă, reziduurile acarienilor și resturile pe care aspiratoarele obișnuite le ratează.",
      s4_title: "Ozon (O3)",
      s4_desc: "Tratamentul cu ozon neutralizează mirosurile biologice și patogenii din aer, lăsând salteaua cu un miros proaspăt și curat.",
      s5_title: "Cameră de Încălzire cu Infraroșu",
      s5_desc: "Căldura infraroșie sigură penetrează adânc pentru a asigura o rată de distrugere de 100% a ploșnițelor și ouălor acestora, asigurând în același timp uscarea perfectă a saltelei.",
      effectiveness: "Eficacitate",
      proven: "Eliminare dovedită a virusurilor, bacteriilor și alergenilor"
    },
    gallery: {
      badge: "Rezultate Reale",
      title: "Vezi Diferența",
      description: "Rezultatele noastre vorbesc de la sine. Glisează prin proiectele noastre recente de restaurare pentru a vedea cât de eficient este procesul nostru de curățare.",
      before: "Înainte",
      after: "După",
      hover: "Plutește pentru a revela curățenia",
      c1_title: "Eliminare Pete Profunde",
      c1_desc: "Restaurare saltea spumă cu memorie veche de 5 ani.",
      c2_title: "Igienizare Alergeni",
      c2_desc: "Tratament complet de igienizare pentru alergie severă la praf."
    },
    testimonials: {
      title: "De Încredere în 500+ Case",
      rating: "Rating mediu 4.9/5 bazat pe recenzii locale",
      t1: "Eram pe punctul de a arunca salteaua mea scumpă din cauza unei pete de cafea. PureRest a salvat-o! Arată ca nouă.",
      t2: "Alergiile mele s-au îmbunătățit semnificativ de la curățare. Tehnicienii au fost profesioniști și punctuali.",
      t3: "Rapid, eficient și fără miros chimic după. Recomand cu tărie pentru oricine are animale de companie."
    },
    contact: {
      title: "Gata de Reîmprospătare?",
      subtitle: "Rezervă locul tău astăzi sau cere o estimare gratuită. Răspundem de obicei în 15 minute în timpul orelor de program.",
      call: "Sună-ne",
      area: "Zona de Serviciu",
      areaDesc: "Zona Metropolitană și Suburbii",
      successTitle: "Cerere Primită!",
      successDesc: "Te vom contacta în curând pentru a confirma detaliile programării.",
      sendAnother: "Trimite altă cerere",
      labelName: "Nume Complet",
      labelPhone: "Număr de Telefon",
      labelService: "Dimensiune Saltea / Tip Serviciu",
      labelMsg: "Mesaj (Opțional)",
      btnSubmit: "Cere Ofertă Gratuită",
      btnSending: "Se trimite...",
      opt1: "Curățare Profundă King Size",
      opt2: "Curățare Profundă Queen Size",
      opt3: "Curățare Profundă Full/Twin",
      opt4: "Doar Eliminare Pete",
      opt5: "Altele (Descrie mai jos)",
      placeholderName: "Ion Popescu",
      placeholderPhone: "07XX XXX XXX",
      placeholderMsg: "Pete specifice sau îngrijorări?"
    },
    footer: {
      rights: "Fresh Sleep Îngrijire Saltele. Toate drepturile rezervate.",
      privacy: "Confidențialitate",
      terms: "Termeni",
      sitemap: "Harta Site"
    },
    chat: {
      header: "Asistent AI RestBot",
      subHeader: "Întreabă despre pete & igienă",
      inputPlaceholder: "Întreabă despre scoaterea petelor...",
      toggle: "Întreabă un Expert",
      welcome: "Salut! Sunt RestBot. Întreabă-mă orice despre pete de saltea, acarieni sau procesul nostru de curățare!"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
