export const createNewPlayer = id => {
  return {
    id,
    name: "",
    isActive: true,
    playsNow: null,
    startsRound: null,
    numOfBooms: 0,
  };
};
