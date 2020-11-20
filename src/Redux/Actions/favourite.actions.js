export function saveFavourite(AllData) {
    return {
        type: 'SAVE_FAVOURITE',
        payload: AllData
    }
}

export function deleteFavourtie(id){
    return {
        type:'DELETE_FAVOURITE',
        payload:id
    }
}