<template>
  <BApp>
    <div class="app-frame">
      <RouterView />
      <nav aria-label="Main navigation" class="bottom-nav">
        <router-link to="/" class="text-decoration-none">
          <button type="button" aria-current="page" class="nav-btn active">
            <span class="nav-icon">
              <IBiHouseDoor />
            </span>
            <span class="small fw-medium" style="font-size:0.6875rem">Home</span>
          </button>
        </router-link>
        <router-link to="/camera" class="text-decoration-none">
          <button type="button" class="nav-btn">
            <span class="nav-icon">
              <IBiCameraVideo />
            </span>
            <span class="small fw-medium" style="font-size:0.6875rem">Camera</span>
          </button>
        </router-link>
        <router-link to="/gallery" class="text-decoration-none">
          <button type="button" class="nav-btn">
            <span class="nav-icon">
              <IBiImages />
            </span>
            <span class="small fw-medium" style="font-size:0.6875rem">Gallery</span>
          </button>
        </router-link>
      </nav>
    </div>
  </BApp>
</template>

<script setup>
import { BApp } from 'bootstrap-vue-next';
</script>

<style>
.app-frame {
  background-color: var(--bs-body-bg);
  flex-direction: column;
  max-width: 500px;
  height: 100dvh;
  margin-inline: auto;
  display: flex;
  overflow: hidden;
}

.bottom-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(28, 33, 40, 0.85);
  backdrop-filter: blur(12px);
  padding: 0.5rem 1rem;
}

.bottom-nav .nav-btn {
  flex: 1;
  border: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0;
  color: var(--bs-gray-500);
}

.bottom-nav .nav-btn .nav-icon {
  display: flex;
  height: 2.25rem;
  width: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.bottom-nav .nav-btn.active {
  color: var(--bs-primary);
}

.bottom-nav .nav-btn.active .nav-icon {
  background: rgba(47, 128, 237, 0.15);
}

/****************************/
body {
  font-family: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
}

.font-mono {
  font-family: var(--font-geist-mono), ui-monospace, monospace;
}

/* Primary button — blue accent */
.btn-primary {
  --bs-btn-bg: #2f80ed;
  --bs-btn-border-color: #2f80ed;
  --bs-btn-hover-bg: #2b76d8;
  --bs-btn-hover-border-color: #2b76d8;
  --bs-btn-active-bg: #2469bf;
  --bs-btn-active-border-color: #2469bf;
  --bs-btn-disabled-bg: #2f80ed;
  --bs-btn-disabled-border-color: #2f80ed;
  --bs-btn-color: #fff;
  --bs-btn-hover-color: #fff;
  --bs-btn-active-color: #fff;
  --bs-btn-disabled-color: #fff;
}

/* Live video stage */
.video-stage {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #000;
}

.video-stage img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.video-stage img.is-paused {
  transform: scale(1.05);
  opacity: 0.4;
  filter: blur(4px) grayscale(1);
}

.video-top-gradient {
  position: absolute;
  inset-inline: 0;
  top: 0;
  height: 7rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  pointer-events: none;
}

/* Center play/pause button */
.play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
}

.play-overlay-circle {
  display: flex;
  height: 5rem;
  width: 5rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.play-overlay:hover .play-overlay-circle {
  transform: scale(1.05);
}
.play-overlay:active .play-overlay-circle {
  transform: scale(0.95);
}
.play-overlay-circle.is-hidden {
  opacity: 0;
}
.play-overlay:hover .play-overlay-circle.is-hidden {
  opacity: 1;
}

/* Glass chips on the video */
.glass-chip {
  border-radius: 999px;
  background: rgba(28, 33, 40, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Connection hero card */
.hero-connected {
  border-color: rgba(43, 182, 115, 0.35) !important;
  background-color: rgba(43, 182, 115, 0.12) !important;
}

.icon-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}

/* Segmented control (settings + gallery filters) */
.segmented {
  display: flex;
  gap: 0.5rem;
  background: rgba(35, 42, 51, 0.6);
  border-radius: 1rem;
  padding: 0.35rem;
}

.segmented .seg-btn {
  flex: 1;
  border: 0;
  border-radius: 0.75rem;
  padding: 0.6rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: transparent;
  color: var(--bs-secondary-color);
  transition: all 0.2s ease;
}

.segmented .seg-btn.active {
  background: var(--bs-primary);
  color: #fff;
}

/* Gallery tiles */
.media-tile {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid var(--bs-border-color);
  background: var(--bs-card-bg);
}

.media-tile img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.media-tile-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 24, 31, 0.9), rgba(20, 24, 31, 0.1) 50%, transparent);
}

/* Big action buttons on home */
.action-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  border: 1px solid var(--bs-border-color);
}

/* Helpers */
.text-secondary-emphasis {
  color: var(--bs-secondary-color) !important;
}

.cursor-pointer {
  cursor: pointer;
}

.rounded-4 {
  border-radius: 1.25rem !important;
}
.rounded-5 {
  border-radius: 1.75rem !important;
}

/* Animations */
@keyframes pi-ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
.pi-ping {
  position: absolute;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: 999px;
  animation: pi-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pi-spin {
  to {
    transform: rotate(360deg);
  }
}
.pi-spin {
  animation: pi-spin 1s linear infinite;
}

@keyframes pi-pulse {
  50% {
    opacity: 0.4;
  }
}
.pi-pulse {
  animation: pi-pulse 1.5s ease-in-out infinite;
}

</style>