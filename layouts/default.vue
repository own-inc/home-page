<template>
  <div class="h-screen overflow-hidden">
    <Header />
    <div class="hidden md:block fixed inset-y-0 right-0">
      <Links />
    </div>
    <div class="pt-18 h-full overflow-auto p-6">
      <Nuxt />
    </div>
  </div>
</template>
