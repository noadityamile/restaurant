<template>
    <div class="">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/">
                    {{ ('BEINMEDIATEST') }}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ ('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link active-class="text-red" class="nav-link" to="/menu">Menu</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="text-red" class="nav-link" to="/items">Items</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="text-red" class="nav-link" to="/categories">Categories</router-link>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- <li class="nav-item">
                            <router-link class="nav-link" to="/login">{{ ('Login') }}</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/register">{{ ('Register') }}</router-link>
                        </li> -->

                        <!-- <li class="nav-item dropdown">
                            <router-link id="navbarDropdown" class="nav-link dropdown-toggle" to="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </router-link>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ ('Logout') }}
                                </router-link>

                                <form id="logout-form" action="/" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li> -->

                    </ul>
                </div>
            </div>
        </nav>

        <header class="container my-4">
            <div class="card">
                <h2 class="card-header">{{ currentPageTitle }}</h2>
            </div>

        </header>

        <!-- Page Content -->
        <main>
            <div class="container">
                <router-view></router-view>
            </div>

        </main>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPageTitle = computed(() => route.meta.title)
</script>
