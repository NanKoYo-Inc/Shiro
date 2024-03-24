# Shiro

一个极简主义的个人网站，体现了纸的纯净和雪的清新。

为 [Mix Space](https://github.com/mx-space) 服务的个人站点前端。

<!-- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FInnei%2FShiro&env=NEXT_PUBLIC_GATEWAY_URL,NEXT_PUBLIC_API_URL,NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&project-name=shiro&demo-title=%E9%9D%99%E3%81%8B%E3%81%AA%E6%A3%AE&demo-description=Innei's%20site%20using%20Shiro&demo-url=https%3A%2F%2Finnei.in) -->

以下是一些使用 Shiro 的示例站点：

- [静かな森](https://innei.in)
- [可愛い松](https://blog.wibus.ren/)
- [HuaSui](https://www.vlo.cc/)
- [天翔 TNXG](https://tnxg.top)
- [Star](https://www.xingbest.fun)

欢迎你来体验 Shiro 的魅力！

> [!IMPORTANT]
> 最近，开源圈出现了不少的话题。有关于开源和商业化的伪命题，有开源项目被剽窃用于商业化，有对开源项目的深刻思考等。
> 
> 我想很多不是以公司名义发布的个人开发者开源项目都是非盈利的项目，大多都是开发者自身需要才编写的，然后顺便开源出来回馈依托的开源社区。我也是一样。
>
> 但是，开源并不盈利，却要花费大量的时间去支持。甚至不妨被小人剽窃贴上自身的标签，或者被用于商业化盈利，或者还有人很多的伸手党等等。
>
> 我不想不应该是这样的，也不想花费的精力都是徒劳。因此下一步，我将计划闭源开发此项目，当然此开源项目不会删除，但是不会再迭代任何新功能。
> 如果可以让我听听你的看法，欢迎在 https://github.com/Innei/Shiro/discussions/318 讨论。

## :sparkles: 特征

1. :rocket: **SEO 100%，性能优秀**：在 LightHouse 中表现优秀，Performance > 90%，Best practice > 90%。
2. :art: **UI 现代化，简洁不简单**：用户界面设计现代化，简洁而不简单，让你的体验更加流畅。
3. :gem: **注重细节，UX 极致**：注重每一个细节，所有的动画都使用符合物理的 Spring 弹性动画，每一帧都是大自然的感觉。
4. :bell: **接入 WebSocket，实时获取最新的文章通知**：通过 WebSocket，访客能够实时获取最新的文章通知。
5. :computer: **实时活动状态展示**：配合 [ProcessReporter](https://github.com/mx-space/ProcessReporterMac)，可以在主页上显示实时活动状态。
6. :pencil: **Markdown 的扩展语法**：支持更多的 Markdown 扩展语法，等待你的发掘和使用。
7. :zap: **轻量级管理面板**：可以在管理面板中管理文章、评论等。

## :wrench: 技术栈

- NextJS 13 (App Router)
- Jotai
- Framer motion
- Radix UI
- Socket.IO
- TailwindCSS

## 📄 使用文档

前往：https://mx-space.js.org/themes/shiro

感谢 @wibus-wee 和 @wuhang2003 等其他社区贡献者编写。

## :camera: 截图

<img width="1471" alt="Live Demo" src="https://github.com/Innei/Shiro/assets/41265413/bf8af4ec-0f0c-441a-8c06-4b44e1649597">

轻管理面板：

![](https://github.com/Innei/Shiro/assets/41265413/4bb5b34a-3ce2-45da-bec7-4596ac87f849)
![](https://github.com/Innei/Shiro/assets/41265413/592941d0-2ebe-4d64-bd77-3171829bd896)

<details>
<summary>
点击查看部分完整页面截图
</summary>

![页面截图 1](https://github.com/Innei/Shiro/assets/41265413/1b85c9be-0cd3-46b5-a089-a9ab97fdfecb)
![页面截图 2](https://github.com/Innei/Shiro/assets/41265413/d808d288-c022-42f2-8d74-ad057a588771)

</details>

## :zap: 性能

在 M2 Macbook Air 环境中对逻辑最重的页面进行了测试。

![](https://github.com/Innei/Shiro/assets/41265413/f76152af-4a52-46a2-9b83-20567800ba75)

## :rocket: 部署

[看这里](https://mx-space.js.org/themes/shiro).

## :whale: Docker 部署

### :books: docker-compose

1. change the args inside `docker-compose.yml`

2. run command

```bash
    docker-compose up -d
```

### :package: docker run

```bash
docker build \
 --build-arg BASE_URL=REPLACE_WITH_YOUR_BASE_URL \
 --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=REPLACE_WITH_YOUR_PUBLISHABLE_KEY \
 --build-arg CLERK_SECRET_KEY=REPLACE_WITH_YOUR_SECRET_KEY \
 -t shiro . --load
```

```bash
docker run --name shiro -d -p 2323:2323 shiro
```

## Markdown 扩展语法

请阅读 https://shiro.innei.in/#/markdown

## :heart: 鸣谢 & 许可

2023 © Innei，本项目采用 AGPL-3.0 许可证发布。

部分代码由 GPT-4 和 [cali.so](https://github.com/CaliCastle/cali.so) 提供。

感谢 Mix Space Team 和广大社区朋友们的贡献。

![powered-by-vercel](https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg)

> [个人网站](https://innei.in/) · GitHub [@Innei](https://github.com/innei/)
