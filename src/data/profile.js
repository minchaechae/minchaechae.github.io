// ─────────────────────────────────────────────────────────────
//  profile.js  –  Edit this file to update all site content.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Minchae Kim",
  role: "Incoming PhD Student at Virginia Tech",
  interests: "Human-Computer Interaction · Extended Reality · 3D User Interface · Intelligent User Interface",

  bio: [
    "I am an incoming PhD Student in Computer Science at Virginia Tech this fall, where I will work with Dr. Doug Bowman in the 3D Interaction Group. My M.S. research explored an immersive interaction model that reframes fragmented VR workflows into continuous, spatially organized journeys to enhance task continuity and user engagement.",
    "I am interested in the intersection of XR and AI, particularly in 3D space management and the design of intelligent, context-aware spatial workspaces.",
  ],

  // Place your photo at public/profile.jpg
  photo: "/profile.jpg",

  links: {
    email: "yjk199900@korea.ac.kr",
    googleScholar: "https://scholar.google.com/citations?user=cn81fhwAAAAJ&hl=ko&oi=ao",
    github: "https://github.com/minchaechae",
    cv: "/cv.pdf",
    linkedin: "https://www.linkedin.com/in/minchae-kim-374ba92b1/",
  },

  // ── Publications ──────────────────────────────────────────
  // authors: wrap your own name in **double asterisks** to bold it
  // thumbnail: place image in public/ and set the path (e.g. "/pub1.jpg")
  // paper / code / project: leave as "" to hide the button
  publications: [
    {
      title: "JourneyVR: Designing for Continuous Workflow Experience in Virtual Reality",
      authors: "**Minchae Kim**, Jun Ryu, Yechan Yang, Gerard J. Kim",
      venue: "ACM Conference on Human Factors in Computing Systems (CHI)",
      year: 2026,
      paper: "",
      code: "",
      project: "",
      thumbnail: "/publications/journeyvr paper.png",
    },
    {
      title: "Quantifying Low-Level Motor Effects of Emotion: Validating Fitts' Law in Affective Contexts",
      authors: "Dongyun Joo, Yunseo Chang, JongChan Park, Kyungseo Jung, **Minchae Kim**, Gerard J. Kim",
      venue: "ACM Conference on Human Factors in Computing Systems (CHI)",
      year: 2026,
      paper: "",
      code: "",
      thumbnail: "/publications/quantifying.png",
    },
    {
      title: "JourneyVR: Experience Design for Continuous Timed Activities in Virtual Reality",
      authors: "**Minchae Kim**, Yechan Yang, Gerard J. Kim",
      venue: "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
      year: 2025,
      paper: "",
      poster: "https://ieeexplore.ieee.org/abstract/document/11236323",
      code: "",
      project: "",
      thumbnail: "/publications/journeyvr poster.png",
    },
    {
      title: "BalanceVR: balance training to increase tolerance to cybersickness in immersive virtual reality.",
      authors: "Yechan Yang, Seonghoon Kang, **Minchae Kim**, Gerard J. Kim, Hanseob Kim",
      venue: "Springer Virtual Reality",
      year: 2025,
      paper: "https://link.springer.com/article/10.1007/s10055-024-01097-7",
      code: "",
      project: "",
      thumbnail: "/publications/balancevr.png",
    },
  ],

  // ── News ──────────────────────────────────────────────────
  news: [
    { date: "Mar 2026", text: "Served as a Student Volunteer Leader at IEEE VR 2026, Daegu, South Korea." },
    { date: "Mar 2026", text: "Two papers accepted to CHI 2026 (first author, co-author)." },
    { date: "Feb 2025", text: "Admitted to the PhD program in Computer Science at Virginia Tech (Fall 2026)." },
    { date: "Dec 2025", text: "Successfully defended my Master's thesis." },
  ],
}
