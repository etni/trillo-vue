<template>
    <main class="main-view">
        <!-- <div class="gallery">
            <figure class="gallery__item">
                <img src="../assets/img/hotel-1.jpg" alt="Photo of Hotel 1" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
                <img src="../assets/img/hotel-2.jpg" alt="Photo of Hotel 2" class="gallery__photo">
            </figure>
            <figure class="gallery__item">
                <img src="../assets/img/hotel-3.jpg" alt="Photo of Hotel 3" class="gallery__photo">
            </figure>
        </div> -->
        <div class="tours">
            <h1 class="tours__heading">
                Tours you need to take this summer!
            </h1>

            <section class="destination">
                <h2 class="destination__title">The Maldives</h2>
                <figure class="destination__image">
                    <img src="/destinations/01_the_maldives.jpg" alt="The Maldives" class="destination__photo">
                    <figcaption>Kunfunadhoo Island, Baa Atoll (Soneva Fushi) </figcaption>
                </figure>
            </section>

            <section class="destination">
                <h2 class="destination__title">Singapore</h2>
                <figure class="destination__image">
                    <img src="/destinations/02_singapore.jpg" alt="The Maldives" class="destination__photo">
                    <figcaption>Gardens by the Bay, Singapore </figcaption>
                </figure>
            </section>

            <section class="destination">
                <h2 class="destination__title">Patagonia, Chile</h2>
                <figure class="destination__image">
                    <img src="/destinations/03_patagonia.jpg" alt="The Maldives" class="destination__photo">
                    <figcaption>Torres Del Paine National Park, Patagonia, Chile</figcaption>
                </figure>
            </section>
        </div>
    </main>
</template>
<style lang="scss"> 
    .tours {
        // background-color: #fff;
        // display: flex;
        // flex-direction: column;
        // align-items: center;

        &__heading {

        }

        .destination {
            
            padding: 2rem 5rem;

            &__title {
                font-family: inherit;
                font-size: 2.25rem;
                color: var(--color-primary)
            }

            &__photo {
                width: 100%;
            }
 
            &__image {
                
                transition: all .5s;
                box-shadow: var(--shadow-light);

                &:hover {
                    box-shadow: var(--shadow-dark);
                }

                figcaption {
                    font-family: inherit;
                    font-size: 1.35rem;
                    padding: .2rem 2rem;
                }
            }
        }
    }

</style>
 