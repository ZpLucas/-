import ajax from './ajax'

export const reqHeadDateList = () => ajax('/headCateList')
export const reqFocusList =() => ajax('/focusList')
export const reqTagList =() => ajax('/tagList')
export const reqNewItemList =() => ajax('/newItemList')
export const reqPopularItemList =() => ajax('/popularItemList')
export const reqTimeShop =() => ajax('/flashSaleIndexVO')
export const reqTopicList =() => ajax('/topicList')
export const reqCateList =() => ajax('/cateList')

