#!/bin/bash

run_template() {
    name=${1}

    # mustache sucks.

    echo "{}" > /tmp/${name}.json

    mustache -p partials/head.mustache \
             -p partials/header.mustache \
             -p partials/footer.mustache \
             /tmp/${name}.json ${name}.mustache > ${name}.html

}

run_template terms-of-service
run_template privacy-policy
run_template terms-of-service
