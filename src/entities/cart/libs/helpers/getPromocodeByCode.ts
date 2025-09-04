// data
import { promocodes } from '@/mockData/promocodes'
// types
import type { Promocode } from '@/entities/cart/model/types/promocodeType'

export const getPromocodeByCode = (code: string): Promocode | string => {
  if (!localStorage.getItem('promocode')) {
    localStorage.setItem('promocode', JSON.stringify(promocodes))
  }

  const allPromocodes: Promocode [] = JSON.parse(localStorage.getItem('promocode') as string)

  const promocodeIndex = allPromocodes.findIndex(item => item.code === code)
  if (promocodeIndex === -1) {
    return 'Промокод не знайдено'
  }

  const promocode = allPromocodes[promocodeIndex]

  if (!promocode.isActive || (promocode.maxActivationsCount > 0 && promocode.activationsCount >= promocode.maxActivationsCount)) {
    return 'Промокод не дійсний'
  }

  allPromocodes[promocodeIndex].activationsCount += 1
  localStorage.setItem('promocode', JSON.stringify(allPromocodes))

  return promocode
}
