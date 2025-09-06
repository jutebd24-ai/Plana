import { createServer } from 'vite'
import { fileURLToPath, URL } from 'node:url'

async function startServer() {
  const server = await createServer({
    configFile: fileURLToPath(new URL('../vite.config.ts', import.meta.url)),
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: true
    }
  })
  
  await server.listen()
  console.log('Frontend server running at http://0.0.0.0:5000')
}

startServer().catch(console.error)