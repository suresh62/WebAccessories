

const waUtils = {

    objectToInlineStyleProps : function(obj)
    {
        if(obj){
            return JSON.stringify(obj).replace(",",";").replace('}','').replace("{",'').replace('""','"')
        }
    }
}


export default waUtils;