const commentMiddleware = (req, res, next) => {
    if (req.method === 'POST') {
      req.body = {
        ...req.body
      };
    }
    next();
  };
  
  module.exports = (req, res, next) => {
    if (req.path === '/comments') {
      commentMiddleware(req, res, next);
    } else {
      next();
    }
  };
  