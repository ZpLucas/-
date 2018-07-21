import Vue from 'vue'

import {
  RECEIVE_HOMETOP,
  RECEIVE_HOMECAROUSEL,
  RECEIVE_HOMEGOODS,
  RECEIVE_HOMELISTS,
  RECEIVE_HOMEPOPULARS,
  RECEIVE_HOMETIMESHOP,
  RECEIVE_HOMETOPICLIST,
  RECEIVE_HOMECARGO
} from "./mutation_types"

export default {
  [RECEIVE_HOMETOP] (state,{headDates}){
    state.headDates = headDates
  },
  [RECEIVE_HOMECAROUSEL](state,{imgLists}){
    state.imgLists = imgLists
  },
  [RECEIVE_HOMEGOODS](state,{goodsList}){
    state.goodsList = goodsList
  },
  [RECEIVE_HOMELISTS](state,{FirstImages}){
    state.FirstImages = FirstImages
  },
  [RECEIVE_HOMEPOPULARS](state,{PopularItemList}){
    state.PopularItemList = PopularItemList
  },
  [RECEIVE_HOMETIMESHOP](state,{TimeShop}){
    state.TimeShop = TimeShop
  },
  [RECEIVE_HOMETOPICLIST](state,{TopicList}){
    state.TopicList = TopicList
  },
  [RECEIVE_HOMECARGO](state,{cargo}){
    state.cargo = cargo
  }
}
