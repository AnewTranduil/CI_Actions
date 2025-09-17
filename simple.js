import http from 'http'
const port = 8080

const server = http.createServer((req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Test Server</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .info {
            background: #e8f4fd;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
        }
        .timestamp {
            color: #666;
            font-size: 0.9em;
        }
        ul {
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Simple Test Server</h1>
        
        <div class="info">
            <strong>Server Status:</strong> Running<br>
            <strong>Port:</strong> ${port}<br>
            <strong>Time:</strong> <span class="timestamp" id="time-ignore">${new Date().toISOString()}</span>
        </div>
        
        <h2>Request Information</h2>
        <ul>
            <li><strong>Method:</strong> ${req.method}</li>
            <li><strong>URL:</strong> ${req.url}</li>
            <li id="agent-ignore"><strong>User Agent:</strong> ${req.headers['user-agent'] || 'Unknown'}</li>
            <li><strong>Host:</strong> ${req.headers.host || 'Unknown'}</li>
            <li><strong>X-forwarded-for:</strong> ${req.headers['x-forwarded-for'] || 'Unknown'}</li>
            <li><strong>remoteAddress:</strong> ${req.connection.remoteAddress || 'Unknown'}</li>
            <li><strong>Server ip: </strong>${ip}</li>
        </ul>
        
        <h2> Meme 🎭</h2>
        <div style="text-align: center; margin: 20px 0; padding: 20px; background: #f9f9f9; border-radius: 8px;">
            <img src="https://i.imgflip.com/1bij.jpg" alt="Success Kid Meme" style="max-width: 300px; border-radius: 8px;">
            <p style="margin-top: 15px; font-style: italic; color: #555;">
                "When your simple Node.js server actually works on the first try"
            </p>
        </div>
        
        <h2>Available Endpoints</h2>
        <ul>
            <li><code>GET /</code> - This page</li>
            <li><code>GET /health</code> - Health check</li>
            <li><code>GET /api/status</code> - JSON status response</li>
            <li><code>GET /meme</code> - Random programming meme</li>
        </ul>
    </div>
</body>
</html>`


    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
  
})

server.listen(port)

console.log(`🚀 Simple server running at http://localhost:${port}`)
