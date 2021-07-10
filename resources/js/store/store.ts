import {
    createStore,
    Store,
    CommitOptions,
    DispatchOptions,
    createLogger
} from 'vuex';
import { State, state } from './state';

export const store = createStore<State>({
    plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
    state,
})
export function useStore() {
    return store as Store<State>
}
