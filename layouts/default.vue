<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span> Our Lady of Fatima Makati &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-file-document-edit-outline',
          title: 'Attendance Sheet',
          to: '/'
        },
        {
            icon: 'mdi-file-table-box-outline',
            title: 'Attendance Records',
            to: '/records'
        },
        {
          icon: 'mdi-folder-clock-outline',
          title: 'Mass Schedules',
          to: '/schedules'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Our Lady of Fatima Makati'
    }
  }
}
</script>

<style>
  @import "assets/main.scss";

</style>
