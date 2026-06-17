<template>
  <div class="d-flex flex-column flex-grow-1 overflow-hidden">
    <div class="d-flex flex-column flex-grow-1 overflow-hidden">
      <header class="d-flex flex-column gap-3 px-4 pb-2 pt-4">
        <div class="d-flex align-items-baseline justify-content-between">
          <h1 class="fs-3 fw-semibold mb-0">Gallery</h1>
          <span class="small text-secondary-emphasis">6 items</span>
        </div>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-sm rounded-pill px-3 btn-primary">All</button>
          <button type="button" class="btn btn-sm rounded-pill px-3 btn-secondary">Photos</button>
          <button type="button" class="btn btn-sm rounded-pill px-3 btn-secondary">Videos</button>
        </div>
      </header>
      <div class="flex-grow-1 overflow-auto px-4 pb-4 pt-1">
        <div class="row g-3">
          <div class="col-6">
            <figure class="media-tile mb-0">
              <!-- <img alt="Garden"> -->
              <div class="media-tile-overlay"></div>
              <span class="glass-chip position-absolute top-0 start-0 m-2 d-inline-flex align-items-center gap-1 px-2 py-1 fw-medium" style="font-size: 0.625rem;">
                <IBiCamera />
                Photo
              </span>
              <figcaption class="position-absolute bottom-0 start-0 end-0 p-2">
                <p class="d-flex align-items-center gap-1 text-secondary-emphasis mb-0" style="font-size: 0.6875rem;">
                  <IBiClock />
                  Today, 08:14
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="col-6">
            <figure class="media-tile mb-0">
              <!-- <img alt="Driveway"> -->
              <div class="media-tile-overlay"></div>
              <span class="glass-chip position-absolute top-0 start-0 m-2 d-inline-flex align-items-center gap-1 px-2 py-1 fw-medium" style="font-size: 0.625rem;">
                <IBiPlayFill />
                0:42
              </span>
              <span class="position-absolute top-50 start-50 translate-middle">
                <IBiPlayCircle class="d-flex align-items-center justify-content-center rounded-circle" width="50px" height="50px" />
              </span>
              <figcaption class="position-absolute bottom-0 start-0 end-0 p-2">
                <p class="d-flex align-items-center gap-1 text-secondary-emphasis mb-0" style="font-size: 0.6875rem;">
                  <IBiClock />
                  Today, 02:31
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>