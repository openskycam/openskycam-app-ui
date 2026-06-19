<template>
  <div class="d-flex flex-column flex-grow-1 overflow-hidden">
    <div class="d-flex flex-column flex-grow-1 overflow-hidden">
      <header class="d-flex flex-column gap-3 px-4 pb-2 pt-4">
        <div class="d-flex align-items-baseline justify-content-between">
          <h1 class="fs-3 fw-semibold mb-0">Gallery</h1>
          <span class="small text-secondary-emphasis">6 items</span>
        </div>
      </header>
      <div class="flex-grow-1 overflow-auto px-4 pb-4 pt-1 mt-3">
        <div class="row g-3">
          <div class="col-6">
            <figure class="media-tile mb-0">
              <!-- <img alt="Garden"> -->
              <div class="media-tile-overlay"></div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>