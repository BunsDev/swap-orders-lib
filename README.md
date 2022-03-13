# SoulSwap Orders Library monorepo

## Development
### Add a new react-component-library `range-orders-react`

```shell
mkdir packages/range-orders-react
cd packages/range-orders-react
yarn init
lerna add soulswap-limit-orders-lib --scope=soulswap-range-orders-react #asuming `range-orders-react` also uses `limit-orders-lib`
yarn build
```

## Add newly created component to example
```shell
cd packages/range-orders-react
yarn link
cd ../../example
yarn link soulswap-range-orders-react
```
## Build specific package
```shell
yarn workspace soulswap-limit-orders-react build
```

## Publish packages
```shell
yarn publish:lerna # publish latest versions
yarn publish:lerna:next # publish next versions
```