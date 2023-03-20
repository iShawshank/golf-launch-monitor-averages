export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.tour !== 'PGA' && to.params.tour !== 'LPGA') {
    return abortNavigation();
  }
})