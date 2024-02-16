import { ref, reactive } from 'vue'
import { useRouter } from "vue-router";

export default function useAuth() {
    const validationErrors = ref({})
    const router = useRouter()
    const loginForm = reactive({
        email: '',
        password: ''
    })

    const submitLogin = async () => {
        validationErrors.value = {}

        axios.post('api/login', loginForm)
            .then(async response => {
                loginUser(response)
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => loginForm.password = '')
    }

    const submitLogout = async () => {
        validationErrors.value = {}

        axios.post('api/logout').finally(() => {
            localStorage.removeItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer'
            router.push({ name: 'login' })
          })
    }

    const loginUser = (response) => {
        // localStorage.setItem('loggedIn', JSON.stringify(true))
        localStorage.setItem('token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        router.push({ name: 'items.index' })
    }

    return { loginForm, validationErrors, submitLogin, submitLogout }
}
