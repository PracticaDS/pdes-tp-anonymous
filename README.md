[![Build Status](https://travis-ci.org/PracticaDS/pdes-tp-anonymous.svg?branch=master)](https://travis-ci.org/PracticaDS/pdes-tp-anonymous)
[![Coverage Status](https://coveralls.io/repos/github/PracticaDS/pdes-tp-anonymous/badge.svg?branch=master)](https://coveralls.io/github/PracticaDS/pdes-tp-anonymous?branch=master)

# Grupo Anonymous :: PDeS

* [Enunciado](.pdes/)
* [Revolución Industrial >> Live App](https://practicads.github.io/pdes-tp-anonymous/)

## Installing, Testing & Running

### TL;DR

```sh
git checkout git@github.com:PracticaDS/pdes-tp-anonymous.git
cd pdes-tp-anonymous
cd front && yarn install
yarn test-unwatch
yarn start
```

### Explained

#### Installing


```sh
git checkout git@github.com:PracticaDS/pdes-tp-anonymous.git
cd pdes-tp-anonymous

# Front App
cd front && yarn install
```

#### Testing

```sh
# Front App
cd pdes-tp-anonymous/front

# unwatch test
yarn test-unwatch

# continuous watching 
yarn test
```

#### Running

```sh
# Front App
cd pdes-tp-anonymous/front
yarn start
```

## Branching Strategy

Para resolver cada _issue_ se crea un branch con el número y una referencia al nombre: `issue-NN-descripcion-breve`.

> Por ejemplo, dado el issue "_#42 El sentido de la vida, el universo y todo lo demás_"
> se crea un branch `issue-42-respuesta-a-todo`.

Al resolver el issue se crea un _Pull Request_ hacia `master`. El _reviewer_ debería
hacer un _rebase_ en `master` (idealmente), pedir o no cambios, y luego proceder con
el _merge_.

Si se logró hacer el _merge_ correctamente el _branch_ debiese ser eliminado.
