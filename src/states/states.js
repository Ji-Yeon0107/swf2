import { atom } from 'recoil'

export const startState = atom({
  key: 'startState',
  default: false,
})

export const scoreState = atom({
  key: 'scoreState',
  default: 0,
})

export const showResultState = atom({
  key : 'showResultState',
  default: false,
})

export const levelState = atom({
  key : 'levelState',
  default: '',
})

export const imgURLState = atom({
  key : 'imgURLState',
  default: '',
})