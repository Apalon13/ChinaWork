# Dragon Biztrip 模块化脚本结构

## 概述

项目已重新组织为使用模块化JavaScript架构。所有脚本现在都分离到单独的模块中，并通过主文件 `main.js` 进行管理。

## 文件结构

### 主要文件
- `main.js` - 导入并初始化所有模块的主文件
- `assets/js/buttonLanguage.js` - 语言切换模块
- `assets/js/buttonMenu.js` - 移动端菜单模块
- `assets/js/developerInfo.js` - 开发者信息块模块

### HTML文件
所有HTML文件现在只使用一个脚本：
```html
<script type="module" src="main.js"></script>
```

## 模块

### main.js
主文件功能：
- 导入所有模块
- 初始化功能
- 处理初始化错误
- 记录加载过程

### buttonLanguage.js
语言切换模块：
- 加载本地化文件
- 翻译页面内容
- 在localStorage中保存选择的语言
- 导出 `initLanguageSwitcher()` 函数

### buttonMenu.js
移动端菜单模块：
- 管理汉堡菜单
- 处理移动端菜单的打开/关闭
- 点击链接或菜单外部时关闭菜单
- 导出 `initMobileMenu()` 函数

### developerInfo.js
开发者块模块：
- 管理开发者信息显示
- 处理箭头动画
- 使用data属性而不是onclick
- 导出 `toggleDeveloperInfo()` 和 `initDeveloperInfo()` 函数

## 新结构的优势

1. **模块化** - 每个功能在单独的文件中
2. **可重用性** - 模块可以独立使用
3. **可维护性** - 更容易找到和修复错误
4. **可扩展性** - 轻松添加新模块
5. **性能** - ES6模块异步加载

## 使用方法

### 添加新模块

1. 创建新的模块文件（例如，`newModule.js`）
2. 导出初始化函数：
```javascript
export function initNewModule() {
    // 你的代码
}
```
3. 在 `main.js` 中导入：
```javascript
import { initNewModule } from './assets/js/newModule.js';
```
4. 在 `initApp()` 函数中添加初始化：
```javascript
try {
    initNewModule();
    console.log('✅ 新模块已初始化');
} catch (error) {
    console.error('❌ 初始化新模块时出错:', error);
}
```

### 使用数据属性

使用data属性而不是 `onclick`：
```html
<!-- 之前 -->
<button onclick="toggleDeveloperInfo()">按钮</button>

<!-- 之后 -->
<button data-action="toggle-developer">按钮</button>
```

在模块中处理：
```javascript
const button = document.querySelector('[data-action="toggle-developer"]');
if (button) {
    button.addEventListener('click', toggleDeveloperInfo);
}
```

## 兼容性

- 需要支持ES6模块的现代浏览器
- 所有主要浏览器都支持ES6模块
- 对于旧版浏览器，可能需要转译

## 调试

在浏览器控制台中，您将看到初始化日志：
- 🚀 正在初始化 Dragon Biztrip...
- ✅ 语言切换器已初始化
- ✅ 移动端菜单已初始化
- ✅ 开发者块已初始化
- 🎉 Dragon Biztrip 成功初始化！

错误消息将显示 ❌。

## 文件路径

### 对于主页 (index.html)
```javascript
import { initLanguageSwitcher } from './assets/js/buttonLanguage.js';
```

### 对于 /pages/ 文件夹中的页面
```javascript
import { initLanguageSwitcher } from '../assets/js/buttonLanguage.js';
```

## 本地化文件

本地化文件位于 `assets/locales/`：
- `ru.json` - 俄语翻译
- `en.json` - 英语翻译
- `zh.json` - 中文翻译

语言切换器根据当前页面位置自动检测正确的路径。

## 错误处理

所有模块都包含用于错误处理的try-catch块：
```javascript
try {
    initLanguageSwitcher();
    console.log('✅ 语言切换器已初始化');
} catch (error) {
    console.error('❌ 初始化语言切换器时出错:', error);
}
```

## 性能考虑

- ES6模块异步加载
- 模块被浏览器缓存
- 只加载必要的模块
- 错误处理防止崩溃

## 最佳实践

1. **始终从模块导出函数**
2. **为导出的函数使用描述性名称**
3. **在try-catch块中处理错误**
4. **使用data属性而不是内联事件处理器**
5. **记录初始化以便调试**
6. **在添加事件监听器之前检查元素是否存在**

## 未来增强

模块化结构的潜在改进：
- 添加模块懒加载
- 实现模块依赖管理
- 添加模块测试框架
- 创建模块文档生成器
- 添加模块性能监控

## 模块开发指南

### 创建新模块的步骤

1. **创建文件** - 在 `assets/js/` 文件夹中创建新文件
2. **编写功能** - 实现所需的功能
3. **导出函数** - 导出初始化函数
4. **导入模块** - 在 `main.js` 中导入
5. **初始化** - 在 `initApp()` 中添加初始化调用
6. **测试** - 测试模块功能
7. **文档** - 更新文档

### 模块命名约定

- 使用camelCase命名文件
- 使用描述性名称
- 添加适当的注释
- 遵循单一职责原则

### 错误处理模式

```javascript
export function initModule() {
    try {
        // 模块初始化代码
        console.log('✅ 模块已初始化');
    } catch (error) {
        console.error('❌ 模块初始化失败:', error);
    }
}
``` 