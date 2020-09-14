<template>
    <main class="hotel-view">
        <div class="gallery">
            <figure class="gallery__item">
                <img src="../assets/img/hotel-1.jpg" alt="Photo of Hotel 1" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
                <img src="../assets/img/hotel-2.jpg" alt="Photo of Hotel 2" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
                <img src="../assets/img/hotel-3.jpg" alt="Photo of Hotel 3" class="gallery__photo">
            </figure>
        </div>

        <div class="overview">
            <h1 class="overview__heading">
                Hotel Las Palmas
            </h1>
            <star-rating :rating='4' />
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


        <div class="detail">
            <div class="description">
                <p class="paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni corporis doloribus asperiores vel rem quis officiis mollitia quidem deserunt ipsam, libero dolorum iure velit iste esse, labore temporibus. Quaerat, veritatis.
                </p>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint laboriosam ipsam accusantium incidunt doloribus quae debitis doloremque, a earum pariatur nihil suscipit voluptates, dolore ut rerum sunt reprehenderit fugiat!
                </p>
                <ul class="list">
                    
                    <li class="list__item">Close to the beach!</li>
                    <li class="list__item">Breakfast included</li>
                    <li class="list__item">Free airport shuttle</li>
                    <li class="list__item">Free whifi in all rooms</li>
                    <li class="list__item">Air conditioning and heating</li>
                    <li class="list__item">Pets allowed</li>
                    <li class="list__item">We speak all languages</li>
                    <li class="list__item">Perfect for families</li>
                </ul>

                <div class="recommend">
                    <p class="recommend__count">
                        Lucy and 3 other friends recommend this hotel.
                    </p>
                    <div class="recommend__friends">
                        <img src="../assets/img/user-3.jpg" alt="Friend 1" class="recommend__photo">
                        <img src="../assets/img/user-4.jpg" alt="Friend 2" class="recommend__photo">
                        <img src="../assets/img/user-5.jpg" alt="Friend 3" class="recommend__photo">
                        <img src="../assets/img/user-6.jpg" alt="Friend 4" class="recommend__photo">

                    </div>
                </div>
            </div>

            <div class="user-reviews">
                <figure class="review">
                    <blockquote class='review__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolorum ipsum sit voluptatibus quis vitae incidunt pariatur.
                    </blockquote>
                    <figcaption class="review__user">
                        <img src="../assets/img/user-1.jpg" alt="User 1" class="review__photo">
                        <div class="review__user-box">
                            <p class="review__user-name">Nick Smith</p>
                            <p class="review__user-date">Feb 23, 2020</p>
                        </div>
                        <div class="review__rating">7.8</div>
                    </figcaption>
                </figure>

                <figure class="review">
                    <blockquote class='review__text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae, possimus obcaecati assumenda minima fugit pariatur molestiae.
                    </blockquote>
                    <figcaption class="review__user">
                        <img src="../assets/img/user-2.jpg" alt="User 2" class="review__photo">
                        <div class="review__user-box">
                            <p class="review__user-name">Mary Thomas</p>
                            <p class="review__user-date">May 15, 2020</p>
                        </div>
                        <div class="review__rating">9.3</div>
                    </figcaption>
                </figure>


                <button class="btn-inline">Show All <span>&rarr;</span></button>
            </div>

        </div>

        <div class="cta">
            <h2 class="cta__book-now">
                Good News! We have 4 free rooms for your selected dates!
            </h2>
            <button class="btn">
                <span class="btn__visible">
                    Book now
                </span>
                <span class="btn__hidden">
                    Only 4 rooms left
                </span>
            </button>
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