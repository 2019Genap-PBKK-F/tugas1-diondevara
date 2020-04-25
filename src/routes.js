import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import AspekView from './components/views/Aspek.vue'
import capaianUnitView from './components/views/capaian-unit.vue'
import dataDasarView from './components/views/datadasar.vue'
import jenisSatkerView from './components/views/jenis-satker.vue'
import periodeView from './components/views/periode.vue'
import indikatorPeriodeView from './components/views/indikator-periode.vue'
import masterIndikatorView from './components/views/master-indikator.vue'
import satuanKerjaView from './components/views/satuan-kerja.vue'
import indikatorSatuanKerjaView from './components/views/indikator-satuan-kerja.vue'
import indikatorSatuanKerjaLogView from './components/views/indikator-satuan-kerja-log.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'Aspek',
        alias: '',
        component: AspekView,
        name: 'Aspek',
        meta: {description: 'Aspek'}
      }, {
        path: 'periode',
        component: periodeView,
        name: 'periode',
        meta: {description: 'periode'}
      }, {
        path: 'satuan-kerja',
        component: satuanKerjaView,
        name: 'satuan-kerja',
        meta: {description: 'satuan-kerja'}
      }, {
        path: 'indikator-satuan-kerja',
        component: indikatorSatuanKerjaView,
        name: 'indikator-satuan-kerja',
        meta: {description: 'indikator-satuan-kerja'}
      }, {
        path: 'indikator-satuan-kerja-log',
        component: indikatorSatuanKerjaLogView,
        name: 'indikator-satuan-kerja-log',
        meta: {description: 'indikator-satuan-kerja-log'}
      }, {
        path: 'indikator-periode',
        component: indikatorPeriodeView,
        name: 'indikator-periode',
        meta: {description: 'indikator periode'}
      }, {
        path: 'master-indikator',
        component: masterIndikatorView,
        name: 'master-indikator',
        meta: {description: 'master-indikator'}
      }, {
        path: 'capaian-unit',
        component: capaianUnitView,
        name: 'capaian-unit',
        meta: {description: 'capaian-unit'}
      }, {
        path: 'jenis-satker',
        component: jenisSatkerView,
        name: 'jenis-satker',
        meta: {description: 'jenis-satker'}
      }, {
        path: 'data-dasar',
        component: dataDasarView,
        name: 'data-dasar',
        meta: {description: 'data-dasar unit'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
