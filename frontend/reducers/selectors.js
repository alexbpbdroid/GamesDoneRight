// export const selectGame = ({ games, reviews }, id) => {
//   if (games[id]) {
//     const game = games[id];
//     game.reviews = game.reviewIds.map(id => reviews[id]);
//     return game;
//   }
//   return {};
// };

export const selectGame = ({ games }, id) => {
  if (games[id]) {
    const game = games[id];
    return game;
  }
  return {};
};

export const asArray = ({ games }) => (
  Object.keys(games).map(key => games[key])
);
