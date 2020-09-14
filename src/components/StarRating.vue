<template>
    <div class="overview__stars">
        <svg :class="item.star" v-for='item in stars' :key="item.id">
            <use xlink:href="../assets/img/sprite.svg#icon-star"></use>
        </svg>
    </div>
</template>
<script>
export default {
    computed: {
        stars() {
            var rating = this.rating ?? 5 
            return [...Array(5).keys()].map( x => ({ id: x,  star:   x < rating ? 'overview__icon-star' : 'overview__icon-star-default' }))
        }
    },
    props: ["rating"]
}
</script>