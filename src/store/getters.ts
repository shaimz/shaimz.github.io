import { GetterTree } from "vuex";
import { State } from './state';

export type Getters = {
    statusDefine(state: State): string
}

export const getters: GetterTree<State, State> & Getters = {
    statusDefine:(state) => {
        switch(state.status){
            case 0:
                return 'Banned'
            case 1:
                return 'User'
            case 2:
                return 'Admin'
            default:
                return 'Unregistered'
        }
    }
}