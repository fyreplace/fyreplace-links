const { writeFile } = require("fs")
const { join } = require("path")
const assetLinks = require("./assetlinks.template.json")
const appSiteAssociation = require("./apple-app-site-association.template.json")

const androidCertHashes = process.env.ANDROID_CERT_HASHES || ""
const iosAppPrefix = process.env.IOS_APP_PREFIX || ""

function prefixed(apps) {
    return apps.map(app => iosAppPrefix + "." + app)
}

for (const link of assetLinks) {
    if (link.target.sha256_cert_fingerprints) {
        link.target.sha256_cert_fingerprints = androidCertHashes.split(",").filter(h => h)
    }
}

for (const detail of appSiteAssociation.applinks.details) {
    detail.appIDs = prefixed(detail.appIDs)
}

appSiteAssociation.webcredentials.apps = prefixed(appSiteAssociation.webcredentials.apps)
appSiteAssociation.appclips.apps = prefixed(appSiteAssociation.appclips.apps)

const files = { "assetlinks.json": assetLinks, "apple-app-site-association": appSiteAssociation }

for (const fileName in files) {
    writeFile(join(__dirname, fileName), JSON.stringify(files[fileName], null, 4), () => undefined)
}
