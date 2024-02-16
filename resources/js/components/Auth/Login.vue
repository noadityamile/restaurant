<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                {{ ('BEINMEDIATEST') }}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ ('Login') }}</a>
                    </li>

                    <!-- <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">{{ ('Register') }}</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card px-4 py-4">
                    <form @submit.prevent="submitLogin" class="container">
                        <!-- Email -->
                        <base-input v-model="loginForm.email" label="Email" type="text" :errors="validationErrors?.email" />

                        <!-- Password -->
                        <base-input v-model="loginForm.password" label="Password" type="password"
                            :errors="validationErrors?.password" />


                        <!-- Buttons -->
                        <div class="mt-4">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useAuth from '../../composables/auth';
import BaseInput from '../templates/BaseInput.vue';

const { loginForm, validationErrors, submitLogin } = useAuth()
</script>
