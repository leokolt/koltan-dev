export const prerender = true
//export const trailingSlash = 'always'
import { preloadCode, preloadData } from '$app/navigation'

export const load = ({ url }) => {
    const currentRoute = url.pathname

    return {
      currentRoute
    }
  }
