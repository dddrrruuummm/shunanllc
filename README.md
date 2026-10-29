# SHUN AN LLC Website

可直接上传 GitHub、部署至 Vercel 的完整英文企业网站源码。包含豪华礼宾车队、婚礼车队、开业超跑、葬礼礼宾、车辆租赁、司机展示和询价功能。

## 上传到 GitHub

1. 新建一个 GitHub 仓库。
2. 上传**本文件夹里面的全部文件与子文件夹**。
3. 确保仓库根目录直接能看到 `package.json`、`app`、`components`、`public` 和 `vercel.json`。

不要只上传 ZIP，也不要在仓库外再套一层 `SHUN-AN-LLC-GitHub-Upload` 文件夹。

## 部署到 Vercel

导入上述 GitHub 仓库，根目录选择仓库根目录。项目已附 `vercel.json`，使用以下设置：

| 设置 | 值 |
| --- | --- |
| Framework | Next.js |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `out` |
| 环境变量 | 无需配置 |

这是静态导出网站，不需要数据库、表单服务器或密钥。部署完成后可在 Vercel 的 Domains 中添加 `shunanllc.com`，按其给出的记录设置域名解析。

## 本地开发和预览

需要 Node.js 20.9 或更高版本。

```sh
npm ci
npm run dev
```

查看生产版本：

```sh
npm run build
npm start
```

默认预览地址为 `http://127.0.0.1:3029/`，关闭时按 Ctrl+C。预览脚本只使用 Node.js 内置功能，不依赖 Python。

## 后续修改

- 公司资料、邮箱、电话、地址、车型与参考价格：`lib/site.ts`
- 页面：`app/`
- 通用组件及询价表：`components/`
- 图片：`public/images/`
- 字体及授权文件：`public/fonts/`
- 样式：`app/globals.css`

当前电话 `(909) 555-0148` 为待替换的示例号码，网站已标明。实际使用前请在公司配置和对应展示处更换。

询价表生成摘要后，可由访客打开自己的邮件草稿或保存文本；不会自动发送邮件或完成预订。车辆数量、实际供应和价格以公司最终确认为准。

素材来源与授权记录见 `ASSET-NOTICES.md`。本交付不包含客户原始 PDF、本机依赖、构建缓存、账号信息或开发技能文件。
