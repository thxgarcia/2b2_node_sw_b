function calcula(a, b, op){
    if(op === "+"){
        return(a+b)
    }else if(op === "-"){
        return(a-b)
    }else if(op === "*"){
        return(a*b)
    }else if(op === "/"){
        return(a/b)
    }else{
        return(`${op} não existe.`)
    }
}

console.log(`O resultado é ${calcula(58, 24, "-")}`)