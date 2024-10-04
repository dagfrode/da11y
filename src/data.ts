// Test mobil senere
// for åpne lukkede sider senere

// forside lenker til thvordan sette opp ting for utvikling
// forside lenker til side som gir oversikt over testing
// forside lar en gjenoppta en testing session eller starte en ny

// testing tar en gjennom hver kategori
// hver test må besvares, men en kan gå videre uten å gjøre enkelt tester
// hver test har bestått | ikke bestått | ikke testet

// add examples of situation / temporary / permanent that have benefit for this scenario

export const testCategories = [
  {
    title: "Automated testing",
    description: "desk",
    tests: [
      {
        title: "Access all functions",
        multimedia: false,
        moreAboutThisTest: "url",
        roles: ["dev", "design", "test"],
        successCriteria: ["1.1.1", "1.2.1"],
        description: `Can you use the keyboard to access all functions of the page? No need
          for the mouse at all? No getting stuck in some input elment or modal?`,
      },
      {
        title: "Focus order",
        multimedia: false,
        moreAboutThisTest: "url",
        roles: ["dev", "design", "test"],
        successCriteria: ["1.1.1", "1.2.1"],
        description: `Does the order the focus is moved make sense?`,
      },
      {
        title: "See the focus",
        multimedia: false,
        moreAboutThisTest: "url",
        roles: ["dev", "design", "test"],
        successCriteria: ["1.1.1", "1.2.1"],
        description: `Can you see where the focus is at all times? Even after filling in
        information?`,
      },
      {
        title: "Changing content",
        multimedia: false,
        moreAboutThisTest: "url",
        roles: ["dev", "design", "test"],
        successCriteria: ["1.1.1", "1.2.1"],
        description: `Does the webpage stay the same when moving the
        focus / entering information?`,
      },
    ],
  },
  {
    title: "Keyboard",
    description: "desk",
    tests: [
      {
        title: "Font scaling",
        internal:
          "Internal or public site for different tests for different working envs",
        multimedia: false,
        moreAboutThisTest: "url",

        roles: ["dev", "design", "test"],
        successCriteria: ["1.1.1", "1.2.1"],
        description: "Use the keyboard to",
      },
    ],
  },
  {
    title: "Scaling",
    tests: [
      {
        title: "Font scaling",
        internal:
          "Internal or public site for different tests for different working envs",
        multimedia: false,
        moreAboutThisTest: "url",

        roles: ["dev", "design", "test"],
        successCriteria: ["1.1.1", "1.2.1"],
        description: "Use the keyboard to",
      },
      {
        title: "Page scaling",
        internal:
          "Internal or public site for different tests for different working envs",
        multimedia: false,
        moreAboutThisTest: "url",

        roles: ["dev", "design", "test"],
        successCriteria: ["1.1.1", "1.2.1"],
        description: "Use the keyboard to",
      },
    ],
  },
];

// Prosedyre for testing vil variere for mobil og desktop. Noen er kun relevant for en av platformene også.
// procedureMobile
// procedureDesktop

export const successCriteria = {
  "1.1.1": {
    title: "Ikke-tekstlig innhold",
    description: "Gi brukeren et tekstalternativ for innhold som ikke er tekst",
    howToTest: "",
    level: 1,
    wcagVersion: 2.0,
    wcagLink: "",
    uuTilsynetLink: "",
  },
  "1.2.1": {
    title: "Bare lyd og bare video (forhåndsinnspilt)",
    description:
      "Gi brukeren et alternativ når innholdet presenteres kun som video eller lyd",
    howToTest: "",
    level: 1,
    wcagVersion: 2.0,
    wcagLink: "",
    uuTilsynetLink: "",
  },
};

// WCAG 2
// 4 principles
// 13 guidelines
// success criteria
