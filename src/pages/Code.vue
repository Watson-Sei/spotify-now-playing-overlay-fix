<template>
  <div>
    <LandingHead
      class="is-light"
      :showLoginButton="false"
    />

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="is-size-4 has-text-weight-semibold">Settings</p>

            <hr />

            <div class="level is-mobile">
              <div class="level-left">
                <div class="level-item">
                  <p>Show Spotify Logo</p>
                </div>
              </div>

              <div class="level-right">
                <b-switch
                  v-model="settings.showSpotifyLogo"
                />
              </div>
            </div>

            <div class="level is-mobile">
              <div class="level-left">
                <div class="level-item">
                  <p>Show Album Art</p>
                </div>
              </div>

              <div class="level-right">
                <b-switch
                  v-model="settings.showAlbumArt"
                />
              </div>
            </div>

            <div class="level is-mobile">
              <div class="level-left">
                <div class="level-item">
                  <p>Show Artist</p>
                </div>
              </div>

              <div class="level-right">
                <b-switch
                  v-model="settings.showArtist"
                />
              </div>
            </div>

            <div class="level is-mobile">
              <div class="level-left">
                <div class="level-item">
                  <p>背景透明にするのかしないのか？<br/>どっちないんだい？</p>
                </div>
              </div>

              <div class="level-right">
                <b-switch 
                  v-model="settings.showBackground"
                />
              </div>
            </div>

            <div class="is-mobile" style="max-height: 400px">
              <div>
                <p>背景色</p>
              </div>
              <div>
                <v-app style="max-height: 300px">
                  <v-color-picker v-model="color"></v-color-picker>
                </v-app>
              </div>
            </div>

            <div class="is-mobile" style="max-height: 400px">
              <div>
                透明度
              </div>
              <div>
                <v-app style="max-height: 100px">
                  <v-slider
                    v-model="slider"
                    thumb-label
                    step="10"
                    ticks="always"
                    max="100"
                    tick-size="10"
                  ></v-slider>
                </v-app>
              </div>
            </div>
          </div>

          <div class="column">
            <p class="is-size-4 has-text-weight-semibold">Preview</p>

            <hr />

            <div class="preview">
              <figure class="screen image is-16by9">
                <img src="@/assets/img/sample-game-screen.jpg" alt="Game Screen">
              </figure>

              <NowPlaying
                class="widget"
                :showAlbumArt="settings.showAlbumArt"
                :showArtist="settings.showArtist"
                :showBackground="settings.showBackground"
                :showSpotifyLogo="settings.showSpotifyLogo"
                :colorBackground="showColor"
                :opacity="slider"
                :accessToken="accessToken"
              />
            </div>

            <p class="has-text-weight-semibold">Paste the following URL to a browser source:</p>

            <textarea class="textarea" readonly>{{ browserSourceUrl }}</textarea>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import queryString from 'query-string'

import LandingHead from '@/components/LandingHead'
import NowPlaying from '@/components/NowPlaying'

export default {
  components: { LandingHead, NowPlaying },

  computed: {
    accessToken () {
      const parsed = queryString.parse(this.$route.hash)

      return parsed['access_token']
    },

    browserSourceUrl () {
      const nowPlayingPage = this.$router.resolve({ name: 'nowPlaying' }),
            base = `${location.origin}${nowPlayingPage.href}`

      const query = queryString.stringify({
        accessToken: this.accessToken,
        ...this.settings,
        colorBackground: this.color,
        opacity: this.slider
      })

      return `${base}?${query}`
    }, 

    color: {
      get() {
        return this[this.type]
      },
      set (v) {
        this[this.type] = v
      }
    },

    showColor() {
      return this.color
    }
  },

  data: () => ({
    settings: {
      showSpotifyLogo: true,
      showAlbumArt: true,
      showArtist: true,
      showBackground: true,
    },
    type: 'hex',
    hex: '#FF00FF',
    hexa: '#FF00FFFF',
    rgba: { r: 255, g: 0, b: 255, a: 1 },
    hsla: { h: 300, s: 1, l: 0.5, a: 1 },
    hsva: { h: 300, s: 1, v: 1, a: 1 },
    slider: 100,
  })
}
</script>

<style lang="scss" scoped>
.preview {
  position: relative;
  margin-bottom: 1rem;

  .widget {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
  }
}

.v-application--wrap {
  min-height: 0 important;
}
</style>
