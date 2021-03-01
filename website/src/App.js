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

// import { withRouter } from "react-router";
// const HeaderWithRouter = withRouter(NavigationBar);

const translation = {
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
        //Analytics
        analTitleFL: "A",
        analTitle: "nalityka",
        analSubtitle: "Evaluate the entire company data",
        sec2Title: "Mądry sposób na transformację Twojej firmy",
        sec2Subtitle: "Zawsze jest jakaś historia i to ta, która ma znaczenie, ponieważ to ona stoi za tym, co robimy",
        sec2Card1Title: "Management",
        sec2Card1Content: "Leading a successful transformation requires a lot more than just picking the right moves.",
        sec2Card2Title: "Business",
        sec2Card2Content: "Think about how technology might become a part of your processes and practices going forward.",
        sec2Card3Title: "Technology",
        sec2Card3Content: "The tools you choose should offer solutions that streamline your processes for efficiency and effectiveness.",
        sec3Title: "Our Services",
        sec3Subtitle: "RPE team can provide expertise to help your organizations with...",
        sec3Row1Title: "Strategy",
        sec3Row1Content: "We will help you with building effective strategy, roadmaps and execution plans.",
        sec3Row2Title: "Data Extraction",
        sec3Row2Content: "We perform all ranges of data extraction, data ingestion and transformation.",
        sec3Row3Title: "Transformation",
        sec3Row3Content: "We design effective and proved Digital Transformation strategy, tailored for your company.",
        sec3Row4Title: "Vizualizations",
        sec3Row4Content: "We will deliver the insight to help you drive the business impact.",
        sec3Row5Title: "Auto Reports",
        sec3Row5Content: "We will deliver the insight to help you drive the business impact.",
        sec3Row6Title: "Data Management",
        sec3Row6Content: "We will help you build effective Data Management strategy.",
        sec4Title: "Industry expertise",
        sec4Content1: "Whether you are OEM, Tier 1 supplier, defense company or a small medical office, we will deliver you data analytics solutions that will help you optimize your business.",
        sec4Content2: "Whether you are looking for Supply Chain connectivity, to drive better cost reductions, flawless launches, supplier performance across quality, delivery, cost reduction, inventory optimization, sales or cost, we will help you accelerate to insight.",
        sec5Title: "ROI",
        sec5Content1: "We’ll help you measure the ROI on your analytical investment. You will start realizing it within the very first few weeks of engaging our team.",
        sec5Content2: "We will enable unprecedented data visibility, which in turn will lead to significant improvement in data quality.",
        sec5Content3: "With easy, governed access to so much of actionable data,not only your teams will gain improvement in productivity,they will be able to make more informed, data driven decisions.",
  },

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
    //Analytics
    analTitleFL: "A",
    analTitle: "nalytics",
    analSubtitle: "Evaluate the entire company data",
    sec2Title: "The smart way to transform your company",
    sec2Subtitle: "There is always a story behind and it is the one that matter because it's the why behind what we do",
    sec2Card1Title: "Management",
    sec2Card1Content: "Leading a successful transformation requires a lot more than just picking the right moves.",
    sec2Card2Title: "Business",
    sec2Card2Content: "Think about how technology might become a part of your processes and practices going forward.",
    sec2Card3Title: "Technology",
    sec2Card3Content: "The tools you choose should offer solutions that streamline your processes for efficiency and effectiveness.",
    sec3Title: "Our Services",
    sec3Subtitle: "RPE team can provide expertise to help your organizations with...",
    sec3Row1Title: "Strategy",
    sec3Row1Content: "We will help you with building effective strategy, roadmaps and execution plans.",
    sec3Row2Title: "Data Extraction",
    sec3Row2Content: "We perform all ranges of data extraction, data ingestion and transformation.",
    sec3Row3Title: "Transformation",
    sec3Row3Content: "We design effective and proved Digital Transformation strategy, tailored for your company.",
    sec3Row4Title: "Vizualizations",
    sec3Row4Content: "We will deliver the insight to help you drive the business impact.",
    sec3Row5Title: "Auto Reports",
    sec3Row5Content: "We will deliver the insight to help you drive the business impact.",
    sec3Row6Title: "Data Management",
    sec3Row6Content: "We will help you build effective Data Management strategy.",
    sec4Title: "Industry expertise",
    sec4Content1: "Whether you are OEM, Tier 1 supplier, defense company or a small medical office, we will deliver you data analytics solutions that will help you optimize your business.",
    sec4Content2: "Whether you are looking for Supply Chain connectivity, to drive better cost reductions, flawless launches, supplier performance across quality, delivery, cost reduction, inventory optimization, sales or cost, we will help you accelerate to insight.",
    sec5Title: "ROI",
    sec5Content1: "We’ll help you measure the ROI on your analytical investment. You will start realizing it within the very first few weeks of engaging our team.",
    sec5Content2: "We will enable unprecedented data visibility, which in turn will lead to significant improvement in data quality.",
    sec5Content3: "With easy, governed access to so much of actionable data,not only your teams will gain improvement in productivity,they will be able to make more informed, data driven decisions.",
  },
};

function App() {
  const [language, setLanguage] = useState("pl");

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
