<template>
  <Common :sidebarItems="sidebarItems" :musicList="musicList" :currentMusic="currentMusic">
    <component v-if="$frontmatter.home" :is="homeCom"/>
    <Page v-else :sidebar-items="sidebarItems"/>
    <Footer v-if="$frontmatter.home" class="footer" />
  </Common>
</template>

<script>
import Home from '@theme/components/Home'
import HomeBlog from '@theme/components/HomeBlog'
import Page from '@theme/components/Page'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common'
import { resolveSidebarItems } from '@theme/helpers/utils'
import axios from 'axios'

export default {
  components: { HomeBlog, Home, Page, Common, Footer },
  data () {
    return {
      musicList: [],
      currentMusic: {
        avatarImg: '',
        url: ''
      }
    }
  },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    homeCom () {
      const { type } = this.$themeConfig
      if (type !== undefined) {
        return type == 'blog' ? 'HomeBlog' : type
      }
      return 'Home'
    }
  },
  mounted() {
    this.getMusicList()
  },
  methods: {
    async getMusicList () {
      let that = this
      await axios.get('https://v1.alapi.cn/api/music/playlist?id=2948171497&token=6cMoFAF7KlR9nZenMHV2').then((response) => {
        if (response.data.code === 200) {
          console.log(response.data)
          const avatarImg = response.data.data.avatar_url
          that.musicList.concat(response.data.data.playList)
          that.currentMusic = Object.assign({}, response.data.data.playlist[0], {
            avatarImg
          })
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
