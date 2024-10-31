const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (er) {
    const message = er.errors[0].message;
    const status = 422;
    console.log(message);

    const err = {
      message,
      status,
    };
    next(err);
  }
};

export default validate;
