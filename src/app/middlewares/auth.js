module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // disponibiliza user para views
    res.locals.user = req.session.user

    return next()
  }

  return res.redirect('/')
}
