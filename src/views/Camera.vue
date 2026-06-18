<template>
  <div class="d-flex flex-column flex-grow-1 overflow-hidden">
    <div class="position-relative d-flex flex-column flex-grow-1 overflow-hidden">
      <section class="video-stage">
        <!-- TODO -->
        <iframe 
          src="http://192.168.137.139:8889/cam?controls=false" 
          class="w-100 h-100"
        ></iframe>
        <div class="video-top-gradient"></div>
        <div class="position-absolute top-0 start-0 end-0 d-flex align-items-start justify-content-between p-3">
          <div class="d-flex align-items-center gap-2">
            <button type="button" aria-label="Camera connected" class="glass-chip d-inline-flex align-items-center gap-2 px-3 py-1 border-0">
              <span class="small fw-medium">1280x720 · 30fps</span>
            </button>
          </div>
          <div style="pointer-events: auto;">
            <button type="button" aria-label="Camera connected" class="glass-chip d-inline-flex align-items-center gap-2 px-3 py-1 border-0">
              <span class="position-relative d-flex" style="height: 0.625rem; width: 0.625rem;">
                <IBiCircleFill class="text-success" width="10px" height="10px" />
              </span>
              <span class="small fw-medium" style="color: var(--bs-success);">Connected</span>
            </button>
          </div>
        </div>
        <button type="button" aria-label="Pause stream" class="play-overlay">
          <span class="play-overlay-circle is-hidden">
            <IBiPauseCircle width="80px" height="80px" />
          </span>
        </button>
      </section>
      <nav aria-label="Camera controls" class="d-flex align-items-center justify-content-around px-4 py-4" style="background: rgba(28, 33, 40, 0.6); backdrop-filter: blur(12px);">
        <button type="button" class="btn border-0 d-flex flex-column align-items-center gap-2 p-0">
          <div class="icon-tile p-3" style="background-color: var(--bs-secondary-bg);">
            <IBiCamera width="20px" height="20px" />
          </div>
          <span class="text-secondary-emphasis fw-medium" style="font-size: 0.6875rem;">Capture</span>
        </button>
        <button type="button" class="btn border-0 d-flex flex-column align-items-center gap-2 p-0">
          <span class="icon-tile rounded-circle border-2" style="height: 4rem; width: 4rem; border: 2px solid var(--bs-border-color); background-color: rgba(35, 42, 51, 0.6);">
            <IBiCircleFill width="30px" height="30px" class="text-danger" />
          </span>
          <span class="text-secondary-emphasis fw-medium" style="font-size: 0.6875rem;">Record</span>
        </button>
        <button type="button" class="btn border-0 d-flex flex-column align-items-center gap-2 p-0">
          <div class="icon-tile p-3" style="background-color: var(--bs-secondary-bg);">
            <IBiGearWide width="20px" height="20px" />
          </div>
          <span class="text-secondary-emphasis fw-medium" style="font-size: 0.6875rem;">Settings</span>
        </button>
      </nav>
    </div>

    <div role="dialog" aria-modal="true" class="d-none mx-auto rounded-top-4 offcanvas offcanvas-bottom show" tabindex="-1" aria-label="Camera settings" style="max-width: 448px; height: auto; visibility: visible;">
      <div class="pb-2 offcanvas-header">
        <div class="fw-semibold offcanvas-title h5">Settings</div>
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
      <div class="pt-1 pb-5 offcanvas-body">
        <div class="d-flex flex-column gap-4">
          <div>
            <div class="d-flex align-items-center gap-2 mb-2 small fw-medium text-secondary-emphasis">
              <span class="text-primary d-inline-flex">
                <IBiDisplay />
              </span>
              Resolution
            </div>
            <div class="segmented">
              <button type="button" aria-pressed="false" class="seg-btn">640x480</button>
              <button type="button" aria-pressed="true" class="seg-btn active">1280x720</button>
              <button type="button" aria-pressed="false" class="seg-btn">1920x1080</button>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-center gap-2 mb-2 small fw-medium text-secondary-emphasis">
              <span class="text-primary d-inline-flex">
                <IBiSpeedometer />
              </span>
              Framerate
            </div>
            <div class="segmented">
              <button type="button" aria-pressed="false" class="seg-btn">15 fps</button>
              <button type="button" aria-pressed="true" class="seg-btn active">30 fps</button>
              <button type="button" aria-pressed="false" class="seg-btn">60 fps</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>