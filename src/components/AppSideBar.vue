<template>
    <nav class="sidebar">
        <ul class="side-nav">

            <router-link to='/hotel' class='side-nav__item ' tag='li' active-class="side-nav__item--active">
                <a href="#" class="side-nav__link">
                    <svg class="side-nav__icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                    </svg>
                    <span>Hotel</span>
                </a>
            </router-link>

            <router-link to='/flight' class='side-nav__item' tag='li'  active-class="side-nav__item--active">
                <a href="#" class="side-nav__link">
                    <svg class="side-nav__icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-aircraft-take-off"></use>
                    </svg>
                    <span>Flight</span>
                </a>
            </router-link>

            <router-link to='/car-rental' tag='li'  active-class="side-nav__item--active"  class="side-nav__item">
                <a href="#" class="side-nav__link">
                    <svg class="side-nav__icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-key"></use>
                    </svg>
                    <span>Car Rental</span>
                </a>
            </router-link>

            <router-link to='/tours' tag='li'  active-class="side-nav__item--active"  class="side-nav__item">
                <a href="#" class="side-nav__link">
                    <svg class="side-nav__icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-map"></use>
                    </svg>
                    <span>Tours</span>
                </a>
            </router-link>

        </ul>
        <div class="legal">
            &copy; 2020 by trillo. All rights reserved.
        </div>
    </nav>
</template>
<script>
export default {
    data: ()=>({
        links: [

        ]
    })
}
</script>
