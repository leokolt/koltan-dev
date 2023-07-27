export const prerender = true
import { preloadCode, preloadData } from '$app/navigation'

export const load = ({ url }) => {
    const currentRoute = url.pathname

    return {
      currentRoute
    }
  }
