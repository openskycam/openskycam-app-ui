<template>
  <div class="d-flex flex-column flex-grow-1 overflow-hidden">
    <div class="position-relative d-flex flex-column flex-grow-1 overflow-hidden">
      <section class="video-stage">
         <div 
          v-if="!isWifiEnabled || !isWifiConnected"
          class="d-flex flex-column align-items-center justify-content-center gap-2 h-100 w-100 text-secondary-emphasis"
          >
          <IBiCameraVideoOff class="fs-1" />
          <p class="small fw-medium mb-0">No signal</p>
        </div>
        <iframe
          v-else
          :src="cameraUrl" 
          class="w-100 h-100"
        ></iframe>
        <div class="video-top-gradient"></div>
        <div class="position-absolute top-0 start-0 end-0 d-flex align-items-start justify-content-between p-3">
          <div class="d-flex align-items-center gap-2"></div>
          <div style="pointer-events: auto;">
            <button type="button" aria-label="Camera connected" class="glass-chip d-inline-flex align-items-center gap-2 px-3 py-1 border-0">
              <span class="position-relative d-flex" style="height: 0.625rem; width: 0.625rem;">
                <IBiCircleFill
                  class="text-success"
                  width="10px"
                  height="10px"
                  :class="{
                    'text-danger': !isWifiEnabled || !isWifiConnected,
                    'text-success': isWifiEnabled && isWifiConnected,
                  }"
                />
              </span>
              <span
                class="small fw-medium"
                :class="{
                  'text-danger': !isWifiEnabled || !isWifiConnected,
                  'text-success': isWifiEnabled && isWifiConnected,
                }"
              >
                {{ isWifiEnabled && isWifiConnected ? 'Connected' : 'Disconnected' }}
              </span>
            </button>
          </div>
        </div>
      </section>
      <nav aria-label="Camera controls" class="d-flex align-items-center justify-content-around px-4 py-4 bg-body-secondary bg-opacity-25">
        <button
          type="button"
          class="btn border-0 d-flex flex-column align-items-center gap-2 p-0"
          :disabled="!isWifiEnabled || !isWifiConnected"
          @click="capturePhoto"
        >
          <div class="icon-tile p-3" style="background-color: var(--bs-secondary-bg);">
            <IBiCamera width="20px" height="20px" />
          </div>
          <span class="text-secondary-emphasis fw-medium" style="font-size: 0.6875rem;">Capture</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { api } from '@/api/client';

const cameraUrl = computed(() => {
  return import.meta.env.VITE_CAMERA_URL;
});

const isWifiEnabled = computed(() => {
  return true;
});

const isWifiConnected = computed(() => {
  return true;
});

const capturePhoto = async () => {
  const data = await api.post('http://192.168.137.139:5000/api/camera/capture');

  console.log(data);
}
</script>