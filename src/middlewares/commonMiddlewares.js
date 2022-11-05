
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}   




// const headerValidation = function(req, res, next){

//     let isFreeAppUser = req.headers.isfreeappuser

//     if(!isFreeAppUser){
//         return res.send({msg : "mandatory is not present"})
//     }else{
//         isFreeAppUser = isFreeAppUser.toLowerCase() === "true" ? true:false
//         req.isFreeAppUser = isFreeAppUser
//         console.log("isFreeAppUser is added")
//         next()    
//     }
// }

const headerValidation = function(req, res, next){
     isFreeAppUser = req.headers.isfreeappuser

    if(isFreeAppUser){
        next()
    } else {
        res.send({msg:"header is mandatory"})
    }
    
}


module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.headerValidation = headerValidation
