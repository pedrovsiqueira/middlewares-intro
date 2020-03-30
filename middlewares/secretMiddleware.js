const secretMd = {
    secretToReq: ( secret, options ) => {

        if ( options.upper ) {
            secret = secret.toUpperCase()
        }

        return ( req, res, next ) => {
            console.log( 'inside middleware' )
            req.secret = secret
            next()
        }
    }
}

module.exports = secretMd

//segunda opção
// module.exports = {
//     secretToReq: ( secret, options ) => {

//         if ( options.upper ) {
//             secret = secret.toUpperCase()
//         }

//         return ( req, res, next ) => {
//             console.log( 'inside middleware' )
//             req.secret = secret
//             next()
//         }
//     }
// }

