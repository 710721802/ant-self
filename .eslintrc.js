/*
 * @Author: Coco wangkk4@lenovo.com
 * @Date: 2023-02-17 10:12:16
 * @LastEditors: Coco wangkk4@lenovo.com
 * @LastEditTime: 2023-02-24 11:10:02
 * @FilePath: /lenovo-brain-design/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:vue/essential",
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: [
        "vue",
        "@typescript-eslint",
        "import"
    ],
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    rules: {
        // semi: ["error", "always"],
        // quotes: ["error", "double"],
        indent: ["error", 2],
        'no-console': 1,
        "no-unused-vars":  2,
        "import/extensions": [ // 这个是解决不写后缀报错的问题
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never",
                "json": "never"
            }
        ],
        "import/no-named-as-default": 0 // 允许可以不用默认导出
    },
};
