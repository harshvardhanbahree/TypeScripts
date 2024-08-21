enum errors {
    unAuthorized= "Un-Authorized",
    noUser ="No User Exists",
    internal ="Internal"
}

const getError = (err: errors): void =>{
    if(err == errors.unAuthorized){
        console.info("Blah Blah")
    }

}

getError(errors.unAuthorized)