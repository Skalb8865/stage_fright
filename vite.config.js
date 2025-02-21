import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Main Pages
        main: resolve(__dirname, 'index.html'),
        about_landing_page: resolve(__dirname, 'html/About/about_landing_page.html'),
        about: resolve(__dirname, 'html/About/about.html'),
        timeline: resolve(__dirname, 'html/About/timeline.html'),
        tours: resolve(__dirname, 'html/Tours/tour.html'),
        merch: resolve(__dirname, 'html/Merch/merch.html'),
        music: resolve(__dirname, 'html/Music/music.html'),
        contact: resolve(__dirname, 'html/Contact/contact.html'),
        customer_service: resolve(__dirname, 'html/Contact/customer_service.html'),
        credits: resolve(__dirname, 'html/Credits/credits.html'),
        fan_club: resolve(__dirname, 'html/Fanclub/fanclub.html'),
        // Music
        prometheus: resolve(__dirname, 'html/Music/Albums/prometheus.html'),
        prometheus_music_page: resolve(__dirname, 'html/Music/Albums/Music_Pages/prometheus_music_page.html'),
        acantha: resolve(__dirname, 'html/Music/Albums/acantha.html'),
        acantha_music_page: resolve(__dirname, 'html/Music/Albums/Music_Pages/acantha_music_page.html'),
        NYX: resolve(__dirname, 'html/Music/Albums/nyx.html'),
        nyx_music_page: resolve(__dirname, 'html/Music/Albums/Music_Pages/nyx_music_page.html'),
        hephaestus: resolve(__dirname, 'html/Music/Albums/hephaestus.html'),
        hephaestus_music_page: resolve(__dirname, 'html/Music/Albums/Music_Pages/hephaestus_music_page.html'),
        // Apparel
        logo_long_sleeve: resolve(__dirname, 'html/Merch/Apparel/white_long_sleeve.html'),
        acantha_tshirt: resolve(__dirname, 'html/Merch/Apparel/acantha_T-shirt.html'),
        acantha_hoodie: resolve(__dirname, 'html/Merch/Apparel/acantha_black_hoodie.html'),
        white_hat: resolve(__dirname, 'html/Merch/Apparel/white_logo_hat.html'),
        nyx_tshirt: resolve(__dirname, 'html/Merch/Apparel/nyx_T-shirt.html'),
        nyx_black_hoodie: resolve(__dirname, 'html/Merch/Apparel/nyx_black_hoodie.html'),
        prometheus_black_hoodie: resolve(__dirname, 'html/Merch/Apparel/prometheus_black_hoodie.html'),
        prometheus_black_tshirt: resolve(__dirname, 'html/Merch/Apparel/prometheus_T-shirt.html'),
        black_logo_hoodie: resolve(__dirname, 'html/Merch/Apparel/black_logo_hoodie.html'),
        black_moto_sweatpants: resolve(__dirname, 'html/Merch/Apparel/black_motto_sweatpants.html'),
        black_logo_beanie: resolve(__dirname, 'html/Merch/Apparel/black_logo_beanie.html'),
        hephaestus_black_hoodie: resolve(__dirname, 'html/Merch/Apparel/hephaestus_black_hoodie.html'),
        // Media
        nyx_vinyl: resolve(__dirname, 'html/Merch/Media/nyx_vinyl.html'),
        prometheus_vinyl: resolve(__dirname, 'html/Merch/Media/prometheus_vinyl.html'),
        acantha_vinyl: resolve(__dirname, 'html/Merch/Media/acantha_vinyl.html'),
        // Accessories
        moto_phone_case: resolve(__dirname, 'html/Merch/Accessories/motto_phone_case.html'),
        logo_white_airpod_case: resolve(__dirname, 'html/Merch/Accessories/logo_white_airpod_case.html'),

        test: resolve(__dirname, 'html/test/jsontest.html'),
      },
    },
  },
})