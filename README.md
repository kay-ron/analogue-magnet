# `analogue-magnet(0.0.0, alpha)`

**Analogue Magnet-URI**: A variant of the Magnet URI scheme for serverless filesharing.

## `meta = {}`

### `meta.about`
Magnet URI is an awesome schematic. Albeit personally finding paramaters like `as`, `tr`, and `kt` unnecessary, paramter `xt` requires a URN (*uniform resource name*). Not only is this software incompatible with a DHT (*distributed hash table*) and is meant to be used with a DNT (*distributed network table*) — a DHT-inspired data table — but I also have to register a new URN with IANA. Which requires money, is practically unnecessary, and a waste of time and money if I figure I don't need it after all.

Hence, `analogue-magnet`. It is a variant of the scheme designed for synchronous work with a new peer-to-peer filesharing protocol I am working on.

In a nutshell, a generated `am` link is like a torrent file: it only points to a file's unlike a URL (*uniform resource locator*). It uses an ARL (*analogue resource locator*), a string that contains that file's location. It also uses SHA-256 for encryption, and can only be accessed within an active DNT. Despite its differences, it still is a Magnet URI scheme in spirit.

#### `meta.about.discrepancy`
`analogue-magnet` is incompatible with programs such as **`magnet-uri`** (@*[webtorrent](https://github.com/webtorrent)*), as its structure deviates from Magnet URI and some syntax is original to `analogue-magnet`. **This is pretty important.**

## `api = new API()`
*Coming soon...*

## `final_release()`

```js
console.log('Alpha build — 03/04.19')
}
```