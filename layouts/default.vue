<template>
  <div class="h-screen overflow-hidden">
    <Header />
    <div class="hidden md:block fixed inset-y-0 right-0">
      <Links />
    </div>
    <div class="h-full pt-18 md:pt-20 z-0">
      <div class="h-full overflow-auto p-6">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
