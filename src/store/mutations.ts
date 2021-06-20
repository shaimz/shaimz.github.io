import { MutationTree } from "vuex";
import { MutationTypes } from "./types/mutationTypes.interface";
import { State } from "./state";

export type Mutations<S = State> = {
    [MutationTypes.SET_STATUS](state: S,payload: number): void,
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_STATUS](state,payload: number){
        state.status = payload;
    },
}