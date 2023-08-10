// src/routes/og-image-generator/[...path]/og-image.jpg/+server.js
export const prerender = true
import { Resvg } from '@resvg/resvg-js'
import { error } from '@sveltejs/kit'
import { readFileSync } from 'fs'
import satori from 'satori'
import { html as toReactNode } from 'satori-html'
//import sharp from 'sharp'
import OgCard from './OgCard.svelte'



const height = 630
const width = 1200


const newKansasBlack = readFileSync(
  `${process.cwd()}/src/lib/WorkSans-Regular.ttf`
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


  let heroBase64
//   if (hero) {
//     const heroJpg = await sharp(`${process.cwd()}/static${hero}`)
//       .resize(null, 550, { withoutEnlargement: true })
//       .jpeg({ quality: 40 })
//       .toBuffer()

//     heroBase64 = `data:image/jpg;base64,${heroJpg.toString('base64')}`
//   }

  const result = OgCard.render({
    title,
    description,
    // heroHeight,
    // heroWidth,
    // hero: heroBase64,
    //logo: `data:image/png;base64,${logo.toString('base64')}`,
  })

  const element = toReactNode(result.html)

  const svg = await satori(element, {
    fonts: [
    //   {
    //     name: 'ConcourseCaps',
    //     weight: 400,
    //     style: 'normal',
    //     data: concourseSmallCaps,
    //   },
    //   {
    //     name: 'Concourse',
    //     weight: 400,
    //     style: 'normal',
    //     data: concourseRegular,
    //   },
      {
        name: 'NewKansas',
        weight: 900,
        style: 'normal',
        data: newKansasBlack,
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

  //const jpg = sharp(png).jpeg({ quality: 70, progressive: true })

  return new Response(png, {
    headers: {
      'content-type': 'image/png',
    },
  })
}
