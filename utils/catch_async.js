// Handle async functions (instead of using try-catch blocks)
export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
