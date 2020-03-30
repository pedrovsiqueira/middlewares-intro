const secretMd = {
    secretToReq: () => ( req, res, next ) => {
        console.log('inside middleware')
        req.secret = 'we rule the dev world'
        next()
    }
}

module.exports = secretMd