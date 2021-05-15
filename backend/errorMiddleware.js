const errorMiddleware = () => {
    app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err.message
    })
   })
   next()
}

module.exports = {errorMiddleware};