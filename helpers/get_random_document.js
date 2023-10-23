export const getRandomDocument = async (Model) => {
  const count = await Model.countDocuments();
  const randomIndx = Math.floor(Math.random() * count);
  const document = Model.findOne().skip(randomIndx);
  return document;
};
