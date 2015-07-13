# Laravel5 开发环境初始化

## 包含内容：

- RequireJS (2.1.18) 及配置范例文件 /js/main.js
- .bowerrc: 前端模块采用 bower 进行管理，并使用 bower-requirejs 组件，方便组件更新后自动将依赖加入 /js/main.js
- delete.js: Laravel 删除功能的自动化前端实现，配合 resource controller 使用，只需为删除的链接添加 data-method="delete" 和 data-confirm 属性即可实现删除功能，如：

		<a href="{!! controller.destroy !!}" data-method="delete" data-confirm="Are you sure?">

- gulpfile.js: Gulp打包的配置文件，打包生成 /dist/main.js 和 /dist/main.css
- 样式文件统一在 main.css 中调用
- 加入 sb-admin-2.css，方便整合后台管理
- .env: Laravel 环境配置文件，将 `REQ_CSS` 和 `REQ_JS` 放入配置文件，方便切换前端路径
- 添加 urlArgs 时间，防止 JS 缓存
