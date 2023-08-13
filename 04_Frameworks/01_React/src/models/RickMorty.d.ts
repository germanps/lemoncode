enum EStatus {
    alive,
    dead,
    unknown
}
enum EGender {
    female, 
    male, 
    genderless,
    unknown
}

interface IPlace {
    name: string,
    url: string
}

export interface IInfoResponse {   
    count: string
    next: string
    pages: number
    prev: string
}
export interface IRMCharacterEntity {
    id: number
    name: string
    status: 'Alive' | 'Dead' | 'unknown'
    species: string
    type: string
    gender: EGender
    origin: IPlace
    location: IPlace
    image: string
    url: string
    created: string
}