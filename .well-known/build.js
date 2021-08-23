const { writeFileSync } = require("fs")
const { join } = require("path")
const assetLinks = require("./assetlinks.template.json")
const appSiteAssociation = require("./apple-app-site-association.template.json")

const androidCertHashes = process.env.ANDROID_CERT_HASHES || ""
const iosAppPrefix = process.env.IOS_APP_PREFIX || ""

for (const link of assetLinks) {
    if (link.target.sha256_cert_fingerprints) {
        link.target.sha256_cert_fingerprints = androidCertHashes.split(",").filter(h => h)
    }
}

for (const detail of appSiteAssociation.applinks.details) {
    detail.appIDs = detail.appIDs.map(d => iosAppPrefix + "." + d)
}

writeFileSync(join(__dirname, "assetlinks.json"), JSON.stringify(assetLinks, null, 4))
writeFileSync(join(__dirname, "apple-app-site-association"), JSON.stringify(appSiteAssociation, null, 4))
