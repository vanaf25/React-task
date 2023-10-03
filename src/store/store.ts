import {Action, combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";

const rootReducer=combineReducers({
    posts:postsReducer
});
export const store = createStore(rootReducer);
/*
export type BaseThunkType<A extends Action,R=Promise<void> >=ThunkAction<R,AppStateType,unknown,A>
*/
/*
export type inferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
*/
/*
export type inferActionsType<T>=T extends {[key:string]:(...args:any[])=>infer U} ? U:never
*/
export type inferActionsType<T> =T extends {[key:string]:(...args:any[])=>infer U } ? U:never
export   type AppStateType=ReturnType<typeof  rootReducer>;
