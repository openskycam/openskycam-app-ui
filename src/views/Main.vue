<template>
  <div class="d-flex flex-column flex-grow-1 overflow-hidden">
    <div class="d-flex flex-column flex-grow-1 overflow-auto px-4 pb-4 pt-4 gap-4">
      <BCard
        class="border-opacity-50 bg-opacity-25"
        :class="{
          'bg-danger border-danger': !isWifiEnabled || !isWifiConnected,
          'bg-success border-success': isWifiEnabled && isWifiConnected,
        }"
      >
        <div class="d-flex align-items-start justify-content-between">
          <div
            class="icon-tile  bg-opacity-25 p-3"
            :class="{
              'bg-danger text-danger-emphasis': !isWifiEnabled || !isWifiConnected,
              'bg-success text-success-emphasis': isWifiEnabled && isWifiConnected,
            }"
          >
            <IBiWifiOff v-if="!isWifiEnabled || !isWifiConnected" />
            <IBiWifi v-if="isWifiEnabled && isWifiConnected" />
          </div>
          <div>
            <IBiCircleFill 
              class="text-success" 
              width="10px" 
              height="10px"
              :class="{
                'text-danger': !isWifiEnabled || !isWifiConnected,
                'text-success': isWifiEnabled && isWifiConnected,
              }"
            />
          </div>
        </div>
        <div class="mt-4">
          <p class="text-secondary-emphasis mb-1 small">
            <span v-if="!isWifiEnabled">Wi-Fi is disabled</span>
            <span v-else-if="isWifiEnabled && !isWifiConnected">No Wi-Fi connection</span>
            <span v-else>Connected over Wi-Fi</span>
          </p>
          <p class="fs-4 fw-semibold mb-0">OpenSkyCam-AX21</p>
        </div>
      </BCard>
      <div class="row g-3">
        <div class="col-6">
          <div class="border rounded h-100 card">
            <div class="p-3 d-flex flex-column gap-2 card-body">
              <IBiBarChartLineFill class="text-success" width="15px" height="15px" />
              <div>
                <p class="fw-semibold mb-0 small">High</p>
                <p class="text-secondary-emphasis mb-0" style="font-size:0.6875rem">Signal</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="border rounded h-100 card">
            <div class="p-3 d-flex flex-column gap-2 card-body">
              <IBiBatteryFull class="text-success" />
              <div>
                <p class="fw-semibold mb-0 small">82%</p>
                <p class="text-secondary-emphasis mb-0" style="font-size:0.6875rem">Battery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const isWifiEnabled = computed(() => {
  return true;
});

const isWifiConnected = computed(() => {
  return true;
});
</script>