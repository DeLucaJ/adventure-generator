import Vue from 'vue'
import Vuex from 'vuex'
import * as Types from "@/types";
import { any } from 'expect';

Vue.use(Vuex)

// These change the state
export const mutations = {
  loadAdventures: function (state: any, adventures: Types.AdventureMeta[]) {
    state.adventures = adventures;
  },
  loadWorlds: function (state: any, worlds: Types.WorldMeta[]) {
    state.worlds = worlds;
  },
  addAdventure: function (state: any, adventure: Types.AdventureMeta[]) {
    state.adventures = [...state.adventures, adventure];
    localStorage.setItem("_adventures_", JSON.stringify(state.adventures));
  },
  addWorld: function (state: any, world: Types.WorldMeta[]) {
    state.adventures = [...state.adventures, world];
    localStorage.setItem("_worlds_", JSON.stringify(state.worlds));
  },
  removeAdventure: function (state: any, adventure: Types.AdventureMeta) {
    state.adventures = state.adventures.filter((a: Types.AdventureMeta) => a.key !== adventure.key);
    localStorage.setItem("_adventures_", JSON.stringify(state.adventures));
  },
  removeWorld: function (state: any, world: Types.WorldMeta) {
    state.worlds = state.worlds.filter((w: Types.WorldMeta) => w.key !== world.key);
    localStorage.setItem("_worlds_", JSON.stringify(state.worlds));
  },
  updateAdventure: function (state: any, adventure: Types.AdventureMeta) {
    state.adventures = state.adventures.map((a: Types.AdventureMeta) => a.key === adventure.key ? adventure : a);
    localStorage.setItem("_adventures_", JSON.stringify(state.adventures));
  },
  updateWorld: function (state: any, world: Types.WorldMeta) {
    state.worlds = state.worlds.map((w: Types.WorldMeta) => w.key === world.key ? world : w);
    localStorage.setItem("_worlds_", JSON.stringify(state.worlds));
  },
  setCurrentAdventure: function (state: any, adventure: Types.Adventure) {
    state.currentAdventure = adventure;
  },
  setCurrentWorld: function (state: any, world: Types.World) {
    state.currentWorld = world;
  },
  setEditing: function (state: any, editing: Types.Dated) {
    state.editing = editing;
  },
  setPreview: function (state: any, preview: Types.Element) {
    state.preview = preview;
  },
  clear: function (state: any) {
    state.adventures = [];
    state.worlds = [];
    state.currentAdventure = undefined;
    state.currentWorld = undefined;
    state.editing = undefined;
    state.preview = undefined;
  }
}

// These access the information in store/database and then commit them to state
// probably need some validation for local storage
export const actions = {
  loadAdventures: function ({ commit }: any): Types.AdventureMeta[] {
    const adventures = JSON.parse(localStorage.getItem("_adventures_") as string) as Types.AdventureMeta[];
    commit("loadAdventures", adventures);
    return adventures
  },
  loadWorlds: function ({ commit }: any): Types.WorldMeta[] {
    const worlds = JSON.parse(localStorage.getItem("_worlds_") as string) as Types.WorldMeta[];
    commit("loadWorlds", worlds);
    return worlds;
  },
  loadAdventure: function ({ commit }: any, key: string) {
    const adventure = JSON.parse(localStorage.get(key) as string) as Types.Adventure;
    commit("setCurrentAdventure", adventure);
  },
  loadWorld: function ({ commit }: any, key: string) {
    const world = JSON.parse(localStorage.get(key) as string) as Types.World;
    commit("setCurrentWorld", world);
  },
  addAdventure: function ({ commit }: any, adventure: Types.Adventure) {
    localStorage.setItem(adventure.key, JSON.stringify(adventure));
    commit("addAdventure", adventure.meta);
  },
  addWorld: function ({ commit }: any, world: Types.World) {
    localStorage.setItem(world.key, JSON.stringify(world));
    commit("addWorld", world.meta);
  },
  removeAdventure: function ({ commit }: any, adventure: Types.Adventure) {
    localStorage.removeItem(adventure.key);
    commit("removeAdventure", adventure.meta);
  },
  removeWorld: function ({ commit }: any, world: Types.World) {
    localStorage.removeItem(world.key);
    commit("removeWorld", world.meta);
  },
  updateAdventure: function ({ commit }: any, adventure: Types.Adventure) {
    localStorage.setItem(adventure.key, JSON.stringify(adventure));
    commit("updateAdventure", adventure.meta);
  },
  updateWorld: function ({ commit }: any, world: Types.World) {
    localStorage.setItem(world.key, JSON.stringify(world));
    commit("updateWorld", world.meta);
  },
  setEditing: function ({ commit }: any, target: Types.Dated) {
    commit("setEditing", target);
  },
  setPreview: function ({ commit }: any, target: Types.Dated) {
    commit("setPreview", target);
  },
  clear: function ({ commit }: any) {
    commit("clear");
  },
  eraseStorage: function({ commit }: any) {
    localStorage.clear();
    commit("clear");
  }
}

export default new Vuex.Store({
  state: {
    adventures: [], // AdventureMeta[]
    worlds: [], // WorldMeta[]
    currentWorld: undefined,
    currentAdventure: undefined,
    editing: undefined,
    preview: undefined
  },
  mutations,
  actions,
  getters: {
  },
  modules: {
  }
})

