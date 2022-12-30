<template>
  <Widget
    v-if="accessToken"

    :showArtist="showArtist"
    :showAlbumArt="showAlbumArt"
    :showSpotifyLogo="showSpotifyLogo"
    :showBackground="showBackground"
    :accessToken="accessToken"
    :colorBackground="colorBackground"
    :opacity="slider"
  />
</template>

<script>
import Widget from '@/components/NowPlaying'

export default {
  components: { Widget },

  data: () => ({
    showArtist: true,
    showAlbumArt: true,
    showSpotifyLogo: true,
    showBackground: true,
    accessToken: null,
    colorBackground: null,
    slider: 100
  }),

  mounted () {

    const {showBackground, showArtist, showAlbumArt, showSpotifyLogo, accessToken, colorBackground} = this.$route.query;

    console.log(this.$route.query)

    this.showArtist = JSON.parse(showArtist.toLowerCase())
    this.showAlbumArt = JSON.parse(showAlbumArt.toLowerCase())
    this.showSpotifyLogo = JSON.parse(showSpotifyLogo.toLowerCase())
    this.accessToken = accessToken
    this.showBackground = JSON.parse(showBackground.toLowerCase())
    this.colorBackground = colorBackground
    this.opacity = opacity
  },
}
</script>
