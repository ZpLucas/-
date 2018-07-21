import {
  RECEIVE_HOMETOP,
  RECEIVE_HOMECAROUSEL,
  RECEIVE_HOMEGOODS,
  RECEIVE_HOMELISTS,
  RECEIVE_HOMEPOPULARS,
  RECEIVE_HOMETIMESHOP,
  RECEIVE_HOMETOPICLIST,
  RECEIVE_HOMECARGO
}from './mutation_types'
import {
  reqHeadDateList,
  reqFocusList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqTimeShop,
  reqTopicList,
  reqCateList
}from '../api'

export default {
  async getHeadDateList ({commit}){
    const result = await  reqHeadDateList()
    if(result.code ===0){
      const headDates = result.data
      commit(RECEIVE_HOMETOP,{headDates})
    }
  },
  async getHeadImageList({commit},callBack){
    const result = await  reqFocusList()
    if (result.code ===0){
      const imgLists = result.data
      commit(RECEIVE_HOMECAROUSEL,{imgLists})
    }
    callBack && callBack()
  },
  async getHeadGoodsList({commit}){
    const result = await reqTagList()
    if(result.code === 0){
      const goodsList = result.data
      commit(RECEIVE_HOMEGOODS,{goodsList})
    }
  },
  async getNewFirstImg({commit},callBack){
    const result = await reqNewItemList()
    if(result.code === 0){
      const FirstImages = result.data
      commit(RECEIVE_HOMELISTS,{FirstImages})
    }
    callBack  && callBack()
  },
  async getPopularItemList({commit},callBack){
    const result = await reqPopularItemList()
    if(result.code === 0){
      const PopularItemList = result.data
      commit(RECEIVE_HOMEPOPULARS,{PopularItemList})
    }
    callBack  && callBack()
  },
  async getTimeShops({commit}){
    const result = await reqTimeShop()
    if(result.code === 0){
      const TimeShop =result.data
      commit(RECEIVE_HOMETIMESHOP,{TimeShop})
    }
  },
  async getTopicList({commit},callBack){
    const result = await reqTopicList()
    if(result.code === 0){
      const TopicList =result.data
      commit(RECEIVE_HOMETOPICLIST,{TopicList})
      callBack && callBack()
    }
  },
  async getShops({commit}){
    const result = await reqCateList()
    if(result.code === 0){
      const cargo =result.data
      commit(RECEIVE_HOMECARGO,{cargo})
    }
  }
}
