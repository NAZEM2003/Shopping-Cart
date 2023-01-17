export const validate = (data , type) =>{
    const errors = {}

    if(!data.email){
        errors.email = "Email isrequired"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email address is invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password = "password is required"
    }else if(data.password.length < 6){
        errors.password = "password need to be 6 character or more"
    }else{
        delete errors.password
    }

    if(type === "signUp"){

        if(!data.name.trim()){
            errors.name = "Name is required"
        }else{
            delete errors.name
        }

        if(!data.confrimPassword){
            errors.confrimPassword = "Confirm the password"
        }else if(data.confrimPassword !== data.password){
            errors.confrimPassword = "password do not match"
        }else{
            delete errors.confrimPassword
        }

        if(data.isAccepted){
            delete errors.isAccepted
        }else{
            errors.isAccepted = "Accept our regulation"
        }


    }

    return errors;
}