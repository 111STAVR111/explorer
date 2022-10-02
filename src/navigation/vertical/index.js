import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://avatars.githubusercontent.com/u/44331529?s=400&u=50afd2026f130415e8d2e2e3a94d37d2390820db&v=4',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'STAVR Explorer',
      href: 'http://explorer.stavr.tech',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Github STAVR',
      href: 'https://github.com/obajay',
      icon: 'GithubIcon',
    })
  }
  chainMenus.push({
    title: 'Discord',
    href: 'https://discordapp.com/users/765663833049661530',
    icon: 'EyeIcon',
  })

  return chainMenus
}

export default processMenu()
