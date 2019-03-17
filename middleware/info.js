import { getInfo } from '~/api'

export default async function({ store }) {
  let res = await getInfo()
  delete res.data.routes
  store.commit('setInfo', {
    info: res.data
  })
}
