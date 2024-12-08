<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const showStatsWindow = ref(true);
const showDetailsWindow = ref(true);
</script>

<template>
  <div class="h-full">
    <div class="log_window flex flex-row p-2">
      <div class="flex-auto flex-grow">
        <Panel class="h-full w-full"> Logs </Panel>
      </div>
      <aside
        :class="[
          'stats_window_shown',
          showStatsWindow ? 'stats_window_shown' : 'stats_window_hidden',
        ]"
      >
        <div class="h-full m-2" v-if="showStatsWindow">
          Stats

          <Button @click="showStatsWindow = false">Toggle</Button>
        </div>
      </aside>
    </div>
    <div class="px-2">
      <div
        class="detail_window"
        :class="[
          'detail_window_shown',
          showDetailsWindow ? 'detail_window_shown' : 'detail_window_hidden',
        ]"
      >
        Details
        <Button @click="showDetailsWindow = false">Toggle</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.log_window {
  height: calc(100vh - 308px);
}

.detail_window_shown {
  height: 300px;
}

.detail_window_hidden {
  height: 0px;
}

.stats_window_shown {
  width: 300px;
}
.stats_window_hidden {
  width: 0px;
}
</style>
