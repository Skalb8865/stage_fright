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
        gallery: resolve(__dirname, 'html/Fanclub/account.html'),
        account_login: resolve(__dirname, 'html/Fanclub/login.html'),
        account_signup: resolve(__dirname, 'html/Fanclub/signup.html'),
        fanclub_black_hoodie: resolve(__dirname, 'html/Fanclub/Fanclub_Merch/fanclub_black_hoodie.html'),
        fanclub_tshirt: resolve(__dirname, 'html/Fanclub/Fanclub_Merch/fanclub_T-shirt.html'),
        fanclub_mug: resolve(__dirname, 'html/Fanclub/Fanclub_Merch/fanclub_mug.html'),
        fanclub_backpack: resolve(__dirname, 'html/Fanclub/Fanclub_Merch/fanclub_backpack.html'),
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
        acantha_black_tshirt: resolve(__dirname, 'html/Merch/Apparel/acantha_T-shirt.html'),
        acantha_hoodie: resolve(__dirname, 'html/Merch/Apparel/acantha_black_hoodie.html'),
        white_hat: resolve(__dirname, 'html/Merch/Apparel/white_logo_hat.html'),
        nyx_black_tshirt: resolve(__dirname, 'html/Merch/Apparel/nyx_T-shirt.html'),
        nyx_black_hoodie: resolve(__dirname, 'html/Merch/Apparel/nyx_black_hoodie.html'),
        prometheus_black_hoodie: resolve(__dirname, 'html/Merch/Apparel/prometheus_black_hoodie.html'),
        prometheus_black_tshirt: resolve(__dirname, 'html/Merch/Apparel/prometheus_T-shirt.html'),
        black_logo_hoodie: resolve(__dirname, 'html/Merch/Apparel/black_logo_hoodie.html'),
        black_moto_sweatpants: resolve(__dirname, 'html/Merch/Apparel/black_motto_sweatpants.html'),
        black_logo_beanie: resolve(__dirname, 'html/Merch/Apparel/black_logo_beanie.html'),
        hephaestus_black_hoodie: resolve(__dirname, 'html/Merch/Apparel/hephaestus_black_hoodie.html'),
        hephaestus_black_tshirt: resolve(__dirname, 'html/Merch/Apparel/hephaestus_T-shirt.html'),
        // Media
        nyx_vinyl: resolve(__dirname, 'html/Merch/Media/nyx_vinyl.html'),
        prometheus_vinyl: resolve(__dirname, 'html/Merch/Media/prometheus_vinyl.html'),
        acantha_vinyl: resolve(__dirname, 'html/Merch/Media/acantha_vinyl.html'),
        hephaestus_vinyl: resolve(__dirname, 'html/Merch/Media/hephaestus_vinyl.html'),
        // Accessories
        moto_phone_case: resolve(__dirname, 'html/Merch/Accessories/motto_phone_case.html'),
        logo_white_airpod_case: resolve(__dirname, 'html/Merch/Accessories/logo_white_airpod_case.html'),
        // Tour Order Pages
        kings_of_clubs: resolve(__dirname, 'html/Tours/tour_order/kings_of_clubs.html'),
        cc: resolve(__dirname, 'html/Tours/tour_order/columbus_commons.html'),
        // underground_arts: resolve(__dirname, 'html/Tours/tour_order/underground_arts.html'),
        // franklin_music_hall: resolve(__dirname, 'html/Tours/tour_order/franklin_music_hall.html'),
        // brooklyn_paramount: resolve(__dirname, 'html/Tours/tour_order/brooklyn_paramount.html'),
        // artpark: resolve(__dirname, 'html/Tours/tour_order/artpark.html'),
        // flagstar_westbury: resolve(__dirname, 'html/Tours/tour_order/flagstar_westbury.html'),
        // forest_hills: resolve(__dirname, 'html/Tours/tour_order/forest_hills.html'),
        // radio_city: resolve(__dirname, 'html/Tours/tour_order/radio_city.html'),
        // the_NorVa: resolve(__dirname, 'html/Tours/tour_order/the_NorVa.html'),
        // summit_music_hall: resolve(__dirname, 'html/Tours/tour_order/summit_music_hall.html'),
        // kemba_live: resolve(__dirname, 'html/Tours/tour_order/kemba_live.html'),
        // Tour Order Pages
        checkout: resolve(__dirname, 'html/Contact/checkout.html'),
      },
    },
  },
})