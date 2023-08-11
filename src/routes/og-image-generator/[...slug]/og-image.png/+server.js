// src/routes/og-image-generator/[...path]/og-image.jpg/+server.js
export const prerender = true
import { Resvg } from '@resvg/resvg-js'
import { error } from '@sveltejs/kit'
import { readFileSync } from 'fs'
import satori from 'satori'
import { html as toReactNode } from 'satori-html'
import OgCard from './OgCard.svelte'



const height = 630
const width = 1200


const WorkSansBlack = readFileSync(
  `${process.cwd()}/src/lib/ogImage/WorkSans-Black.woff`
)

const WorkSansRegular = readFileSync(
    `${process.cwd()}/src/lib/ogImage/WorkSans-Regular.woff`
  )


/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, params, fetch }) => {
  const { slug } = params

  const dataPath = `${slug === '' ? '' : '/'}${slug}/og-image-data.json`


  const response = await fetch(dataPath, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw error(response.status, `Error retrieving page data at ${dataPath}`)
  }

  const data = await response.json()


  const { title, description, heroHeight, heroWidth } = data

  const result = OgCard.render({
    title,
    description,
    heroHeight,
    heroWidth,
  })

  const element = toReactNode(result.html)

  const svg = await satori(element, {
    fonts: [
        {
            name: 'Work Sans',
            weight: 400,
            style: 'normal',
            data: WorkSansRegular,
        },
        {
            name: 'Work Sans',
            weight: 900,
            style: 'normal',
            data: WorkSansBlack,
        },
    ],
    height,
    width,
  })

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: width,
    },
  })
  const png = resvg.render().asPng()

  return new Response(png, {
    headers: {
      'content-type': 'image/png',
    },
  })
}
