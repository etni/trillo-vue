<template>
        <header class="header">
            <img src="../assets/img/logo.png" alt="trillo logo" class="logo">
            <form action="#" class="search">
                <input type="text" class="search__input" placeholder="Search Hotels">
                <button class="search__button">
                    <svg class="search__icon">
                        <use xlink:href="/img/sprite.svg#icon-magnifying-glass"></use>
                    </svg>
                </button>
            </form>
            <nav class="user-nav">
                <div class="user-nav__icon-box">
                    <svg class="user-nav__icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-bookmark"></use>
                    </svg>
                    <span class="user-nav__notification">7</span>
                </div>
                <div class="user-nav__icon-box">
                    <svg class="user-nav__icon">
                        <use xlink:href="../assets/img/sprite.svg#icon-chat"></use>
                    </svg>
                    <span class="user-nav__notification">13</span>
                </div>
                <div class="user-nav__user">
                    <img xxxsrc="../assets/img/user.jpg" :src="userIcon"  alt="" class="user-nav__user-photo">
                    <span class="user-nav__user-name">{{user}}</span>
                </div>
            </nav>
        </header>
</template>
<script>
export default {
    data: ()=>({
        user: 'Etni',
        userIcon: '/users/etni.jpg'
    })
}
</script>