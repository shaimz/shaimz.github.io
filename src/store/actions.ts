import { ActionContext,ActionTree } from "vuex";
import { ActionTypes } from "./types/actionTypes.interface";
import { MutationTypes } from "./types/mutationTypes.interface";
import { Mutations } from './mutations';
import { State } from './state';

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key:K,
        payload:Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions{
    [ActionTypes.SET_STATUS](
        {commit}: AugmentedActionContext,
        payload: number,
    ): Promise<number | void>
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.SET_STATUS]({commit},payload){
        return new Promise((resolve)=>{
            commit(MutationTypes.SET_STATUS, payload);
            resolve(payload)
        })
    }
}