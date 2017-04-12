export default {
    common: {
        uploadSignatureValidate(signature){
            return signature.expires > new Date().getTime();
        }
    }
}