<template>
  <LandingHead
    class="is-fullheight"
    :loginUri="loginWithSpotifyUri"
  />
</template>

<script>
import buildUrl from 'build-url'
import LandingHead from '@/components/LandingHead'

export default {
  components: { LandingHead },

  computed: {
    loginWithSpotifyUri () {
      const codePage = this.$router.resolve({ name: 'code' })
      const redirectUri = `${location.origin}${codePage.href}`

      const queryParams = {
        client_id: "47fa7a96945142d6851c536e4469cd20",
        redirect_uri: redirectUri,
        response_type: 'token',
        scope: 'user-read-currently-playing'
      }

      return buildUrl('https://accounts.spotify.com/authorize', { queryParams })
    }
  }
}
</script>
