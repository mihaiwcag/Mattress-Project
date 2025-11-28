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
      rated: "#1 Rated Mattress Cleaning Service — A pioneer in advanced mattress sanitization, redefining cleanliness, safety, and customer care.",
      titleStart: "Fresh Sleep Mattress Care.",
      titleEnd: "Wake Up Refreshed.",
      subtitle: "Remove 99.9% of dust mites, allergens, and stubborn stains with our eco-friendly deep steam technology. Restore your mattress to showroom condition.",
      ctaQuote: "Get Your Free Quote",
      ctaWorks: "How It Works",
      eco: "100% Eco-Friendly",
      no_chem: "No Chemicals",
      dry: "Dry in 15 Minutes",
      kill_virus: "Remove 99.99% of viruses, bacteria, dust mites and other allergens",
      kill_bugs: "100% kills Bed Bugs"
    },
    features: {
      title: "Professional Care for Your Mattress",
      subtitle: "We use hospital-grade equipment and non-toxic solutions to deliver the deepest clean possible.",
      f1_title: "Deep Steam Extraction",
      f1_desc: "High-pressure hot water extraction penetrates deep into fibers to remove dirt and dead skin cells.",
      f1_detail: "Our Truck-Mounted Steam Extraction system heats water to over 250°F. This superheated water is injected deep into the mattress fibers at high pressure to break down stubborn grime, body oils, and accumulated debris. Simultaneously, a powerful industrial vacuum extracts the water along with the dirt, ensuring the mattress is left barely damp and dries quickly. This method provides a level of hygiene that surface cleaning simply cannot match.",
      f2_title: "Allergen Removal",
      f2_desc: "Eliminates dust mites, pet dander, and pollen, significantly improving sleep quality for allergy sufferers.",
      f2_detail: "An average mattress can house millions of dust mites. While the mites themselves are microscopic, their waste particles are a leading cause of indoor allergies and asthma. Our process combines UV-C sterilization with HEPA filtration to capture 99.97% of allergen particles as small as 0.3 microns. We effectively reset the allergen load of your sleeping surface, providing immediate relief for sinus issues and respiratory sensitivities.",
      f3_title: "Stain Neutralization",
      f3_desc: "Specialized enzyme treatments specifically designed to break down biological stains and yellowing.",
      f3_detail: "Biological stains (sweat, urine, blood) contain proteins that harden and bind to fabric over time. Standard chemical cleaners often 'set' these stains further. We use an advanced, eco-friendly enzymatic formula that digests the protein structures causing the stain. This allows us to lift complex discoloration without damaging the delicate fibers of your mattress, restoring its visual appeal safely.",
      f4_title: "Odor Elimination",
      f4_desc: "We don't just mask odors; we destroy the bacteria causing them, leaving a neutral, fresh scent.",
      f4_detail: "Perfumes and sprays only cover up smells temporarily. True odor removal requires eliminating the source. Our process utilizes an Ozone (O3) treatment phase and bacterial neutralizers that kill the odor-causing bacteria at a molecular level. Whether it is pet accidents, smoke, or general staleness, we restore the neutral, crisp scent of a new mattress.",
      biz_title: "Beyond Residential",
      biz_comm_title: "Commercial Services",
      biz_comm_desc: "Bulk cleaning rates available for Hotels, AirBnBs, Dormitories, and Care Facilities.",
      biz_emerg_title: "Emergency Service",
      biz_emerg_desc: "Same-day appointments available for urgent biological spills and accidents.",
      more_services_title: "Complete Home Cleaning Services",
      more_services_subtitle: "We offer a full range of specialized cleaning services for your home.",
      service_airduct: "Air Duct Cleaning Services",
      service_carpet: "Carpet & Upholstery Cleaning",
      service_hardwood: "Hardwood Floors",
      service_housekeeping: "Housekeeping",
      service_tile: "Tile, Grout & Specialty Stone Cleaning",
      service_windows: "Windows & Eavestroughs",
      service_moving: "Moving / Relocation",
      service_nicotine: "Nicotine Stain & Smoker Cleanup"
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
      proven: "Proven removal of viruses, bacteria & allergens",
      safety_title: "Our Safety Promise",
      safety_desc: "All technicians are bonded, insured, and undergo strict background checks. We use hospital-grade sanitization on our equipment between every job to prevent cross-contamination."
    },
    gallery: {
      badge: "Real Results",
      title: "See The Difference",
      description: "Our results speak for themselves. Slide through our recent restoration projects to see how effective our deep cleaning process is.",
      before: "Before",
      after: "After",
      hover: "Hover to reveal clean",
      c1_title: "Deep Stain Removal",
      c1_desc: "Heavy yellowing and sweat stain restoration.",
      c2_title: "Texture Restoration",
      c2_desc: "Removing gray buildup from pillow-top patterns.",
      guarantee_title: "100% Satisfaction Guarantee",
      guarantee_desc: "We stand by our results. If you don't see a visible improvement in stains or odor, we will re-clean the area for free."
    },
    testimonials: {
      title: "Trusted by 500+ Homes",
      rating: "Average 4.9/5 rating based on local reviews",
      t1: "I was about to throw away my expensive mattress because of a coffee stain. PureRest saved it! Looks brand new.",
      t2: "My allergies have improved significantly since the cleaning. The technicians were professional and on time.",
      t3: "Fast, efficient, and no chemical smell afterwards. Highly recommend for anyone with pets.",
      cert_insured: "Fully Insured & Bonded",
      cert_iicrc: "IICRC Certified Technicians",
      cert_bbb: "BBB Accredited Business"
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
    },
    consultant: {
      title: "AI Stain Consultant",
      subtitle: "Not sure what to do? Describe your stain below and get instant expert advice on immediate mitigation steps before we arrive.",
      placeholder: "e.g., I spilled red wine on my memory foam mattress about an hour ago...",
      button: "Analyze Stain",
      analyzing: "Analyzing...",
      resultTitle: "Expert Recommendation:",
      disclaimer: "Note: These are emergency mitigation steps. Deep set stains require professional extraction to prevent mold and permanent discoloration."
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
      rated: "#1 Serviciu de Curățare Saltele — Un pionier în igienizarea avansată, redefinind curățenia, siguranța și grija pentru clienți.",
      titleStart: "Fresh Sleep Îngrijire Saltele.",
      titleEnd: "Trezește-te Odihnit.",
      subtitle: "Elimină 99,9% din acarieni, alergeni și pete dificile cu tehnologia noastră ecologică pe bază de abur. Restaurează salteaua la condiția de nou.",
      ctaQuote: "Cere Ofertă Gratuită",
      ctaWorks: "Cum Funcționează",
      eco: "100% Ecologic",
      no_chem: "Fără Chimicale",
      dry: "Uscare în 15 Minute",
      kill_virus: "Elimină 99,99% din virusuri, bacterii, acarieni și alți alergeni",
      kill_bugs: "Distruge 100% Ploșnițele"
    },
    features: {
      title: "Îngrijire Profesională pentru Salteaua Ta",
      subtitle: "Folosim echipamente de grad spitalicesc și soluții non-toxice pentru a oferi cea mai profundă curățare posibilă.",
      f1_title: "Extracție Profundă cu Abur",
      f1_desc: "Extracția cu apă fierbinte la presiune înaltă penetrează adânc în fibre pentru a îndepărta murdăria și celulele moarte.",
      f1_detail: "Sistemul nostru de extracție cu abur montat pe camion încălzește apa la peste 120°C. Această apă supraîncălzită este injectată adânc în fibrele saltelei la presiune înaltă pentru a descompune murdăria persistentă, uleiurile corporale și resturile acumulate. Simultan, un aspirator industrial puternic extrage apa împreună cu murdăria, asigurând că salteaua rămâne doar ușor umedă și se usucă rapid. Această metodă oferă un nivel de igienă pe care curățarea de suprafață nu îl poate egala.",
      f2_title: "Eliminare Alergeni",
      f2_desc: "Elimină acarienii, mătreața animalelor și polenul, îmbunătățind semnificativ calitatea somnului pentru persoanele alergice.",
      f2_detail: "O saltea medie poate găzdui milioane de acarieni. Deși acarienii înșiși sunt microscopici, particulele lor reziduale sunt o cauză principală a alergiilor interioare și a astmului. Procesul nostru combină sterilizarea UV-C cu filtrarea HEPA pentru a capta 99,97% din particulele alergene de până la 0,3 microni. Resetăm eficient încărcătura alergenică a suprafeței de dormit, oferind o ușurare imediată pentru problemele sinusurilor și sensibilitățile respiratorii.",
      f3_title: "Neutralizare Pete",
      f3_desc: "Tratamente enzimatice specializate concepute special pentru a descompune petele biologice și îngălbenirea.",
      f3_detail: "Petele biologice (transpirație, urină, sânge) conțin proteine care se întăresc și se leagă de țesătură în timp. Produsele de curățare chimice standard adesea 'fixează' aceste pete și mai mult. Folosim o formulă enzimatică ecologică avansată care digeră structurile proteice care cauzează pata. Acest lucru ne permite să ridicăm decolorarea complexă fără a deteriora fibrele delicate ale saltelei dvs., restabilindu-i aspectul vizual în siguranță.",
      f4_title: "Eliminare Mirosuri",
      f4_desc: "Nu doar mascăm mirosurile; distrugem bacteriile care le provoacă, lăsând un miros neutru și proaspăt.",
      f4_detail: "Parfumurile și spray-urile acoperă mirosurile doar temporar. Adevărata eliminare a mirosurilor necesită eliminarea sursei. Procesul nostru utilizează o fază de tratament cu Ozon (O3) și neutralizatori bacterieni care ucid bacteriile cauzatoare de mirosuri la nivel molecular. Fie că este vorba de accidente cu animale de companie, fum sau aer stătut, restabilim mirosul neutru și proaspăt al unei saltele noi.",
      biz_title: "Dincolo de Rezidențial",
      biz_comm_title: "Servicii Comerciale",
      biz_comm_desc: "Tarife de volum disponibile pentru Hoteluri, AirBnB-uri, Cămine și Centre de Îngrijire.",
      biz_emerg_title: "Serviciu de Urgență",
      biz_emerg_desc: "Programări în aceeași zi disponibile pentru incidente biologice urgente.",
      more_services_title: "Servicii Complete de Curățenie",
      more_services_subtitle: "Oferim o gamă completă de servicii specializate de curățenie pentru casa ta.",
      service_airduct: "Curățare Tubulatură Aer",
      service_carpet: "Curățare Covoare și Tapițerie",
      service_hardwood: "Podele din Lemn Masiv",
      service_housekeeping: "Menaj",
      service_tile: "Gresie, Rosturi și Piatră Specială",
      service_windows: "Geamuri și Jgheaburi",
      service_moving: "Mutări / Relocare",
      service_nicotine: "Curățare Pete Nicotină și Fumători"
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
      proven: "Eliminare dovedită a virusurilor, bacteriilor și alergenilor",
      safety_title: "Promisiunea Noastră de Siguranță",
      safety_desc: "Toți tehnicienii sunt asigurați și trec prin verificări stricte. Utilizăm igienizare de grad spitalicesc pe echipamentele noastre între fiecare lucrare pentru a preveni contaminarea încrucișată."
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
      c2_desc: "Tratament complet de igienizare pentru alergie severă la praf.",
      guarantee_title: "Garanție 100% de Satisfacție",
      guarantee_desc: "Ne susținem rezultatele. Dacă nu vedeți o îmbunătățire vizibilă a petelor sau mirosului, vom recurăța zona gratuit."
    },
    testimonials: {
      title: "De Încredere în 500+ Case",
      rating: "Rating mediu 4.9/5 bazat pe recenzii locale",
      t1: "Eram pe punctul de a arunca salteaua mea scumpă din cauza unei pete de cafea. PureRest a salvat-o! Arată ca nouă.",
      t2: "Alergiile mele s-au îmbunătățit semnificativ de la curățare. Tehnicienii au fost profesioniști și punctuali.",
      t3: "Rapid, eficient și fără miros chimic după. Recomand cu tărie pentru oricine are animale de companie.",
      cert_insured: "Complet Asigurat",
      cert_iicrc: "Tehnicieni Certificați IICRC",
      cert_bbb: "Afacere Acreditată BBB"
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
    },
    consultant: {
      title: "Consultant AI pentru Pete",
      subtitle: "Nu ești sigur ce să faci? Descrie pata mai jos și primește sfaturi experte instantanee pentru pașii de atenuare imediată înainte de sosirea noastră.",
      placeholder: "ex: Am vărsat vin roșu pe salteaua din spumă cu memorie acum o oră...",
      button: "Analizează Pata",
      analyzing: "Se analizează...",
      resultTitle: "Recomandare Expert:",
      disclaimer: "Notă: Aceștia sunt pași de urgență. Petele adânci necesită extracție profesională pentru a preveni mucegaiul și decolorarea permanentă."
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