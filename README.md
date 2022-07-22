# workshop-obj-playwright

## Install project dependencies

```sh
yarn
yarn playwright install-deps
```

### Arch linux specific setup

```sh
$ sudo pamac install enchant1.6 icu66 libwebp052 libffi7
$ sudo ln -s /usr/lib/libpcre.so /usr/lib/libpcre.so.3
$ yarn
$ yarn playwright install chromium
```

## Refereces
- https://playwright.dev/docs
- https://www.w3schools.com