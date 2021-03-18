export default {
    // Глобальные настройки страниц (титульник, мета теги и тд)
    head: {
        title: 'Nuxt Template',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt Template',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Здесь лежат все глобальные стиили
    css: ['normalize.css', '@/assets/style/global.scss'],

    // Здесь лежат файлы с глобальными переменными, миксинами и т.д.
    styleResources: {
        scss: ['./assets/style/variables.scss', './assets/style/mixins.scss'],
    },

    ssr: true,

    // Здесь перечислены все используемые плагины (аналог Vue.use(<name>) main.js)
    plugins: ['@/plugins/vuelidate.js', '@/plugins/font-awesome.js'],

    // Позволяет использовать компоненты без импорта
    components: true,

    // Модули, которые не влияют на работу
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Модули (крутые плагины)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        '@nuxtjs/svg',
        '@nuxtjs/toast',
    ],

    // Конфигурация аксиоса
    axios: {},

    build: {},
};
