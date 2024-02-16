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
                        <li class="nav-item">
                            <router-link active-class="text-red" class="nav-link" to="/discounts">Discounts</router-link>
                        </li>
                    </ul>

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="submitLogout">{{ ('Logout') }}</a>
                        </li>
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
import useAuth from '../composables/auth';

const route = useRoute()

const currentPageTitle = computed(() => route.meta.title)

const { submitLogout } = useAuth()
</script>
