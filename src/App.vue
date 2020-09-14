<template>
  <div id="app" class='container'>
    <app-header></app-header>
    <div class="content">
      <app-side-bar/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader'
import AppSideBar from './components/AppSideBar'
export default {
  components: {
    AppHeader,
    AppSideBar 
  }
}
</script> 