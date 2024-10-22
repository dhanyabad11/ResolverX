# 🌐 CustomDNS

CustomDNS is a robust DNS server built with Node.js and Express.js. It supports multiple DNS record types, caching for faster responses, and logging for monitoring requests. This server is designed to efficiently resolve DNS queries, providing a simple API for users.

## Features

- 🔍 **Multi-type DNS Resolution**: Supports A, AAAA, and MX record types.
- ⚡ **Caching**: Caches DNS responses for improved performance and reduced latency.
- 📜 **Logging**: Logs all incoming requests for better debugging and monitoring.
- ✔️ **Health Check Endpoint**: Easy status check for the server.

## Requirements

- 🎯 **Node.js** (>= 14.x)
- 📦 **npm** (>= 6.x)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dhanyabad11/my-complex-dns-server.git
   cd my-complex-dns-server
Install dependencies:
bash
Copy code
npm install
Running the Server
To start the DNS server, run:

bash
Copy code
node server.js
The server will be available at http://localhost:3000.

API Endpoints
1. Resolve DNS Records
Endpoint: /resolve
Method: GET
Query Parameters:
domain (required): The domain name to resolve.
type (optional): The type of DNS record to resolve (default is A). Supported types: A, AAAA, MX.
Example Request:

bash
Copy code
curl "http://localhost:3000/resolve?domain=google.com&type=A"
Response:

json
Copy code
{
  "domain": "google.com",
  "type": "A",
  "addresses": ["142.250.190.78"]
}
2. Health Check
Endpoint: /health
Method: GET
Example Request:

bash
Copy code
curl "http://localhost:3000/health"
Response:

json
Copy code
{
  "status": "ok"
}
Contributing
🤝 Contributions are welcome! If you have suggestions for improvements or new features, please create a pull request or open an issue.

License
📄 This project is licensed under the MIT License - see the LICENSE file for details.

Author
👤 Dhanyabad behera

markdown
Copy code

### Explanation of Icons Used

- **🌐**: Represents the internet and is suitable for a DNS project.
- **🔍**: Indicates search functionality for DNS resolution.
- **⚡**: Represents speed, indicating caching.
- **📜**: Represents logs or documentation.
- **✔️**: Indicates a successful health check.
- **🎯**: Represents targets, such as Node.js requirements.
- **📦**: Represents package management, such as npm.
- **🤝**: Indicates collaboration and contributions.
- **📄**: Represents legal documentation (license).
- **👤**: Represents the author or user profile.