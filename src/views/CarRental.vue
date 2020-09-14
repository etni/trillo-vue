<template>
    <main class="main-view">
        <div class="gallery">
            <figure class="gallery__item">
                <img src="../assets/img/hotel-3.jpg" alt="Photo of Hotel 1" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
                <img src="../assets/img/hotel-1.jpg" alt="Photo of Hotel 2" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
                <img src="../assets/img/hotel-2.jpg" alt="Photo of Hotel 3" class="gallery__photo">
            </figure>
        </div>
        <div class="overview">
            <h1 class="overview__heading">
                Car Rental
            </h1>
            <star-rating :rating='3' />
            <div class="overview__location">
                <svg class="overview__icon-location">
                    <use xlink:href="../assets/img/sprite.svg#icon-location-pin"></use>
                </svg>
                <button class="btn-inline">Albufeira, Portugal</button>
            </div>
            <div class="overview__rating">
                <div class="overview__rating-average">8.6</div>
                <div class="overview__rating-count">429 votes</div>
            </div>
        </div>
    </main>
</template>
<script>
import StarRating from '../components/StarRating'
export default {
    components: {
        StarRating
    }
    
}
</script>
<style lang="scss">
.main-view {
    min-height: 70vh;
}
</style>