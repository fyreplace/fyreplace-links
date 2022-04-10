const { writeFile } = require("fs")
const { join } = require("path")
const assetLinks = require("./assetlinks.template.json")
const appSiteAssociation = require("./apple-app-site-association.template.json")

const androidApp = process.env.ANDROID_APP || ""
const androidCertHashes = process.env.ANDROID_CERT_HASHES || ""
const androidDevCertHashes = process.env.ANDROID_DEV_CERT_HASHES || ""
const iosAppPrefix = process.env.IOS_APP_PREFIX || ""

function prefixed(apps) {
    return apps instanceof Array ? apps.map(app => prefixed(app)) : (iosAppPrefix + "." + apps)
}

for (const target of assetLinks.map(l => l.target)) {
    const hashes = target.package_name === androidApp ? androidCertHashes : androidDevCertHashes
    target.sha256_cert_fingerprints = hashes.split(",").filter(h => h)
}

for (const detail of appSiteAssociation.applinks.details) {
    detail.appIDs = prefixed(detail.appIDs)
    detail.appID = prefixed(detail.appID)
}

appSiteAssociation.webcredentials.apps = prefixed(appSiteAssociation.webcredentials.apps)
appSiteAssociation.appclips.apps = prefixed(appSiteAssociation.appclips.apps)

const files = { "assetlinks.json": assetLinks, "apple-app-site-association": appSiteAssociation }

for (const fileName in files) {
    writeFile(join(__dirname, fileName), JSON.stringify(files[fileName], null, 4), () => undefined)
}
