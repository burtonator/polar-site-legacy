#!/bin/bash

# mustache sucks.

mustache -p partials/head.mustache \
         -p partials/header.mustache \
         -p partials/footer.mustache terms-of-service.json terms-of-service.mustache > terms-of-service.html
