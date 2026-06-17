<template>
  <div class="d-flex flex-column flex-grow-1 overflow-hidden">
    <div class="d-flex flex-column flex-grow-1 overflow-auto px-4 pb-4 pt-4 gap-4">
      <BCard style="background-color: rgba(43, 182, 115, 0.12) !important; border-color: rgba(43, 182, 115, 0.35) !important;">
        <div class="d-flex align-items-start justify-content-between">
          <div class="icon-tile text-success p-3" style="background-color:rgba(43,182,115,0.2)">
            <IBiWifi />
          </div>
          <div>
            <IBiCircleFill class="text-success" width="10px" height="10px" />
          </div>
        </div>
        <div class="mt-4"><p class="text-secondary-emphasis mb-1 small">Connected over Wi-Fi</p>
          <p class="fs-4 fw-semibold mb-0">OpenSkyCam-AX21</p>
        </div>
        <button type="button" class="mt-4 rounded-pill d-inline-flex align-items-center gap-2 btn btn-secondary">
          <IBiArrowRepeat />
          Disconnect
        </button>
      </BCard>
      <div class="row g-3">
        <div class="col-6">
          <div class="border rounded h-100 card">
            <div class="p-3 d-flex flex-column gap-2 card-body">
              <IBiBarChartLineFill class="text-primary" width="15px" height="15px" />
              <div>
                <p class="fw-semibold mb-0 small">Strong</p>
                <p class="text-secondary-emphasis mb-0" style="font-size:0.6875rem">Signal</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="border rounded h-100 card">
            <div class="p-3 d-flex flex-column gap-2 card-body">
              <IBiBattery class="text-primary" />
              <div>
                <p class="fw-semibold mb-0 small">82%</p>
                <p class="text-secondary-emphasis mb-0" style="font-size:0.6875rem">Battery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-6">
          <button type="button" class="action-tile w-100 btn btn-primary d-flex p-3">
            <IBiCameraVideo width="30px" height="30px" />
            <span>Camera</span>
          </button>
        </div>
        <div class="col-6">
          <button type="button" class="action-tile w-100 btn btn-outline-primary d-flex p-3">
            <IBiImages width="30px" height="30px" />
            <span>Gallery</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>