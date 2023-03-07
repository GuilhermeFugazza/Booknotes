import { FastifyInstance } from "fastify"
import { request } from "http"
import WebPush  from "web-push"
import { z } from "zod"

const publicKey = 'BBYxjqsQwS-jMJvlbUz-B3ldelvb0D3eG6xBkyi3gJ9JNTJCAFt4hcXEVGTYYLtBvt0pQEBsAOfbyjQQDC3Uf1A'
const privateKey = 'SKo04SikL8PV9LvLpOAx91gzRk_SFSMqXTE0k2zRhEE'

WebPush.setVapidDetails('http://localhost:3333',publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
        publicKey,
    }
  })

  app.post('/push/register', (request, reply) => {
    console.log(request.body)

    return reply.status(201).send()
  })


  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })
      })
    })
    const { subscription } = sendPushBody.parse(request.body)

    setTimeout( () => {
      WebPush.sendNotification(subscription, 'Não se esqueça de seus hábitos!')
    })

    return reply.status(201).send()
  })
}

