(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13af7bcd"],{1788:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showAlbumArt,expression:"showAlbumArt"}],staticClass:"media-left"},[s("figure",{staticClass:"image",class:{"is-64x64":t.showArtist,"is-48x48":!t.showArtist}},[t.albumArt?s("PreloadedImage",{attrs:{src:t.albumArt,alt:"Album Art"}}):t._e()],1)]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"is-size-4 has-text-white"},[t._v(t._s(t.trackName))]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.showArtist,expression:"showArtist"}],staticClass:"is-size-6 has-text-white"},[t._v("\n      "+t._s(t.artistName)+"\n    ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSpotifyLogo,expression:"showSpotifyLogo"}],staticClass:"media-right"},[t._m(0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"image is-32x32"},[a("img",{attrs:{src:s("ed8a"),alt:"Spotify"}})])}],r=(s("7f7f"),s("bc3a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.mountedSrc,expression:"mountedSrc"}],attrs:{src:t.mountedSrc}})])}),i=[],n={props:{src:{type:String}},data:function(){return{mountedSrc:null}},watch:{src:function(){this.load()}},mounted:function(){this.load()},methods:{load:function(){var t=this,e=new Image;e.onload=function(){t.mountedSrc=t.src},e.src=this.src}}},l=n,u=s("2877"),c=Object(u["a"])(l,r,i,!1,null,null,null),h=c.exports,m="https://api.spotify.com/v1/me/player/currently-playing",d={components:{PreloadedImage:h},props:{showArtist:{type:Boolean,default:!0},showAlbumArt:{type:Boolean,default:!0},showSpotifyLogo:{type:Boolean,default:!0},accessToken:{type:String,default:null}},data:function(){return{userPlayer:null}},computed:{trackName:function(){return this.userPlayer?this.userPlayer.item.name:null},artistName:function(){return this.userPlayer&&0!=this.userPlayer.item.artists.length?this.userPlayer.item.artists[0].name:null},albumArt:function(){return this.userPlayer&&0!=this.userPlayer.item.album.images.length?this.userPlayer.item.album.images[0].url:null}},mounted:function(){this.loadUserPlayer()},methods:{loadUserPlayer:function(){var t=this,e={Authorization:"Bearer ".concat(this.accessToken)};this.$http.get(m,{headers:e}).then(function(e){t.userPlayer=e.data,setTimeout(t.loadUserPlayer,5e3)})}}},f=d,w=(s("67c9"),Object(u["a"])(f,a,o,!1,null,"5b371a24",null));e["a"]=w.exports},"67c9":function(t,e,s){"use strict";var a=s("8c7e"),o=s.n(a);o.a},"8c7e":function(t,e,s){},ed8a:function(t,e,s){t.exports=s.p+"img/spotify-logo-without-text.a39c6e1b.svg"},f95f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.accessToken?s("Widget",{attrs:{showArtist:t.showArtist,showAlbumArt:t.showAlbumArt,showSpotifyLogo:t.showSpotifyLogo,accessToken:t.accessToken}}):t._e()},o=[],r=s("1788"),i={components:{Widget:r["a"]},data:function(){return{showArtist:!0,showAlbumArt:!0,showSpotifyLogo:!0,accessToken:null}},mounted:function(){var t=this.$route.query,e=t.showArtist,s=t.showAlbumArt,a=t.showSpotifyLogo,o=t.accessToken;this.showArtist=Boolean(e),this.showAlbumArt=Boolean(s),this.showSpotifyLogo=Boolean(a),this.accessToken=o}},n=i,l=s("2877"),u=Object(l["a"])(n,a,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-13af7bcd.9ee02813.js.map