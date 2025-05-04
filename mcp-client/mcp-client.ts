import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";


async function connectClient(url) {
    const baseUrl = new URL(url);
    const client = new Client({
        name: 'streamable-http-client',
        version: '1.0.0'
    });

    const transport = new StreamableHTTPClientTransport(baseUrl);
    await client.connect(transport);

    console.log("Connected using Streamable HTTP transport");
    console.log(JSON.stringify(await client.listTools(), null, 2));
    return client;
}

const serverUrl = "http://localhost:3000/mcp";

connectClient(serverUrl)
    .then(() => {
        console.log("Client connected successfully");
    })
    .catch(error => {
        console.error("Failed to connect client:", error);
    });