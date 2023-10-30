import Axios from 'axios'
import { CharacterEntityApi } from './character-collection.api-model'
import { mockCharacterCollection } from './character-collection.mock-data'

const url = 'http://localhost:3000/characters'
let characterCollection = [...mockCharacterCollection]

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(url)
  return data
}

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((x) => x.id !== id)
  return true
}