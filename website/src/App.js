import React, { useState } from "react";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Operations from "./pages/Operations";
import Digital from "./pages/Digital";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

import "./styles/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./TranslationContext";

const translation = {
//=========================ENGLISH VERSION==================================
  en: {
    //navbar
    nav1: "Home",
    nav2: "Services",
    nav21: "Analytics",
    nav22: "Operations",
    nav23: "Digital Transformation",
    nav3: "About us",
    nav4: "Career",
    nav5: "Contact",
    //Home page
    homeTitle: "ACCELERATE YOUR DIGITAL TRANSFORMATION JOURNEY",
    homeBanner:
      "We deliver business intelligence applications focused on improving your business.",
    homeExperienceTitle: "USE OUR EXPERIENCE",
    homeCard1TitleFL: "A",
    homeCard1Title: "nalytics",
    homeCard2TitleFL: "O",
    homeCard2Title: "perations",
    homeCard3TitleFL: "D",
    homeCard3Title1: "igital",
    homeCard3TitleSL: "T",
    homeCard3Title2: "ransformation",
    homeCardBtn: "LEARN MORE",
    //Analytics
    analTitleFL: "A",
    analTitle: "nalytics",
    analSubtitle: "Evaluate the entire company data",
    analsec2Title: "The smart way to transform your company",
    analsec2Subtitle:
      "There is always a story behind and it is the one that matter because it's the why behind what we do",
    analsec2Card1Title: "Management",
    analsec2Card1Content:
      "Leading a successful transformation requires a lot more than just picking the right moves.",
    analsec2Card2Title: "Business",
    analsec2Card2Content:
      "Think about how technology might become a part of your processes and practices going forward.",
    analsec2Card3Title: "Technology",
    analsec2Card3Content:
      "The tools you choose should offer solutions that streamline your processes for efficiency and effectiveness.",
    analsec3Title: "Our Services",
    analsec3Subtitle:
      "RPE team can provide expertise to help your organizations with...",
    analsec3Row1Title: "Strategy",
    analsec3Row1Content:
      "We will help you with building effective strategy, roadmaps and execution plans.",
    analsec3Row2Title: "Data Extraction",
    analsec3Row2Content:
      "We perform all ranges of data extraction, data ingestion and transformation.",
    analsec3Row3Title: "Transformation",
    analsec3Row3Content:
      "We design effective and proved Digital Transformation strategy, tailored for your company.",
    analsec3Row4Title: "Vizualizations",
    analsec3Row4Content:
      "We will deliver the insight to help you drive the business impact.",
    analsec3Row5Title: "Auto Reports",
    analsec3Row5Content:
      "we will help deliver the automated insights right to your device.",
    analsec3Row6Title: "Data Management",
    analsec3Row6Content:
      "We will help you build effective Data Management strategy.",
    analsec4Title: "Industry expertise",
    analsec4Content1:
      "Whether you are OEM, Tier 1 supplier, defense company or a small medical office, we will deliver you data analytics solutions that will help you optimize your business.",
    analsec4Content2:
      "Whether you are looking for Supply Chain connectivity, to drive better cost reductions, flawless launches, supplier performance across quality, delivery, cost reduction, inventory optimization, sales or cost, we will help you accelerate to insight.",
    analsec5Title: "ROI",
    analsec5Content1:
      "We’ll help you measure the ROI on your analytical investment. You will start realizing it within the very first few weeks of engaging our team.",
    analsec5Content2:
      "We will enable unprecedented data visibility, which in turn will lead to significant improvement in data quality.",
    analsec5Content3:
      "With easy, governed access to so much of actionable data,not only your teams will gain improvement in productivity,they will be able to make more informed, data driven decisions.",
    //ABOUT
    aboutTitleFL: "A",
    aboutTitle: "bout us",
    aboutSubtitle: "We believe in your success.",
    aboutWWATitle: "WHO WE ARE ?",
    aboutWWAContent: "RPE Analytics is a boutique analytics and automation organization. We help our clients build solutions to maximize the value of their data and analytics assets, and automate key business processes.",
    aboutWADTitle: "WE ARE DIFFERENT",
    aboutWADSubtitle: "MAIN AREAS OF EXPERTISE",
    aboutWADCard1TitleFL: "A",
    aboutWADCard1Title: "nalytics",
    aboutWADCard2TitleFL: "O",
    aboutWADCard2Title: "perations",
    aboutWADCard3TitleFL: "D",
    aboutWADCard3Title1: "igital",
    aboutWADCard3TitleSL: "T",
    aboutWADCard3Title2: "ransformation",
    aboutWADCardBtn: "LEARN MORE",
    aboutAOTTitle: "ABOUT OUR TEAM",
    aboutAOTContent: "We bring deep expertise in analytics, data management, and business process automation. Our team's collective experience encompasses established experience in solving complex business problems, and hands-on experience and certifications in new and emerging technologies. Our clients range from small businesses to Fortune 500 companies across all major industries.",
    aboutKIWSTitle: "KEY INDUSTRIES WE SUPPORT",
    aboutKIWSCard1Title: "Manufacturing",
    aboutKIWSCard2Title: "Medical",
    aboutKIWSCard3Title: "Telecomunication",
    aboutOPTitle: "OUR PARTNERS",
    aboutOPContent: "RPE has developed technology partnerships with top software vendors that are leading the Digital Transformation. We will help you accelerate your Digital Transformation journey and maximize return on your technology investments.",
    //CAREER
    careerTitle: "We Are Hiring !",
    careerContent: "RPE is always looking to grow our team with the strong talent. We invest in our employee’s education, and are providing comprehensive training to our new hires. You will work on challenging assignments.",
    careerADDBtn: "MORE DETAILS",
    //CONTACT
    contactTitle: "Contact us",
    contactBtn: "SEND EMAIL"
  },
  //===============POLISH VERSION==================
  pl: {
    //navbar
    nav1: "Strona Główna",
    nav2: "Usługi",
    nav21: "Analityka",
    nav22: "Operacje",
    nav23: "Transformacja Cyfrowa",
    nav3: "O nas",
    nav4: "Kariera",
    nav5: "Kontakt",
    //Home page
    homeTitle: "PRZYSPIESZ SWOJĄ PODRÓŻ DO CYFROWEJ TRANSFORMACJI",
    homeBanner:
      "Dostarczamy aplikacje Business Intelligence, które pomogą usprawnić Twoją firmę.",
    homeExperienceTitle: "WYKORZYSTAJ NASZE DOŚWIADCZENIE",
    homeCard1TitleFL: "A",
    homeCard1Title: "nalityka",
    homeCard2TitleFL: "O",
    homeCard2Title: "peracje",
    homeCard3TitleFL: "T",
    homeCard3Title1: "ransformacja",
    homeCard3TitleSL: "C",
    homeCard3Title2: "yfrowa",
    homeCardBtn: "SPRAWDŹ WIĘCEJ",
    //Analytics
    analTitleFL: "A",
    analTitle: "nalityka",
    analSubtitle: "Evaluate the entire company data",
    analsec2Title: "Mądry sposób na transformację Twojej firmy",
    analsec2Subtitle:
      "Zawsze jest jakaś historia i to ta, która ma znaczenie, ponieważ to ona stoi za tym, co robimy",
    analsec2Card1Title: "Zarządzanie",
    analsec2Card1Content:
      "Prowadzenie udanej transformacji wymaga o wiele więcej niż tylko wybierania właściwych ruchów.",
    analsec2Card2Title: "Biznes",
    analsec2Card2Content:
      "Pomyśl o tym, jak technologia może stać się częścią Twoich przyszłych procesów i praktyk.",
    analsec2Card3Title: "Technologia",
    analsec2Card3Content:
      "Wybrane narzędzia powinny oferować rozwiązania usprawniające procesy pod kątem wydajności i skuteczności.",
    analsec3Title: "Nasze Usługi",
    analsec3Subtitle:
      "Zespół RPE może zapewnić wiedzę, aby pomóc organizacjom w ...",
    analsec3Row1Title: "Strategia",
    analsec3Row1Content:
      "Pomożemy w budowaniu skutecznej strategii, ścieżki rozwoju i planów realizacji.",
    analsec3Row2Title: "Ekstrakcja danych",
    analsec3Row2Content:
      "Wykonujemy wszystkie zakresy ekstrakcji danych, pozyskiwania i transformacji danych.",
    analsec3Row3Title: "Transformacja",
    analsec3Row3Content:
      "Projektujemy skuteczną i sprawdzoną strategię Transformacji Cyfrowej dostosowaną do Twojej firmy.",
    analsec3Row4Title: "Wizualizacje",
    analsec3Row4Content:
      "Dostarczymy wglądu, który pomoże Ci wywierać wpływ na biznes.",
    analsec3Row5Title: "Zautomatyzowane raporty",
    analsec3Row5Content:
      "Pomożemy dostarczyć zautomatyzowane statystyki bezpośrednio na Twoje urządzenie.",
    analsec3Row6Title: "Zarządzanie danymi",
    analsec3Row6Content:
      "Pomożemy Ci zbudować skuteczną strategię zarządzania danymi.",
    analsec4Title: "Ekspertyza branży",
    analsec4Content1:
      "Niezależnie od tego, czy jesteś producentem OEM, dostawcą Tier 1, firmą zbrojeniową czy małym biurem medycznym, dostarczymy Ci rozwiązania do analizy danych, które pomogą Ci zoptymalizować Twój biznes.",
    analsec4Content2:
      "Niezależnie od tego, czy szukasz łączności z łańcuchem dostaw, aby uzyskać lepszą redukcję kosztów, bezbłędne uruchomienie, wydajność dostawców w zakresie jakości, dostawy, redukcji kosztów, optymalizacji zapasów, sprzedaży lub kosztów, pomożemy Ci przyspieszyć wgląd.",
    analsec5Title: "ROI",
    analsec5Content1:
      "Pomożemy Ci zmierzyć ROI z inwestycji analitycznej. Zaczniesz to realizować już w ciągu pierwszych kilku tygodni angażowania naszego zespołu.",
    analsec5Content2:
      "Umożliwimy bezprecedensową widoczność danych, co z kolei doprowadzi do znacznej poprawy jakości danych.",
    analsec5Content3:
      "Dzięki łatwemu, zarządzanemu dostępowi do tak dużej ilości danych, które można wykorzystać, nie tylko Twoje zespoły osiągną poprawę produktywności, ale będą mogły podejmować bardziej świadome, oparte na danych decyzje.",
          //ABOUT
    aboutTitleFL: "P",
    aboutTitle: "oznaj nas",
    aboutSubtitle: "Głęboko wierzymy w Twój sukces.",
    aboutWWATitle: "KIM JESTEŚMY ?",
    aboutWWAContent: "RPE Analytics to butikowa organizacja zajmująca się analizą i automatyzacją. Pomagamy naszym klientom tworzyć rozwiązania maksymalizujące wartość ich danych i zasobów analitycznych oraz automatyzujące kluczowe procesy biznesowe.",
    aboutWADTitle: "JESTEŚMY INNI",
    aboutWADSubtitle: "GŁÓWNE DZIEDZINY",
    aboutWADCard1TitleFL: "A",
    aboutWADCard1Title: "nalityka",
    aboutWADCard2TitleFL: "O",
    aboutWADCard2Title: "peracje",
    aboutWADCard3TitleFL: "T",
    aboutWADCard3Title1: "ransformacja",
    aboutWADCard3TitleSL: "C",
    aboutWADCard3Title2: "yfrowa",
    aboutWADCardBtn: "SPRAWDŹ WIĘCEJ",
    aboutAOTTitle: "O NASZYM ZESPOLE",
    aboutAOTContent: "Wnosimy głęboką wiedzę w zakresie analityki, zarządzania danymi i automatyzacji procesów biznesowych. Zbiorowe doświadczenie naszego zespołu obejmuje ugruntowane doświadczenie w rozwiązywaniu złożonych problemów biznesowych oraz praktyczne doświadczenie i certyfikaty w zakresie nowych i powstających technologii. Nasi klienci to zarówno małe firmy, jak i firmy z listy Fortune 500 ze wszystkich głównych branż.",
    aboutKIWSTitle: "KLUCZOWE BRANŻE, KTÓRE WSPIERAMY",
    aboutKIWSCard1Title: "Przemysł",
    aboutKIWSCard2Title: "Medycyna",
    aboutKIWSCard3Title: "Telekomunikacja",
    aboutOPTitle: "NASI PARTNERZY",
    aboutOPContent: "RPE nawiązało współpracę technologiczną z czołowymi dostawcami oprogramowania, którzy prowadzą cyfrową transformację. Pomożemy Ci przyspieszyć podróż do cyfrowej transformacji i zmaksymalizować zwrot z inwestycji w technologie.",
        //CAREER
        careerTitle: "Czekamy na Ciebie !",
        careerContent: "RPE zawsze stara się rozwijać nasz zespół dzięki silnym talentom. Inwestujemy w edukację naszych pracowników i zapewniamy naszym nowym pracownikom wszechstronne szkolenia. Będziesz pracować nad rozwijającymi zadaniami.",
        careerADDBtn: "SPRAWDŹ",
            //CONTACT
    contactTitle: "Napisz do nas",
    contactBtn: "WYŚLIJ MAILA"
  },
};

function App() {

  const [language, setLanguage] = useState(() => {
    if(Intl.DateTimeFormat().resolvedOptions().timeZone == "Europe/Warsaw") {
      return "pl"
    } else {
      return "en"
    }
  } );
  // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const handleLanguageChange = (language) => setLanguage(language);

  return (
    <Provider
      value={{
        setLanguage: handleLanguageChange,
        language: language,
        labels: translation[language],
      }}
    >
      <div className="mainContainer">
        <Router basename="/">
          <NavigationBar />
          {/* <HeaderWithRouter /> */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/operations" component={Operations}></Route>
            <Route exact path="/analytics" component={Analytics}></Route>
            <Route exact path="/digital" component={Digital}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/career" component={Career}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route path="*" component={ErrorPage}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
