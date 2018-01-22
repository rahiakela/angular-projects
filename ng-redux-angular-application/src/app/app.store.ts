import { InjectionToken } from "@angular/core";
import { createStore, Store, compose, StoreEnhancer } from "redux";

import { AppState } from "./app.state";
import { counterReducer } from "./counter.reducer";

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore<AppState>(counterReducer, compose(devtools));
}

export const appStoreProviders = [
    {provide: AppStore, useFactory: createAppStore}
];