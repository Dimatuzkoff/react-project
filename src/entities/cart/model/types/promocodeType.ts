export type Promocode = {
  id: number
  code: string
  discount: number
  activationsCount: number
  maxActivationsCount: number
  type: 'ALL' | 'CATEGORY'
  categories: string[]
  isActive: boolean
}