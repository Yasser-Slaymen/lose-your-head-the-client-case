import * as prismic from '@prismicio/client'
const repositoryName = 'lose-your-head-the-cliente-case'



const createClient = ({request, fetch}) => {
    const clientOptions = {
        fetch
    }
    const client = prismic.createClient(repositoryName, clientOptions)
    
    if (request) {
        client.enableAutoPreviewsFromReq(request);
      }

    return client
}

export default createClient