

export const ROLE = {
    DEVELOPER: "developer",
    DESIGNER: "designer",
    TESTER: "tester",
  };
  export type Role =  keyof typeof  ROLE
 export const reviews = [
    {
      title: "Side 1",
      created: "2024-10-05T09:51:04.104Z",
      lastChanged: "2024-10-05T09:51:07.104Z",
      numberOfTests: 100,
      numberOfCompletedTests: 42,
      role: ROLE,
      currentTestCategory: 0
    },
    {
      title: "Side 2",
      lastChanged: "2024-10-05T09:51:07.104Z",
      created: "2024-10-05T09:51:07.104Z",
      numberOfTests: 100,
      numberOfCompletedTests: 42,
      role: ROLE.DEVELOPER,
      currentTestCategory: 1
    },
  ];
  
  export type Review = typeof reviews[0]