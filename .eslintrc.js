module.exports = {
    "extends": ["standard", "plugin:react/recommended"],
    parser: "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "max-len": [1, 120, 2, { ignoreComments: true }]
    }
};