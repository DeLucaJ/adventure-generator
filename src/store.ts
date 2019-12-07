import Vue from 'vue'
import Vuex from 'vuex'
import * as Types from "@/types";
import { any } from 'expect';

Vue.use(Vuex)

function grab(key: string): any {
  // console.log(`Grabbing item @${key}`)
  let obj = JSON.parse(localStorage.getItem(key) as string)
  // console.log(obj);
  return obj;
}

function put(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
// These change the state
export const mutations = {
  adventuresLoaded: function (state: any, adventures: Types.AdventureMeta[]) {
    console.log(`Adventures Loaded: ${adventures.length}`)
    state.adventures = adventures;
  },
  worldsLoaded: function (state: any, worlds: Types.WorldMeta[]) {
    console.log(`Worlds Loaded: ${worlds.length}`)
    state.worlds = worlds;
  },
  adventureAdded: function (state: any, adventure: Types.AdventureMeta) {
    console.log(`Adventure Added: ${adventure.title}`)
    state.adventures = [...state.adventures, adventure];
    put("_adventures_", state.adventures);
  },
  worldAdded: function (state: any, world: Types.WorldMeta) {
    console.log(`World Added: ${world.title}`);
    state.worlds = [...state.worlds, world];
    put("_worlds_", state.worlds);
  },
  adventureRemoved: function (state: any, adventure: Types.AdventureMeta) {
    console.log(`Adventure Removed: ${adventure.title}`);
    state.adventures = state.adventures.filter((a: Types.AdventureMeta) => a.key !== adventure.key);
    if (state.currentAdventure.title === adventure.title) {
      state.currentAdventure = undefined;
    }
    put("_adventures_", state.adventures);
  },
  worldRemoved: function (state: any, world: Types.WorldMeta) {
    console.log(`World Removed: ${world.title}`);
    state.worlds = state.worlds.filter((w: Types.WorldMeta) => w.key !== world.key);
    if (state.currentWorld.title === world.title) {
      state.currentWorld = undefined;
    }
    put("_worlds_", state.worlds);
  },
  adventureUpdated: function (state: any, adventure: Types.AdventureMeta) {
    console.log(`Adventure Updated: ${adventure.title}`);
    state.adventures = state.adventures.map((a: Types.AdventureMeta) => a.key === adventure.key ? adventure : a);
    put("_adventures_", state.adventures);
  },
  worldUpdated: function (state: any, world: Types.WorldMeta) {
    console.log(`World Removed: ${world.title}`);
    state.worlds = state.worlds.map((w: Types.WorldMeta) => w.key === world.key ? world : w);
    put("_worlds_", state.worlds);
  },
  currentAdventureSet: function (state: any, adventure: Types.Adventure) {
    console.log(`Current Adventure: ${adventure.title}, ${adventure.type}`);
    state.currentAdventure = adventure;
  },
  currentWorldSet: function (state: any, world: Types.World) {
    console.log(`Current World: ${world.title}, ${world.type}`);
    state.currentWorld = world;
  },
  viewingSet: function (state: any, target: Types.Element) {
    state.viewing = target;
  },
  editingSet: function (state: any, target: Types.Element) {
    state.editing = target;
  },
  clear: function (state: any) {
    state.adventures = [];
    state.worlds = [];
    state.currentAdventure = undefined;
    state.currentWorld = undefined;
    state.target = undefined;
  }
}

// These access the information in store/database and then commit them to state
// probably need some validation for local storage
export const actions = {
  /* loadAdvGenMeta: function ({ commit }: any) {
    console.log("Loading Adventre Generator Meta");
    let 
  },
  loadWorldGenMeta: function ({ commit }: any){

  }, */
  loadAdventures: function ({ commit }: any) {
    console.log("Loading Adventures")
    let adventures: Types.AdventureMeta[] = grab("_adventures_");
    if (adventures === null){
      put("_adventures_", []);
      adventures = []
    }
    commit("adventuresLoaded", adventures);
  },
  loadWorlds: function ({ commit }: any) {
    console.log("Loading All Worlds");
    let worlds: Types.WorldMeta[] = grab("_worlds_");
    if(worlds === null) {
      put("_worlds_", []);
      worlds = [];
    }
    commit("worldsLoaded", worlds);
  },
  loadAdventure: function ({ commit }: any, key: string) {
    console.log(`Loading Adventure: @${key}`);
    const adventure: Types.Adventure = grab(key);
    commit("currentAdventureSet", adventure);
  },
  loadWorld: function ({ commit }: any, key: string) {
    console.log(`Loading World: @${key}`);
    const world: Types.World = grab(key);
    commit("currentWorldSet", world);
  },
  addAdventure: function ({ commit }: any, adventure: Types.Adventure) {
    console.log(`Add Adventure: ${adventure.title}, ${adventure.key}`);
    put(adventure.key, adventure);
    commit("adventureAdded", adventure.meta);
  },
  addWorld: function ({ commit }: any, world: Types.World) {
    console.log(`Add World: ${world.title}, ${world.key}`);
    put(world.key, world);
    commit("worldAdded", world.meta);
  },
  removeAdventure: function ({ commit }: any, adventure: Types.AdventureMeta) {
    console.log(`Remove Adventure: ${adventure.title}, ${adventure.key}`);
    localStorage.removeItem(adventure.key);
    commit("adventureRemoved", adventure);
  },
  removeWorld: function ({ commit }: any, world: Types.WorldMeta) {
    console.log(`Remove World: ${world.title}, ${world.key}`);
    localStorage.removeItem(world.key);
    commit("worldRemoved", world);
  },
  updateAdventure: function ({ commit }: any, adventure: Types.Adventure) {
    console.log(`Update Adventure: ${adventure.title}`);
    localStorage.setItem(adventure.key, JSON.stringify(adventure));
    commit("adventureUpdated", adventure.meta);
    // update current adventure?
  },
  updateWorld: function ({ commit }: any, world: Types.World) {
    console.log(`Update World: ${world.title}`);
    put(world.key, world);
    commit("worldUpdated", world.meta);
  },
  setViewing: function ({ commit }: any, target: Types.Element) {
    console.log(`Set Viewing: ${target}`);
    commit("viewingSet", target);
  },
  setEditing: function ({ commit }: any, target: Types.Element) {
    console.log(`Set Editing: ${target}`);
    commit("editingSet", target);
  },
  clear: function ({ commit }: any) {
    console.log("Clear State");
    commit("clear");
  },
  eraseStorage: function({ commit }: any) {
    console.log("Erase Storage");
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
    viewing: undefined,
    editing: undefined,
  },
  mutations,
  actions,
  getters: {
  },
  modules: {
  }
})

