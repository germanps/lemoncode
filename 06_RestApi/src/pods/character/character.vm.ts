export interface Character {
  id: string
  name: string
  species: string
  status: string
  image: string
  bestSentences: string
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  species: '',
  status: '',
  image: '',
  bestSentences: '',
})