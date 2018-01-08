export const modificaName = (texto) => {
    return {
        type: 'modifica_name',
        payload: texto
    }
}

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaMinYear = (texto) => {
    return {
        type: 'modifica_minyear',
        payload: texto
    }
}

export const modificaMaxYear = (texto) => {
    return {
        type: 'modifica_maxyear',
        payload: texto
    }
}

export const saveProfile = (name, email, minYear, maxYear) => {
    alert('chegou');
    return {
        type: 'sucesso'
    }
}
