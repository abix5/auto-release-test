import { INpmConfig } from '@auto-it/npm'
import { AutoRc } from 'auto'

const npmOptions: INpmConfig = {
  forcePublish: false,
}

export default function rc(): AutoRc {
  return {
    plugins: [
      'git-tags',
      [ 'npm', npmOptions ],
      'released',
      'conventional-commits',
    ],

    baseBranch: 'dev',

    author: 'Maxim Savin <mksavin@mail.ru>',

    owner: 'ProDentInc',
    repo: 'auto-release-test',

    changelog: {
      message: 'chore(release): Bumped version! :rocket:',
    },

    name: 'github-actions[bot]',
    email: 'auto[bot]@users.noreply.github.com',
  }
}
