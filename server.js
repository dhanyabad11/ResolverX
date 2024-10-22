
const express = require('express');
const dns = require('dns');
const NodeCache = require('node-cache');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;


const cache = new NodeCache({ stdTTL: 600 }); 


app.use(morgan('dev'));


app.use(express.json());


const resolveDNS = (domain, recordType) => {
    return new Promise((resolve, reject) => {
        dns.resolve(domain, recordType, (err, addresses) => {
            if (err) {
                reject(err);
            } else {
                resolve(addresses);
            }
        });
    });
};


app.get('/resolve', async (req, res) => {
    const { domain, type } = req.query;

    if (!domain) {
        return res.status(400).json({ error: 'Domain query parameter is required' });
    }

  
    const recordType = type || 'A';

 
    const cacheKey = `${domain}:${recordType}`;
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
        return res.json({ domain, type: recordType, addresses: cachedResponse, fromCache: true });
    }

    try {
        const addresses = await resolveDNS(domain, recordType);
     
        cache.set(cacheKey, addresses);
        res.json({ domain, type: recordType, addresses });
    } catch (err) {
        return res.status(404).json({ error: `Failed to resolve domain ${domain}: ${err.message}` });
    }
});


app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});


app.listen(PORT, () => {
    console.log(`DNS server running on http://localhost:${PORT}`);
});
