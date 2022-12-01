import { error } from '@sveltejs/kit'
import createClient from '$lib/utils/prismicio.js'

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request })
  const documents = await client.getAllByType('the_cliente_case')

    if (documents) {
        return { 
          documents
        }
    } error(404, 'Not found')
}
