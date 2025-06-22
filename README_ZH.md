# 🐉 Dragon Biztrip

> **专业签证办理和商务旅行组织**

[![Website](https://img.shields.io/badge/Website-Live-green.svg)](https://dragonbiztrip.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Languages](https://img.shields.io/badge/Languages-RU%20%7C%20EN%20%7C%20中文-orange.svg)](assets/locales/)

**🌍 其他语言版本:** [Русский](README.md) | [English](README_EN.md)

Dragon Biztrip公司的现代化网站，专门从事俄罗斯、印度、越南、罗马尼亚和中国的签证办理和商务旅行组织。

## ✨ 特色功能

- 🌍 **多语言支持** - 支持俄语、英语和中文
- 📱 **响应式设计** - 在所有设备上都能完美显示
- 🚀 **现代架构** - 模块化JavaScript结构
- ⚡ **快速加载** - 优化的代码和资源
- 🎨 **美观界面** - 现代专业的设计

## 🗂️ 项目结构

```
ChinaVisa/
├── 📁 assets/                 # 静态资源
│   ├── 📁 css/               # 样式文件
│   │   └── 📄 styles.css     # 主要样式
│   ├── 📁 js/                # JavaScript模块
│   │   ├── 📄 buttonLanguage.js    # 语言切换器
│   │   ├── 📄 buttonMenu.js        # 移动端菜单
│   │   └── 📄 developerInfo.js     # 开发者信息块
│   ├── 📁 images/            # 图片资源
│   │   ├── 📄 main-banner.jpg
│   │   ├── 📄 side-image.jpg
│   │   ├── 📄 china.jpg
│   │   ├── 📄 india.jpg
│   │   ├── 📄 vietnam.jpg
│   │   └── 📄 romania.jpg
│   └── 📁 locales/           # 本地化文件
│       ├── 📄 ru.json        # 俄语
│       ├── 📄 en.json        # 英语
│       └── 📄 zh.json        # 中文
├── 📁 docs/                  # 文档
│   ├── 📄 SCRIPTS_README.md  # 脚本文档 (RU)
│   ├── 📄 SCRIPTS_README_EN.md # 脚本文档 (EN)
│   └── 📄 SCRIPTS_README_ZH.md # 脚本文档 (ZH)
├── 📁 pages/                 # HTML页面
│   ├── 📄 about.html         # 关于公司
│   ├── 📄 business-tours.html # 商务旅游
│   ├── 📄 contacts.html      # 联系方式
│   ├── 📄 links.html         # 有用链接
│   ├── 📄 partners.html      # 合作伙伴
│   ├── 📄 services.html      # 服务
│   └── 📄 visas.html         # 签证
├── 📄 index.html             # 主页
├── 📄 main.js                # 主要JavaScript文件
├── 📄 README.md              # 文档（俄语）
├── 📄 README_EN.md           # 文档（英语）
├── 📄 README_ZH.md           # 文档（中文）
├── 📄 LICENSE                # MIT许可证
└── 📄 .gitignore             # Git排除文件
```

## 🚀 快速开始

### 要求
- 支持ES6模块的现代网络浏览器
- 本地网络服务器（用于正确的模块操作）

## 📱 网站页面

| 页面 | 描述 | 路径 |
|------|------|------|
| 🏠 **主页** | 公司信息和服务 | `/index.html` |
| 🛂 **签证** | 签证办理服务 | `/pages/visas.html` |
| 🏢 **商务旅游** | 商务旅行组织 | `/pages/business-tours.html` |
| 🛠️ **服务** | 完整服务列表 | `/pages/services.html` |
| ℹ️ **关于** | Dragon Biztrip公司信息 | `/pages/about.html` |
| 📞 **联系** | 联系方式 | `/pages/contacts.html` |
| 🔗 **有用链接** | 额外资源 | `/pages/links.html` |
| 🤝 **合作伙伴** | 我们的合作伙伴和开发者 | `/pages/partners.html` |

## 🛠️ 技术栈

### 前端
- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 模块化架构
- **Font Awesome** - 图标

### 架构
- **模块化结构** - 功能分离到组件中
- **ES6模块** - 现代代码组织方法
- **响应式设计** - 支持所有设备
- **多语言** - 本地化系统

## 🌍 支持的语言

- 🇷🇺 **俄语** (RU) - 主要语言
- 🇺🇸 **英语** (EN) - 国际语言
- 🇨🇳 **中文** (中文) - 为中国客户

## 🎨 设计

### 配色方案
- **主色调**: #2c3e50 (深蓝色)
- **强调色**: #e74c3c (红色)
- **背景**: #ecf0f1 (浅灰色)
- **文字**: #2c3e50 (深蓝色)

### 字体
- **标题**: Montserrat, sans-serif
- **正文**: Open Sans, sans-serif
- **代码**: 'Courier New', monospace

## 📦 JavaScript模块

### 主要模块
- **`main.js`** - 主要初始化文件
- **`assets/js/buttonLanguage.js`** - 语言切换器
- **`assets/js/buttonMenu.js`** - 移动端菜单
- **`assets/js/developerInfo.js`** - 开发者信息块

### 模块架构
```javascript
// 导入模块
import { initLanguageSwitcher } from './assets/js/buttonLanguage.js';
import { initMobileMenu } from './assets/js/buttonMenu.js';
import { initDeveloperInfo } from './assets/js/developerInfo.js';

// 初始化
function initApp() {
    initLanguageSwitcher();
    initMobileMenu();
    initDeveloperInfo();
}
```

## 🔧 开发

### 添加新模块

1. 在 `assets/js/` 文件夹中创建文件
2. 导出初始化函数：
   ```javascript
   export function initNewModule() {
       // 你的代码
   }
   ```
3. 在 `main.js` 中导入
4. 在 `initApp()` 中添加初始化

### 添加新语言

1. 在 `assets/locales/` 中创建本地化文件
2. 在HTML中添加语言按钮
3. 在 `buttonLanguage.js` 中更新切换逻辑

### 文档

模块化架构的详细文档可在以下位置找到：
- [docs/SCRIPTS_README.md](docs/SCRIPTS_README.md) (俄语)
- [docs/SCRIPTS_README_EN.md](docs/SCRIPTS_README_EN.md) (英语)
- [docs/SCRIPTS_README_ZH.md](docs/SCRIPTS_README_ZH.md) (中文)

## 📄 许可证

本项目采用MIT许可证分发。详情请参阅 [LICENSE](LICENSE) 文件。

## 👨‍💻 开发者

**Британов Константин** - 全栈开发者

- 🌐 [GitHub](https://github.com/Apalon13)
- 💬 [Telegram](https://t.me/Me4chiKun)
- 📧 [Email](mailto:britanov.2005@mail.ru)

## 🤝 贡献

我们欢迎对项目的贡献！请：

1. 分叉仓库
2. 为新功能创建分支
3. 进行更改
4. 创建Pull Request

## 📞 联系方式

**Dragon Biztrip**
- 📞 电话: +7 (912) 217-50-50
- 📧 邮箱: N8293372@gmail.com
- 📍 地址: Jinan City, Yaojia Street, Business District Management Committee, No. 5050
- 🕒 工作时间: 周一至周五 9:00 - 18:00

---

<div align="center">
  <p>为Dragon Biztrip用心制作 ❤️</p>
  <p><small>© 2024 Dragon Biztrip. 保留所有权利。</small></p>
</div> 