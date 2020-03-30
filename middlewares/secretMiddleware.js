const secretMd = {
    secretToReq: ( req, res, next ) => {
        req.secret = 'we rule the dev world'
        next()
    }
}

module.exports = secretMd